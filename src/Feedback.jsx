import React, { useState, UseEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    // Send event to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'submit_feedback', {
        feedback_text: feedback,
      });
    }

    // Optionally send to backend here

    alert("Thank you for your feedback!");
    setFeedback("");
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (window.gtag) {
      window.gtag('event', 'open_feedback_modal');
    }
  };
const [showRate, setShowRate] = useState(false);

  return (
  <>
    <div className="fixed bottom-8 left-8 z-40">
      <button
        onClick={() => setShowRate(!showRate)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        Rate
      </button>
      {showRate && (
        <div className="mt-2 p-4 bg-white text-black rounded-lg shadow-lg w-48">
          <p>Enjoying the site?</p>
          <a
            href="https://your-rate-link.com"
            className="block mt-2 text-indigo-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to rate!
          </a>
        </div>
      )}
    </div>
  </>
);
};

export default Feedback;
