// components/project-detail.tsx
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { PortableText } from "@portabletext/react"
import { cn } from "@/lib/utils"

// Match exactly what Sanity returns
export type SanityProject = {
  _id: string
  title: string
  slug: string
  description: string
  fullDescription?: any[]
  category: string
  showOnHome?: boolean
  tags?: string[]
  technologies?: string[]
  completionYear?: number
  role?: string
  client?: string
  projectType?: string
  status?: string
  liveUrl?: string
  githubUrl?: string
  clientProblem?: any[]
  solution?: any[]
  contribution?: any[]
  features?: string[]
  thumbnail?: { asset?: { url: string } }
  thumbnailVideo?: { videoUrl?: string; asset?: { url: string } }
  thumbnailPdf?: { pdfUrl?: string; asset?: { url: string } }
  images?: { asset?: { url: string }; alt?: string }[]
}

// Portable text components styling
const ptComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-4">{children}</p>
    ),
  },
}

const categoryLabels: Record<string, string> = {
  "ui-ux-design": "UI/UX Design",
  "vibe-coding-projects": "Vibe Coding Projects",
  "logo-design-projects": "Logo Design Projects",
  "graphic-design-projects": "Graphic Design Projects",
}

interface ProjectDetailProps {
  project: SanityProject
}

function mediaUrl(value: string | null | undefined): string | undefined {
  if (typeof value !== "string") return undefined
  const t = value.trim()
  return t.length > 0 ? t : undefined
}

