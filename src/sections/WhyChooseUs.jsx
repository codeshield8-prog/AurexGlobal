import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import Reveal from '../components/Reveal';
import { whyChooseUs } from '../data';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Why Businesses Choose Aurex"
          subtitle="Practical, reliable technology built around the way modern businesses actually communicate."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 4) * 80}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
