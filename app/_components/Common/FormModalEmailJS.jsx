import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FormModal.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormModalEmailJS = ({ closeModal }) => {
  const [startDate, setStartDate] = useState(null);
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    services: "",
    message: "",
    meeting_time: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleData = (value) => {
    setFormData((lastFormData) => {
      return {
        ...lastFormData,
        meeting_time: value,
      };
    });
  };

  // EmailJS Alternative - Works 100% with static sites
  const sendEmailJS = async (templateParams) => {
    try {
      // EmailJS public configuration (replace with your EmailJS details)
      const emailjsConfig = {
        serviceID: "service_xxxxxxx", // Your EmailJS service ID
        templateID: "template_xxxxxxx", // Your EmailJS template ID
        publicKey: "your_public_key", // Your EmailJS public key
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: emailjsConfig.serviceID,
            template_id: emailjsConfig.templateID,
            user_id: emailjsConfig.publicKey,
            template_params: templateParams,
          }),
        }
      );

      return response.ok;
    } catch (error) {
      console.error("EmailJS error:", error);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields (Name and Email)");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      // Try cPanel PHP form first
      const response = await fetch("./contact-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          services: formData.services,
          meeting_time: formData.meeting_time,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          result.message ||
            "Perfect! Your gas heater service request has been sent. We'll contact you within 2-4 hours! 🔥"
        );

        // Reset form
        setFormData(initialFormData);
        setStartDate(null);

        // Close modal after a delay
        setTimeout(() => {
          closeModal(false);
        }, 2000);
      } else {
        throw new Error("PHP form failed");
      }
    } catch (error) {
      console.error(
        "Primary form submission failed, trying alternatives:",
        error
      );

      // Try EmailJS as backup
      const emailjsSent = await sendEmailJS({
        to_email: "nihaanexpertise@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        address: formData.address || "Not provided",
        services: formData.services || "Not specified",
        meeting_time: formData.meeting_time || "Flexible",
        message: formData.message || "No additional message",
        timestamp: new Date().toLocaleString(),
      });

      if (emailjsSent) {
        toast.success(
          "🔥 Great! Your service request has been sent via our backup system. We'll contact you soon!"
        );

        // Reset form
        setFormData(initialFormData);
        setStartDate(null);
        setTimeout(() => closeModal(false), 2000);
      } else {
        // Final fallback to mailto
        toast.info(
          "Opening email client for you... Please complete sending your request."
        );

        const subject = encodeURIComponent(
          "🔥 Gas Heater Service Request - Schedule Online"
        );
        const body = encodeURIComponent(
          `Dear Gas Heater Service Team,

I would like to schedule a service appointment with the following details:

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "Not provided"}
🏠 Address: ${formData.address || "Not provided"}
🔧 Service Type: ${formData.services || "Not specified"}
📅 Preferred Time: ${formData.meeting_time || "Flexible"}

💬 Additional Message:
${formData.message || "No additional message"}

---
This request was sent from your website contact form
Time: ${new Date().toLocaleString()}

Please contact me at your earliest convenience to schedule the service.

Thank you!`
        );

        window.location.href = `mailto:nihaanexpertise@gmail.com?subject=${subject}&body=${body}`;

        // Reset form after mailto
        setTimeout(() => {
          setFormData(initialFormData);
          setStartDate(null);
          closeModal(false);
        }, 1000);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <p className={`${styles.textIndent}`}>
          Our friendly gas heating specialists work around your busy schedule.
          We never charge extra for same-day service, evenings, or weekend
          appointments. Enjoy hassle-free booking and reliable service, whenever
          you need it!
        </p>
        {/* Rest of your form JSX remains the same */}
        <div className="form__holder">
          <input
            type="text"
            autoComplete="name"
            className="form__control"
            placeholder="Your Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Your Name"
            required
          />
        </div>
        {/* Add all your other form fields here */}

        <div className="form__holder">
          <button
            type="submit"
            className="btn btn--primary w-full"
            disabled={!formData.name || !formData.email}
          >
            🔥 Schedule Gas Heater Service
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default FormModalEmailJS;
