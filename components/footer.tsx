"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function Footer() {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleCollaborateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push("/contact")
    // Scroll to top after a brief delay to ensure navigation happens
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="relative">
      {/* Main CTA */}
      <Link href="/contact" onClick={handleCollaborateClick}>
        <motion.div
          data-cursor-hover
          className="relative block overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Curtain */}
          <motion.div
            className="absolute inset-0 bg-[#B9FC00]"
            initial={{ y: "100%" }}
            animate={{ y: isHovered ? "0%" : "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Content */}
          <div className="relative py-16 md:py-24 px-8 md:px-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.h2
                className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-center md:text-left"
                animate={{
                  color: isHovered ? "#050505" : "#fafafa",
                }}
                transition={{ duration: 0.3 }}
              >
                Let's <span className="italic">Collaborate</span>
              </motion.h2>

              <motion.div
                animate={{
                  rotate: isHovered ? 45 : 0,
                  color: isHovered ? "#050505" : "#fafafa",
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>

      {/* Footer Info */}
      <div className="px-8 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            Crafting digital experiences that matter.
          </div>

          <div className="flex gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-[#B9FC00] transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="mailto:khanfaizjc0007@gmail.com"
              data-cursor-hover
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-[#B9FC00] transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-[#B9FC00] transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs tracking-widest text-muted-foreground">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
