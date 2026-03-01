"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus({ type: "error", message: data.message })
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus({ type: "error", message: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-14 md:mb-16"
        >
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">
            REACH OUT
          </p>
          <p className="font-sans text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-balance text-muted-foreground">
            Whether you have a project in mind, want to collaborate, or just want to say hello—I'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 sm:space-y-8"
        >
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 border ${
                submitStatus.type === "success"
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-red-500 bg-red-500/10 text-red-500"
              }`}
            >
              <p className="font-mono text-xs">{submitStatus.message}</p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <label
                htmlFor="name"
                className="font-mono text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase mb-3 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors duration-300 disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-mono text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase mb-3 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors duration-300 disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="font-mono text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase mb-3 block"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors duration-300 disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="font-mono text-[10px] sm:text-xs tracking-wider text-muted-foreground uppercase mb-3 block"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={6}
              className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50"
            />
          </div>

          <motion.button
            type="submit"
            data-cursor-hover
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className="relative px-6 sm:px-8 py-3 sm:py-4 border border-white/20 font-mono text-xs sm:text-sm tracking-widest uppercase bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-500 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full group-hover:animate-ping" />
            )}
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 sm:mt-24 md:mt-32 pt-12 sm:pt-14 md:pt-16 border-t border-white/10"
        >
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-6 sm:mb-8">
            OR CONNECT DIRECTLY
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <p className="font-mono text-xs text-accent mb-2 tracking-wider">EMAIL</p>
              <a
                href="mailto:mohammedfaizkhan30@gmail.com"
                className="font-mono text-sm hover:text-accent transition-colors duration-300 break-all"
              >
                mohammedfaizkhan30@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs text-accent mb-2 tracking-wider">SOCIAL</p>
              <div className="flex flex-col gap-2">
                <a href="#" className="font-mono text-sm hover:text-accent transition-colors duration-300">
                  Instagram
                </a>
                <a href="#" className="font-mono text-sm hover:text-accent transition-colors duration-300">
                  Facebook
                </a>
                <a href="#" className="font-mono text-sm hover:text-accent transition-colors duration-300">
                  Discord
                </a>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-accent mb-2 tracking-wider">LOCATION</p>
              <p className="font-mono text-sm text-muted-foreground">Manchester, UK</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-20 sm:mt-24 md:mt-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
