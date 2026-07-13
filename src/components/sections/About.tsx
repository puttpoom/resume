import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading
          overline="About Me"
          title="Crafting digital experiences"
          align="left"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-zinc-300 leading-relaxed">
                I&apos;m a Full Stack Developer based in Thailand, passionate about building
                high-quality web applications that solve real-world problems. I specialise in
                modern JavaScript ecosystems, PHP backends, and containerised deployments.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Currently at ICHO Co., Ltd., I architect and maintain real-time plant logistics
                systems handling truck operations, weighing, and fleet monitoring at cement
                production facilities across Thailand.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-zinc-400 leading-relaxed">
                When I&apos;m not writing code, I&apos;m exploring design systems, contributing to open
                source, and obsessing over smooth scroll interactions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-6 pt-4">
                {[
                  { label: 'Years Experience', value: '4+' },
                  { label: 'Projects Shipped', value: '20+' },
                  { label: 'Technologies', value: '15+' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-3xl font-bold text-white">{value}</p>
                    <p className="text-sm text-zinc-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Photo placeholder */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10" />
              <div className="absolute inset-4 rounded-2xl bg-zinc-800/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white">
                    P
                  </div>
                  <p className="text-white font-semibold">Putthiphoom B.</p>
                  <p className="text-zinc-500 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
