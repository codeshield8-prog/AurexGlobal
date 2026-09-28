import { FiArrowRight } from 'react-icons/fi';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

export default function CTA() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-aurex-red px-6 py-14 text-center shadow-redglow sm:px-12 sm:py-16">
          {/* subtle darker wash for depth, no busy gradients */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 20% 0%, rgba(255,255,255,0.14), transparent 40%), radial-gradient(circle at 100% 100%, rgba(0,0,0,0.18), transparent 50%)',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let&apos;s Build Better Communication
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Have a business communication requirement? Let&apos;s discuss how
              Aurex Global Technologies can help.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="#contact" variant="light" className="px-7">
                Talk to Us
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
