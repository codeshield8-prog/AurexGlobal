import { FiLink, FiSend, FiTrendingUp } from 'react-icons/fi';
import Reveal from '../components/Reveal';

const blocks = [
  {
    icon: FiLink,
    title: 'Connect',
    description:
      'Build better communication channels between businesses and customers.',
  },
  {
    icon: FiSend,
    title: 'Communicate',
    description:
      'Deliver messages, voice communication and notifications efficiently.',
  },
  {
    icon: FiTrendingUp,
    title: 'Grow',
    description:
      'Use scalable technology to support evolving business communication needs.',
  },
];

export default function TelecomSolutions() {
  return (
    <section className="relative overflow-hidden bg-aurex-charcoal py-16 sm:py-20 lg:py-24">
      {/* restrained red accents */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(229,9,20,0.18), transparent 45%), radial-gradient(circle at 85% 85%, rgba(229,9,20,0.12), transparent 45%)',
        }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-aurex-red" aria-hidden="true" />
            Telecom Solutions
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Built for Modern Communication
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            From business messaging to cloud-based communication, Aurex Global
            Technologies helps businesses stay connected with their customers
            and teams through modern communication technologies.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-aurex-red/50 hover:bg-white/[0.07]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aurex-red text-white shadow-redglow">
                  <block.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {block.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
