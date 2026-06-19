import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("/api/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="text-dark-600 max-w-xl mx-auto mt-4">
            Have a project in mind or want to discuss cloud infrastructure? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <InfoItem icon="📧" label="Email" value="samadhandhumal1234@gmail.com" />
            <InfoItem icon="🏢" label="Company" value="Operisoft Technologies PVT LTD" />
            <InfoItem icon="📍" label="Location" value="India" />
            <InfoItem icon="💼" label="Open to" value="Full-time, Freelance, Cloud Consulting" />
            <div className="pt-4">
              <p className="text-dark-600 text-sm mb-3">Find me on</p>
              <div className="flex gap-3">
                <SocialBtn href="https://github.com/Samadhan-DevOps" label="GitHub">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </SocialBtn>
                <SocialBtn href="https://www.linkedin.com/in/samadhan-dhumal/" label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialBtn>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                label="Name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required
              />
              <FormField
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-600 mb-1">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="w-full bg-dark-700 border border-dark-600 focus:border-primary-500 text-white placeholder-dark-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              {status !== "loading" && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              )}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center bg-green-500/10 border border-green-500/20 rounded-xl py-3">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-3">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-dark-600 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 bg-dark-700 hover:bg-primary-600 text-dark-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200"
    >
      {children}
    </a>
  );
}

function FormField({ label, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-dark-600 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-dark-700 border border-dark-600 focus:border-primary-500 text-white placeholder-dark-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
      />
    </div>
  );
}
