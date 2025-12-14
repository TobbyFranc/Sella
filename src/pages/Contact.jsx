import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaCheckCircle,
  FaSpinner,
  FaPaperPlane,
  FaTimesCircle,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [toast, setToast] = useState(null); // "success" | "error" | null
  const [btnState, setBtnState] = useState("idle"); // "idle" | "sending" | "success"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setToast("error");
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setBtnState("sending");
    try {
await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);



      setBtnState("success");
      setToast("success");
      form.reset();

      setTimeout(() => {
        setBtnState("idle");
        setToast(null);
      }, 3000);
    } catch (err) {
      console.error("Error sending message:", err);
      setToast("error");
      setBtnState("idle");
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <section className="min-h-screen mt-24 px-6 py-12 bg-[var(--main-bg-color)] text-[var(--secondary-text-color)]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--accent)] mb-4">
          Let’s Talk Business
        </h2>
        <p className="text-lg md:text-xl open-sans-200">
          Got questions, ideas, or collaborations? Reach out and let’s make something extraordinary.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 bg-[var(--card-bg-color)] p-8 rounded-lg shadow-lg animate-fadeIn">
          <h3 className="text-xl font-semibold text-[var(--accent)] mb-4">Contact Information</h3>
          <p className="flex items-center gap-3 open-sans-200">
            <FaMapMarkerAlt className="text-[var(--accent)]" /> Akure, Ondo State, Nigeria
          </p>
          <p className="flex items-center gap-3 open-sans-200">
            <FaEnvelope className="text-[var(--accent)]" /> hello@sella.com
          </p>
          <p className="flex items-center gap-3 open-sans-200">
            <FaPhone className="text-[var(--accent)]" /> +234 814 SELLA 4U
          </p>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 text-2xl">
            <a href="#" className="text-[var(--accent)] hover:scale-110 transition"><FaTwitter /></a>
            <a href="#" className="text-[var(--accent)] hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" className="text-[var(--accent)] hover:scale-110 transition"><FaLinkedin /></a>
          </div>

          {/* Map Embed */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.45123456789!2d5.193!3d7.250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047f8f123456789%3A0xabcdef123456789!2sAkure%2C%20Ondo%20State!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-[var(--card-bg-color)] p-8 rounded-lg shadow-lg animate-fadeIn relative"
        >
          <h3 className="text-xl font-semibold text-[var(--accent)] mb-4">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--main-bg-color)] text-[var(--secondary-text-color)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--main-bg-color)] text-[var(--secondary-text-color)]"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--main-bg-color)] text-[var(--secondary-text-color)]"
          ></textarea>

          {/* Dynamic Button */}
          <button
            type="submit"
            disabled={btnState === "sending"}
            className={`px-6 py-3 font-semibold rounded-md transition shadow flex items-center justify-center gap-2
              ${btnState === "idle" ? "bg-[var(--accent)] text-[var(--main-bg-color)] hover:bg-[var(--accent)]/80" : ""}
              ${btnState === "sending" ? "bg-gray-400 text-white cursor-not-allowed" : ""}
              ${btnState === "success" ? "bg-green-600 text-white" : ""}
            `}
          >
            {btnState === "idle" && (<><FaPaperPlane /> Send Message</>)}
            {btnState === "sending" && (<><FaSpinner className="animate-spin" /> Sending…</>)}
            {btnState === "success" && (<><FaCheckCircle /> Message Delivered</>)}
          </button>

          {/* Toast Notification */}
          {toast === "success" && (
            <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg animate-fadeIn flex items-center gap-2">
              <FaCheckCircle /> Message sent successfully!
            </div>
          )}
          {toast === "error" && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md shadow-lg animate-fadeIn flex items-center gap-2">
              <FaTimesCircle /> Please fill in all fields
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
