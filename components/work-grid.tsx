"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { PROJECT_BY_SLUG_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries"

const categories = [
  { title: "UI/UX Design", number: "01", slug: "ui-ux-design" },
  { title: "Vibe Coding Projects", number: "02", slug: "vibe-coding-projects" },
  { title: "Logo Design Projects", number: "03", slug: "logo-design-projects" },
  { title: "Graphic Design Projects", number: "04", slug: "graphic-design-projects" },
]

type SanityProject = {
  _id: string
  title: string
  slug: string
  description: string
  category: string
  thumbnail?: { asset?: { url: string } }
  tags?: string[]
  completionYear?: number
}

export function WorkGrid() {
  const [projects, setProjects] = useState<SanityProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      const data = await client.fetch(PROJECTS_QUERY)  // ✅ this is fine
      setProjects(data)
      setLoading(false)
    }
    fetchProjects()
  }, [])

  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
      {categories.map((category) => {
        const categoryProjects = projects.filter((p) => p.category === category.slug)

        return (
          <div key={category.title} className="mb-20 sm:mb-24 md:mb-32 last:mb-0">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-2">
                {category.number} — {category.title.toUpperCase()}
              </p>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-full" />
            </motion.div>

            {loading ? (
              <div className="font-mono text-xs text-muted-foreground">Loading...</div>
            ) : categoryProjects.length === 0 ? (
              <div className="font-mono text-xs text-muted-foreground">No projects yet.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
                {categoryProjects.map((project, index) => (
                  <motion.article
                    key={project._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative border border-white/10 overflow-hidden hover:border-accent/50 transition-colors duration-300"
                  >
                    <Link href={`/work/${project.slug}`} className="block">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-black">
                        {project.thumbnail?.asset?.url && (
                          <motion.img
                            src={project.thumbnail.asset.url}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            style={{ filter: "grayscale(50%) contrast(1.1)" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                          />
                        )}
                        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-baseline justify-between mb-3 sm:mb-4">
                          <span className="font-mono text-[10px] sm:text-xs text-accent tracking-wider">
                            {project.completionYear ?? 2025}
                          </span>
                        </div>

                        <h3 className="font-sans text-xl sm:text-2xl font-light tracking-tight mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                          {project.tags?.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] tracking-wider px-2 py-1 border border-white/20 text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Arrow indicator */}
                        <motion.div
                          className="flex items-center gap-2 text-muted-foreground group-hover:text-accent"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="font-mono text-xs tracking-wider uppercase">View</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        )
      })}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-12 sm:mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}