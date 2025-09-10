import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FormModal.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FormModal = ({ closeModal }) => {
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

        // Close modal after a delay
        setTimeout(() => {
          closeModal(false);
        }, 2000);
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
        <div className="form__holder">
          <input
            type="text"
            autoComplete="name"
            className="form__control"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Your Name"
          />
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col sm:gap-[15px]">
          <div className="form__holder">
            <input
              type="text"
              autoComplete="email"
              className="form__control"
              placeholder="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="E-mail"
            />
          </div>
          <div className="form__holder">
            <input
              type="text"
              className="form__control"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              aria-label="Phone"
            />
          </div>
        </div>
        <div className="form__holder">
          <input
            type="text"
            className="form__control"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            aria-label="Address"
          />
        </div>
        <div className="form__holder">
          <div className={`form__select`}>
            <label htmlFor="services">
              <select
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
                aria-label="select services"
                aria-labelledby="select services"
              >
                <option value="Service 01">Gas Heater Repair</option>
                <option value="Service 02">Gas Heater Installment</option>
                <option value="Service 03">Gas Heater Service </option>
              </select>
            </label>
          </div>
        </div>
        <div className="form__holder">
          <textarea
            rows="3"
            className="form__control"
            placeholder="Tell us more about your issue"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-label="Tell us more about your issue"
          ></textarea>
        </div>
        <div className="form__holder">
          <DatePicker
            selected={startDate}
            value={formData.selected}
            className="form__control DatePicker__iconLeft w-full"
            onChange={(date) => {
              setStartDate(date);
              handleData(date);
            }}
            showTimeSelect
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm"
            placeholderText="Date or Time of visit"
            label="Date or Time of visit"
            aria-label="Date or Time of visit"
          />
          <i
            className={`${styles.input__icon} icon-833593 pointer-events-none`}
          ></i>
        </div>
        <button className="btn">
          <span>Schedule Online</span>
        </button>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  );
};
export default FormModal;