/** Chrome/Edge PDF viewer: hide toolbar, side panes, scrollbars (best-effort; Safari/Firefox vary). */
function pdfEmbedSrc(url: string): string {
  const base = url.split("#")[0] ?? url
  // FitH = page width matches iframe (full bleed). Pair with a tall enough iframe so one page fits vertically.
  const hash =
    "toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH"
  return `${base}#${hash}`
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const allTags = [...(project.tags ?? []), ...(project.technologies ?? [])]
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    setVideoError(false)
  }, [project._id])

  const videoUrl = mediaUrl(
    project.thumbnailVideo?.videoUrl ?? project.thumbnailVideo?.asset?.url
  )
  const pdfUrl = mediaUrl(project.thumbnailPdf?.pdfUrl ?? project.thumbnailPdf?.asset?.url)
  const imageUrl = mediaUrl(project.thumbnail?.asset?.url)
  const showVideo = Boolean(videoUrl && !videoError)
  const showPdf = Boolean(!showVideo && pdfUrl)
  const showImage = Boolean(!showVideo && !showPdf && imageUrl)
  const hasHeroMedia = showVideo || showPdf || showImage

  return (
    <>
      {/* Hero Section — avoid min-h-screen + vertical center when media follows (huge black gap) */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-28 md:py-32"

      // className={cn(
      //   "relative px-4 sm:px-6 md:px-8 lg:px-12",
      //   hasHeroMedia
      //     ? "pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8 md:pb-10"
      //     : "min-h-screen flex items-center justify-center py-24 sm:py-28 md:py-32"
      // )}
      >
        <div className="max-w-6xl w-full">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Work
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-3 sm:mb-4 uppercase">
              {categoryLabels[project.category] ?? project.category}
            </p>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-6 sm:mb-8 text-balance">
              {project.title}
            </h1>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Project Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-6 sm:gap-8"
          >
            {project.completionYear && (
              <div>
                <p className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground mb-2">Year</p>
                <p className="font-sans text-lg sm:text-xl">{project.completionYear}</p>
              </div>
            )}
            {project.role && (
              <div>
                <p className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground mb-2">Role</p>
                <p className="font-sans text-lg sm:text-xl">{project.role}</p>
              </div>
            )}
            {project.client && (
              <div>
                <p className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground mb-2">Client</p>
                <p className="font-sans text-lg sm:text-xl">{project.client}</p>
              </div>
            )}
            {project.status && (
              <div>
                <p className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground mb-2">Status</p>
                <p className="font-sans text-lg sm:text-xl capitalize">{project.status.replace("-", " ")}</p>
              </div>
            )}
            {allTags.length > 0 && (
              <div className="w-full sm:w-auto">
                <p className="font-mono text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {allTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider px-2 py-1 border border-white/20 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Live / GitHub links */}
            <div className="w-full flex gap-4">
              {project.liveUrl && (

                <Link href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-accent border border-accent/40 px-4 py-2 hover:bg-accent/10 transition-colors"
                >
                  Live Site →
                </Link>
              )}
              {project.githubUrl && (

                <Link href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-muted-foreground border border-white/20 px-4 py-2 hover:border-accent/50 transition-colors"
                >
                  GitHub →
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero media: video → PDF → image (use animate, not whileInView — scroll/layout can leave opacity 0 forever) */}
      {hasHeroMedia && showPdf && pdfUrl ? (
        <section
          className="relative w-screen max-w-[80vw] left-1/2 -translate-x-1/2 overflow-hidden bg-black mb-20 sm:mb-24 md:mb-32"
          style={{
            // FitH scales PDF to full width; portrait pages need ~1.41× viewport width in height. Cap so layout stays sane.
            height: "min(max(100svh, 132vw), 220dvh)",
            minHeight: "100svh",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-full w-full overflow-hidden"
          >
            <iframe
              key={pdfUrl}
              title={`${project.title} — PDF`}
              src={pdfEmbedSrc(pdfUrl)}
              className="absolute inset-0 block h-full w-full border-0"
              style={{ backgroundColor: "#0e0e0f" }}
              scrolling="no"
              allow="fullscreen"
            />
          </motion.div>
        </section>
      ) : hasHeroMedia && (showVideo || showImage) ? (
        <section className="relative w-screen max-w-[100vw] left-1/2 -translate-x-1/2 mb-20 sm:mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full"
          >
            {/*
              Fixed viewport box + max-w/max-h on media = scale up to fill width OR height (whichever binds).
              Avoid max-h-only + w-auto on img — that keeps tall assets artificially narrow.
            */}
            {showVideo && videoUrl ? (
              <div className="relative w-full h-[min(88svh,960px)] min-h-[min(60svh,520px)] border-y border-white/10 sm:border-x sm:border-white/10 overflow-hidden bg-black flex items-center justify-center">
                <video
                  key={videoUrl}
                  src={videoUrl}
                  className="min-w-0 max-h-full max-w-full w-auto h-auto object-contain bg-black"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onError={() => setVideoError(true)}
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
              </div>
            ) : imageUrl ? (
              <div className="relative w-full h-[min(88svh,960px)] min-h-[min(60svh,520px)] border-y border-white/10 sm:border-x sm:border-white/10 overflow-hidden bg-black/40 flex items-center justify-center p-1 sm:p-2">
                <img
                  src={imageUrl}
                  alt={project.title}
                  className="min-w-0 max-h-full max-w-full w-auto h-auto object-contain"
                  style={{ filter: "grayscale(50%) contrast(1.1)" }}
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
              </div>
            ) : null}
          </motion.div>
        </section>
      ) : null}

      {/* Content Sections */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">

          {/* Full Description / Overview */}
          {project.fullDescription && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6 uppercase">
                01 — Overview
              </p>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent mb-6 sm:mb-8" />
              <PortableText value={project.fullDescription} components={ptComponents} />
            </motion.div>
          )}

          {/* Client Problem / Challenge */}
          {project.clientProblem && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6 uppercase">
                02 — Challenge
              </p>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent mb-6 sm:mb-8" />
              <PortableText value={project.clientProblem} components={ptComponents} />
            </motion.div>
          )}

          {/* Solution */}
          {project.solution && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6 uppercase">
                03 — Solution
              </p>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent mb-6 sm:mb-8" />
              <PortableText value={project.solution} components={ptComponents} />
            </motion.div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6 uppercase">
                04 — Key Features
              </p>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent mb-6 sm:mb-8" />
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-accent mt-1">→</span>
                    <span className="font-mono text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* My Contribution */}
          {project.contribution && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6 uppercase">
                05 — My Contribution
              </p>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent mb-6 sm:mb-8" />
              <PortableText value={project.contribution} components={ptComponents} />
            </motion.div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16 mb-20 sm:mb-24 md:mb-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-accent mb-4 sm:mb-6 uppercase">
                06 — Gallery
              </p>
              <div className="h-px bg-gradient-to-r from-white/20 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 md:gap-8">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative aspect-video border border-white/10 overflow-hidden group"
                >
                  {image.asset?.url && (
                    <motion.img
                      src={image.asset.url}
                      alt={image.alt ?? `${project.title} image ${index + 1}`}
                      className="w-full h-full object-cover"
                      // style={{ filter: "grayscale(50%) contrast(1.1)" }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}