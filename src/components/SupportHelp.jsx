import React, { useState } from "react";
import "./SupportHelp.css";

const SupportHelp = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How do I post a job?",
      answer:
        "Go to the 'Post a Job' section and fill in the required details.",
      open: false,
    },
    {
      question: "How can I contact applicants?",
      answer: "You can contact applicants via the 'View Applicants' section.",
      open: false,
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq))
    );
  };

  return (
    <div className="support-container">
      <h2>Support & Help</h2>

      {/* FAQ Section */}
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${faq.open ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{faq.open ? "▲" : "▼"}</span>
            </button>
            {faq.open && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className="contact-form">
        <h3>Need More Help?</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            placeholder="Describe your issue"
            rows="4"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SupportHelp;
