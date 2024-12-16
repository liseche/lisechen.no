import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    validation_token: Math.random().toString(36).substring(2, 15), // Generate random token
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the validation token is correct
    if (!formData.validation_token) {
      alert("Bot detected! Submission rejected.");
      return;
    }

    emailjs
      .send(
        "default_service",  // Replace with your Service ID
        "template_1ebpg2s", // Replace with your Template ID
        formData,
        "GaRN3QPHmhFn_CvsP"   // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );

    setFormData({
      from_name: "",
      reply_to: "",
      message: "",
      validation_token: Math.random().toString(36).substring(2, 15), // Regenerate token
    });
  };

  return (
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="from_name" className="form-label">Name 🧑</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            className="form-control"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Bendik Bendiksen"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reply_to" className="form-label">Email @</label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            className="form-control"
            value={formData.reply_to}
            onChange={handleChange}
            placeholder="bend@gmail.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message 📩</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Jeg fant mobilen din i dass."
            required
          ></textarea>
        </div>
        <input type="hidden" name="validation_token" value={formData.validation_token} />
        <button type="submit" className="btn btn-primary w-100">Send</button>
      </form>
  );
};

const Contact = () => {
  return (
    <>
    <h1>Contact Me ☏</h1>
    <p>Did you find something I lost? Please contact me through the form :) Thank you BTW, I spend an embarassing amount of money replacing things I lose :(</p>
    <ContactForm/>
    </>
  )
};

export default Contact;
