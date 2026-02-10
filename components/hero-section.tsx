import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"          // adjust path if needed
import { TextEffect } from "./ui/text-effect" // adjust path if needed
import { AnimatedGroup } from "./ui/animated-group" // adjust path if needed

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { type: "spring", bounce: 0.3, duration: 1.5 } },
  },
}

export default function HeroSection() {
  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById("explore")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative scroll-smooth">
      {/* Background glow */}
      <div aria-hidden className="absolute inset-0 isolate hidden opacity-65 lg:block">
        {/* ... your radial gradient divs ... */}
      </div>

      <section className="relative pt-24 md:pt-36 text-center">
        {/* Background Image */}
        <AnimatedGroup
          variants={{
            container: { visible: { transition: { delayChildren: 1 } } },
            item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 2 } } },
          }}
          className="absolute inset-0 top-56 -z-20 mask-b-from-35% mask-b-to-90% lg:top-32"
        >
          <Image
            src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
            alt="background"
            width={3276}
            height={4095}
            priority
            className="hidden dark:block w-full h-full object-cover"
          />
        </AnimatedGroup>

        <div className="mx-auto max-w-7xl px-6">
          {/* START EXPLORING */}
          <AnimatedGroup variants={transitionVariants}>
            <div className="relative z-10 mt-8">
              <a
                href="#explore"
                onClick={scrollToExplore}
                className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md transition-colors duration-300 hover:bg-background dark:border-t-white/5"
              >
                <span className="text-sm text-foreground">START EXPLORING</span>
                <span className="block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />
                <div className="h-6 w-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex h-6 w-6"><ArrowRight className="m-auto h-3 w-3" /></span>
                    <span className="flex h-6 w-6"><ArrowRight className="m-auto h-3 w-3" /></span>
                  </div>
                </div>
              </a>
            </div>
          </AnimatedGroup>

          {/* Hero title */}
          <TextEffect as="h1" preset="fade-in-blur" speedSegment={0.3} className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-extrabold tracking-tight md:text-7xl lg:mt-16 xl:text-[5.25rem]">
            OSCAR ONDIS
          </TextEffect>

          {/* Subtitle */}
          <TextEffect as="p" per="line" preset="fade-in-blur" speedSegment={0.3} delay={0.5} className="mx-auto mt-8 max-w-2xl text-balance text-lg">
            A collection of academic and personal projects developed throughout my IT studies, focusing on functionality, efficiency, and real-world solutions.
          </TextEffect>

          {/* NEXT button */}
          <AnimatedGroup variants={{ container: { visible: { staggerChildren: 0.05, delayChildren: 0.75 } }, ...transitionVariants }} className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
            <div className="rounded-[calc(var(--radius-xl)+0.125rem)] border bg-foreground/10 p-0.5">
              <Button asChild size="lg" className="rounded-xl px-5">
                <a href="#explore" onClick={scrollToExplore}>NEXT</a>
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  )
}

