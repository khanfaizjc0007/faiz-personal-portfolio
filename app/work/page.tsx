import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { WorkHero } from "@/components/work-hero"
import { WorkGrid } from "@/components/work-grid"
import { Footer } from "@/components/footer"

export default function WorkPage() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <WorkHero />
        <WorkGrid />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
