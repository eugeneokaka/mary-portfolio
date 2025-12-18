"use client";
import React, { useState } from "react";

const LinkedInIcon = () => (
  <svg
    className="h-6 w-6 text-teal-600"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.8 2.6 4.8 6V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.2V24h-4V8z" />
  </svg>
);

const ContactSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);
    if (res.ok) setSuccess(true);
  }

  const inputStyles =
    "mt-1 w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 p-4";

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-teal-600 font-bold uppercase tracking-wide">
            Contact
          </h3>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Let’s Work Together
          </h2>
          <p className="mt-4 text-gray-600">
            Send a message or reach me directly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* CONTACT INFO */}
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-gray-900">
                Telephone & WhatsApp
              </p>
              <a
                href="https://wa.me/254721427803"
                className="text-teal-600 hover:underline"
              >
                +254 721 427 803
              </a>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <a
                href="mailto:mary@oasiswellnessconsultancy.co.ke"
                className="text-teal-600 hover:underline break-all"
              >
                mary@oasiswellnessconsultancy.co.ke
              </a>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                required
                placeholder="Your name"
                className={inputStyles}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className={inputStyles}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Write your message here..."
                className={inputStyles}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <a
                href="https://www.linkedin.com/in/mary-adhiambo"
                target="_blank"
                className="flex items-center gap-2 text-teal-700 font-medium hover:underline"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>

            {success && (
              <p className="text-sm text-teal-600 font-medium">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
