"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormContact({ wrapperClass }) {
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
      // For static sites hosted on cPanel, use the PHP file in public folder
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
      } else {
        toast.error(
          result.error || "Failed to send your request. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      // For static sites, provide enhanced mailto fallback
      toast.info(
        "Opening email client for you... Please complete sending your request."
      );

      // Enhanced mailto fallback with professional formatting
      const subject = encodeURIComponent(
        "🔥 Gas Heater Service Request - Contact Form"
      );
      const body = encodeURIComponent(
        `Dear Gas Heater Service Team,

I would like to request gas heater service with the following details:

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "Not provided"}
🏠 Address: ${formData.address || "Not provided"}
🔧 Service Type: ${formData.services || "Not specified"}
📅 Preferred Time: ${formData.meeting_time || "Flexible"}

💬 Message:
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
      }, 1000);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={wrapperClass ? `${wrapperClass} form` : "form"}
      >
        <h6 className="ttsubtitle">🔥 Schedule Gas Heater Service</h6>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
          Our friendly gas heating specialists work around your busy schedule.
          We never charge extra for same-day service, evenings, or weekend
          appointments. Enjoy hassle-free booking and reliable service, whenever
          you need it!
        </p>

        <div className="form__holder">
          <input
            type="text"
            name="name"
            autoComplete="name"
            className="form__control"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            aria-label="Your Name"
            required
          />
        </div>

        <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col sm:gap-[15px]">
          <div className="form__holder">
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="form__control"
              placeholder="E-mail *"
              value={formData.email}
              onChange={handleChange}
              aria-label="E-mail"
              required
            />
          </div>
          <div className="form__holder">
            <input
              type="text"
              name="phone"
              autoComplete="tel"
              className="form__control"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone"
            />
          </div>
        </div>

        <div className="form__holder">
          <input
            type="text"
            name="address"
            autoComplete="address-line1"
            className="form__control"
            placeholder="Service Address"
            value={formData.address}
            onChange={handleChange}
            aria-label="Service Address"
          />
        </div>

        <div className="form__holder">
          <div className="form__select">
            <label htmlFor="services">
              <select
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="form__control"
                aria-label="Select Service Type"
                style={{
                  appearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23666' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "12px",
                  paddingRight: "40px",
                }}
              >
                <option value="">Select Service Type</option>
                <option value="Gas Heater Repair">🔧 Gas Heater Repair</option>
                <option value="Gas Heater Installation">
                  ⚙️ Gas Heater Installation
                </option>
                <option value="Gas Heater Service">
                  🛠️ Gas Heater Service & Maintenance
                </option>
                <option value="Emergency Repair">
                  🚨 Emergency Gas Heater Repair
                </option>
                <option value="Gas Heater Replacement">
                  🔄 Gas Heater Replacement
                </option>
              </select>
            </label>
          </div>
        </div>

        <div className="form__holder">
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            📅 Preferred Meeting Time (Optional)
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              handleData(date ? date.toLocaleString() : "");
            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="form__control"
            placeholderText="Select preferred date and time"
            minDate={new Date()}
            style={{ width: "100%" }}
          />
        </div>

        <div className="form__holder">
          <textarea
            rows="4"
            placeholder="Additional Message or Special Requirements"
            className="form__control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-label="Additional Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn__type2"
          disabled={!formData.name || !formData.email}
          style={{
            opacity: !formData.name || !formData.email ? 0.6 : 1,
            cursor:
              !formData.name || !formData.email ? "not-allowed" : "pointer",
          }}
        >
          <span>🔥 Send Service Request</span>
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}
