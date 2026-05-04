"use client";
import { useState } from "react";

const serviceOptions = [
  "Gas Heater Installation",
  "Gas Heater Repair",
  "Gas Heater Service",
  "Emergency Gas Heater Repair",
];

const FormAside = ({ buttonText = "Get Free Quote" }) => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service) return;

    const subject = encodeURIComponent(`Service Enquiry: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

    setFormData(initialFormData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <div className="relative" suppressHydrationWarning>
        {submitted && (
          <div style={{
            background: "rgba(30,96,170,0.15)",
            border: "1px solid var(--base-color2)",
            borderRadius: "8px",
            padding: "12px 16px",
            marginBottom: "14px",
            color: "inherit",
            fontSize: "14px",
            fontWeight: 600,
          }}>
            ✓ Thank you! Your enquiry has been prepared for sending.
          </div>
        )}
        <div className="form__holder">
          <input
            type="text"
            autoComplete="name"
            className="form__control"
            placeholder="Your Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__holder">
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="form__control"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__holder">
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="form__control"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__holder">
          <select
            name="service"
            className="form__control"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a Service *</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="form__holder">
          <textarea
            rows="4"
            className="form__control"
            placeholder="Additional Details (Optional)"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn__type2">
          <span>{buttonText}</span>
        </button>
      </div>
    </form>
  );
};
export default FormAside;
