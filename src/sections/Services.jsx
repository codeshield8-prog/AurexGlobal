import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Reveal from '../components/Reveal';
import { services } from '../data';

export default function Services() {
  return (
    <section id="services" className="section bg-surface-muted">
      <div className="container-x">
        <SectionTitle
          eyebrow="Our Services"
          title="Our Services"
          subtitle="Technology and communication solutions designed for modern businesses."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={(i % 3) * 90}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
