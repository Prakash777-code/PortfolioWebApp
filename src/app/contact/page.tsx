"use client";

import { submitContactForm } from "@/Services/contact";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
 

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !email || !message) {
      setSuccess("Please fill all the fields!");
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      const data = await submitContactForm(
        name,
        email,
        message
      )

      if (data.success) {
        setSuccess("Message sent successfully");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSuccess("Something went wrong");
      }
    } catch (error) {
      setSuccess("Server error");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
        <h1 className="text-4xl font-bold text-center text-white">
          Get in <span className="text-violet-400">Touch</span>
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Have a project or idea? Let’s talk 🚀
        </p>

        <div className="mb-10 text-center">
          <p className="text-slate-400">Or reach me directly</p>

          <div className="mt-4 flex flex-col items-center gap-2 text-slate-300">
            <p>
              <span className="text-violet-400">prakaxkumar@gmail.com</span>
            </p>

            <p>
              <span className="text-cyan-400">+91 9678963344</span>
            </p>
          </div>
        </div>

        {success && (
          <div className="mb-6 text-center">
            <p className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              {success}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-violet-500/50 focus:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500/50 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-violet-500/50 focus:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition resize-none"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
}
