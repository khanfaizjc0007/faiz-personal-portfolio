"use client"

import { motion } from "framer-motion"

const skills = [
  { category: "Design", items: ["UI/UX Design", "Design Systems", "Branding", "Prototyping"] },
  { category: "Development", items: ["Vibe Coding", "Wordpress", "Shopify", "HTML/CSS"] },
  { category: "AI", items: ["OpenAI", "V0", "Lovart", "Gemini"] },
  { category: "Tools", items: ["Figma", "Adobe", "Git", "Dora"] },
]

const experience = [
  { year: "2024", role: "Lead Product Designer", company: "Techchaze Limited" },
  { year: "2023", role: "UI/UX Designer", company: "Oracle" },
  { year: "2022", role: "UI/UX Designer", company: "Rovea.Inc" },
]

export function AboutContent() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mb-20 sm:mb-24 md:mb-32"
      >
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6">
          01 — BIO
        </p>
        <p className="font-sans text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-balance">
          I'm Mohammed Faiz Khan, a designer with 4+ years in the industry. I specialize in UI/UX, logo design, and
          graphic design, creating user-focused experiences, strong brand identities, and visuals that actually hit. I
          mix strategy with clean aesthetics to turn ideas into modern, memorable designs.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 sm:mb-24 md:mb-32"
      >
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-8 sm:mb-10 md:mb-12">
          02 — EXPERTISE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/10 p-5 sm:p-6 hover:border-accent/50 transition-colors duration-300"
            >
              <h3 className="font-mono text-xs tracking-wider text-accent mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="font-sans text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-8 sm:mb-10 md:mb-12">
          03 — EXPERIENCE
        </p>
        <div className="space-y-6 sm:space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 border-l border-white/10 pl-6 sm:pl-8 py-4 hover:border-accent transition-colors duration-300"
            >
              <span className="font-mono text-xs text-accent min-w-[60px]">{exp.year}</span>
              <div>
                <h3 className="font-sans text-lg sm:text-xl font-light mb-1">{exp.role}</h3>
                <p className="font-mono text-xs text-muted-foreground tracking-wider">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
