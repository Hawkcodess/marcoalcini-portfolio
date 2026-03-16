'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const skills = [
  'Next.js', 'React', 'Node.js', 'TypeScript',
  'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'SQLite',
  'Stripe', 'Vercel', 'Azure',
]

export default function About() {
  return (
    <section id="about" className="bg-[#E6E0D6] py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left col — 60% */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <span className="font-body text-xs uppercase tracking-[0.15em] text-[#6B7280]">
                About
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-6xl font-light leading-tight mt-6 mb-8">
                Building digital experiences that make businesses stand out.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-base text-[#6B7280] leading-relaxed mb-6">
                I'm Marco Alcini, a creative developer and web builder based in London. I work with
                businesses of all sizes to design and build modern, high-performance websites and web
                applications that don't just look great — they deliver real results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="font-body text-base text-[#6B7280] leading-relaxed mb-6">
                From small local businesses looking for their first professional online presence to
                growing companies that need a robust digital platform, I bring a full-stack approach
                to every project — handling design, development and deployment end to end.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-base text-[#6B7280] leading-relaxed">
                Outside of client work, I'm building Webnest — a CMS platform designed specifically
                for web agencies to manage everything in one place.
              </p>
            </ScrollReveal>
          </div>

          {/* Right col — 40% */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* Approach */}
            <ScrollReveal delay={0.1} direction="right">
              <div>
                <h3 className="font-heading text-2xl font-light text-[#111111] mb-6">
                  The approach
                </h3>
                <div className="flex flex-col gap-5">
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed">
                    Every project starts with understanding the business — who you're trying to reach,
                    what you want them to do, and what makes you different. Design follows strategy.
                  </p>
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed">
                    I build with modern tools that prioritise speed, accessibility and maintainability.
                    No bloated page builders — everything is hand-crafted and built to last.
                  </p>
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed">
                    After launch, I don't disappear. I offer ongoing support and maintenance so your
                    site stays fast, secure and up to date.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Currently building */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="border border-[#E5E5E5] bg-white rounded-2xl p-6">
                <span className="font-body text-xs uppercase tracking-widest text-[#6B7280] mb-3 block">
                  Currently Building
                </span>
                <h4 className="font-heading text-xl font-light text-[#111111] mb-2">Webnest</h4>
                <p className="font-body text-sm text-[#6B7280] leading-relaxed">
                  Webnest is my custom CMS platform — built to manage client websites, content,
                  billing and onboarding all in one place.
                </p>
              </div>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal delay={0.25} direction="right">
              <div>
                <span className="font-body text-xs uppercase tracking-widest text-[#6B7280] mb-4 block">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-xs text-[#6B7280] border border-[#E5E5E5] bg-white px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
