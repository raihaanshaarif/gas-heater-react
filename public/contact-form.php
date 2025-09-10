<?php
// Gas Heater Service - Contact Form Handler for Static Site + cPanel
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    if (empty($input['name']) || empty($input['email'])) {
        throw new Exception('Name and email are required');
    }
    
    // Sanitize input data
    $name = htmlspecialchars(trim($input['name']));
    $email = filter_var(trim($input['email']), FILTER_VALIDATE_EMAIL);
    $phone = htmlspecialchars(trim($input['phone'] ?? ''));
    $address = htmlspecialchars(trim($input['address'] ?? ''));
    $services = htmlspecialchars(trim($input['services'] ?? ''));
    $message = htmlspecialchars(trim($input['message'] ?? ''));
    $meeting_time = htmlspecialchars(trim($input['meeting_time'] ?? ''));
    
    if (!$email) {
        throw new Exception('Invalid email address');
    }
    
    // Email configuration
    $to = 'nihaanexpertise@gmail.com';
    $subject = '🔥 NEW Gas Heater Service Request - Website Contact';
    $from_email = 'noreply@gasheaterservicemelbourne.com.au'; // Your domain email
    
    // Create professional HTML email template
    $emailBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <title>Gas Heater Service Request</title>
        <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa; margin: 0; padding: 0; }
            .email-container { max-width: 650px; margin: 0 auto; background-color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #ff6b35, #ff8e35); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
            .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.9; }
            .content { padding: 30px; }
            .customer-info { background-color: #f8f9fa; border-radius: 10px; padding: 25px; margin: 20px 0; border-left: 5px solid #ff6b35; }
            .info-row { display: flex; margin-bottom: 15px; align-items: flex-start; }
            .info-label { font-weight: 600; color: #555; min-width: 140px; font-size: 14px; }
            .info-value { flex: 1; font-size: 16px; color: #333; }
            .service-type { background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 20px 0; }
            .priority-alert { background-color: #d4edda; padding: 20px; border-radius: 10px; border-left: 5px solid #28a745; margin: 25px 0; }
            .contact-buttons { text-align: center; margin: 25px 0; }
            .contact-btn { display: inline-block; padding: 12px 25px; margin: 5px; background-color: #ff6b35; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; }
            .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e9ecef; }
            .timestamp { color: #666; font-style: italic; }
            @media (max-width: 600px) {
                .info-row { flex-direction: column; }
                .info-label { min-width: auto; margin-bottom: 5px; }
            }
        </style>
    </head>
    <body>
        <div class='email-container'>
            <div class='header'>
                <h1>🔥 NEW SERVICE REQUEST</h1>
                <p>Gas Heater Service - Website Contact Form</p>
            </div>
            
            <div class='content'>
                <div class='priority-alert'>
                    <strong>⚡ CUSTOMER WAITING:</strong> New gas heater service request received. Please respond within 2-4 hours during business hours for optimal customer satisfaction.
                </div>
                
                <div class='customer-info'>
                    <h3 style='margin-top: 0; color: #ff6b35;'>📋 Customer Information</h3>
                    
                    <div class='info-row'>
                        <div class='info-label'>👤 Customer Name:</div>
                        <div class='info-value'><strong>{$name}</strong></div>
                    </div>
                    
                    <div class='info-row'>
                        <div class='info-label'>📧 Email Address:</div>
                        <div class='info-value'><a href='mailto:{$email}' style='color: #ff6b35;'>{$email}</a></div>
                    </div>
                    
                    <div class='info-row'>
                        <div class='info-label'>📞 Phone Number:</div>
                        <div class='info-value'>" . ($phone ? "<a href='tel:$phone' style='color: #ff6b35;'>$phone</a>" : '<em>Not provided</em>') . "</div>
                    </div>
                    
                    <div class='info-row'>
                        <div class='info-label'>🏠 Service Address:</div>
                        <div class='info-value'>" . ($address ?: '<em>Not provided - will be discussed during contact</em>') . "</div>
                    </div>
                    
                    <div class='info-row'>
                        <div class='info-label'>📅 Preferred Time:</div>
                        <div class='info-value'>" . ($meeting_time ?: '<em>Flexible scheduling</em>') . "</div>
                    </div>
                </div>
                
                <div class='service-type'>
                    <h4 style='margin: 0 0 10px 0; color: #856404;'>🔧 Service Required:</h4>
                    <strong style='font-size: 18px; color: #856404;'>" . ($services ?: 'Service type to be determined') . "</strong>
                </div>
                
                " . ($message ? "
                <div style='background-color: #e8f4f8; padding: 20px; border-radius: 10px; border-left: 5px solid #17a2b8;'>
                    <h4 style='margin: 0 0 10px 0; color: #0c5460;'>💬 Customer Message:</h4>
                    <p style='margin: 0; font-style: italic; color: #0c5460;'>\"$message\"</p>
                </div>
                " : "") . "
                
                <div class='contact-buttons'>
                    <a href='mailto:{$email}' class='contact-btn'>📧 Reply via Email</a>
                    " . ($phone ? "<a href='tel:$phone' class='contact-btn'>📞 Call Customer</a>" : "") . "
                </div>
                
                <div style='background-color: #fff3cd; padding: 15px; border-radius: 8px; text-align: center; margin: 25px 0;'>
                    <strong>🚨 Emergency Gas Heater Repairs:</strong> If this appears to be an emergency, contact the customer immediately!
                </div>
            </div>
            
            <div class='footer'>
                <p><strong>📧 Gas Heater Service - Website Contact Form</strong></p>
                <p class='timestamp'>🕒 Received: " . date('l, F j, Y \a\t g:i A T') . "</p>
                <p>🌐 Source: Schedule Online Form (Static Site)</p>
                <p style='margin-top: 15px; font-size: 11px;'>This email was automatically generated from your website contact form.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Email headers for better deliverability
    $headers = array(
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: Gas Heater Service Website <' . $from_email . '>',
        'Reply-To: ' . $name . ' <' . $email . '>',
        'X-Mailer: Gas Heater Service Contact Form',
        'X-Priority: 2', // High priority for service requests
        'Importance: High'
    );
    
    // Send email using PHP mail() function (works on most cPanel hosting)
    $sent = mail($to, $subject, $emailBody, implode("\r\n", $headers));
    
    if ($sent) {
        // Success response
        echo json_encode([
            'success' => true,
            'message' => '🔥 Perfect! Your gas heater service request has been sent successfully! Our specialists will contact you within 2-4 hours during business hours. For emergency repairs, expect a call much sooner!'
        ]);
    } else {
        throw new Exception('Email system temporarily unavailable');
    }
    
} catch (Exception $e) {
    // Log error for debugging (you can check cPanel error logs)
    error_log("Gas Heater Service Contact Form Error: " . $e->getMessage() . " - IP: " . $_SERVER['REMOTE_ADDR']);
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'We apologize, there was a technical issue sending your request. Please call us directly for immediate gas heater service, or try submitting the form again in a few minutes.'
    ]);
}
?>
