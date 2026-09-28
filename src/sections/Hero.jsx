import { FiArrowRight } from 'react-icons/fi';
import Button from '../components/Button';
import NetworkGraphic from '../components/NetworkGraphic';
import { company } from '../data';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* subtle background grid + red wash, kept restrained */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="container-x relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="eyebrow animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-aurex-red" aria-hidden="true" />
            {company.industry}
          </span>

          <h1
            className="mt-5 text-4xl font-bold leading-[1.1] text-aurex-black animate-fade-up sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: '80ms' }}
          >
            Connecting Businesses.{' '}
            <span className="text-aurex-red">Powering Communication.</span>
          </h1>

          <p
            className="mt-6 text-base leading-relaxed text-muted animate-fade-up sm:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            Aurex Global Technologies delivers reliable telecommunication and
            technology solutions designed to help businesses communicate,
            connect and grow.
          </p>

          <div
            className="mt-8 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-center"
            style={{ animationDelay: '240ms' }}
          >
            <Button href="#services" variant="primary" className="w-full sm:w-auto">
              Explore Services
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="outline" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </div>

          {/* quick trust chips */}
          <div
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            {['Reliable Solutions', 'Business Focused', 'Scalable Technology'].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-sm font-medium text-aurex-charcoal"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-aurex-red" aria-hidden="true" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-3xl border border-line bg-surface-muted/60 p-6 shadow-soft sm:p-8">
            <NetworkGraphic className="h-auto w-full" />
          </div>

          {/* floating stat-style chip — factual, no invented numbers */}
          <div className="absolute -bottom-4 left-4 hidden items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-card sm:flex">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-aurex-red/10 text-aurex-red">
              <FiArrowRight className="h-4 w-4 -rotate-45" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-aurex-black">Always Connected</p>
              <p className="text-[11px] text-muted">Modern communication technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
