import { FiCheck } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import NetworkGraphic from '../components/NetworkGraphic';

const highlights = ['Reliable Solutions', 'Business Focused', 'Scalable Technology'];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-aurex-red" aria-hidden="true" />
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-aurex-black sm:text-4xl">
            About Aurex Global Technologies
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Aurex Global Technologies is a telecommunications and technology
            solutions company focused on helping businesses build better
            communication and digital connectivity. We provide practical,
            scalable and reliable solutions designed around modern business
            communication needs.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-line bg-surface-muted/60 px-4 py-3"
              >
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aurex-red text-white">
                  <FiCheck className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-aurex-charcoal">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Visual */}
        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-aurex-charcoal p-8 shadow-card sm:p-10">
            {/* faint red radial to anchor the charcoal panel */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 70% 30%, rgba(229,9,20,0.22), transparent 60%)',
              }}
              aria-hidden="true"
            />
            <div className="relative rounded-2xl bg-white/95 p-4">
              <NetworkGraphic className="h-auto w-full" />
            </div>
            <div className="relative mt-6 grid grid-cols-3 gap-3 text-center">
              {['Connect', 'Communicate', 'Grow'].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/5 px-2 py-3 text-xs font-semibold uppercase tracking-wide text-white/80"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
