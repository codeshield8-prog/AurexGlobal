import { FiPhone, FiMail, FiBriefcase } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { company } from '../data';

const details = [
  {
    icon: FiBriefcase,
    label: 'Company',
    value: company.name,
    href: null,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: company.phone,
    href: `tel:${company.phone}`,
  },
  {
    icon: FiMail,
    label: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-surface-muted">
      <div className="container-x">
        <SectionTitle
          eyebrow="Contact Us"
          title="Get in Touch"
          subtitle="Let's discuss your communication and technology requirements."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact details */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
              <div>
                <h3 className="text-lg font-semibold text-aurex-black">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Reach out and our team will get back to you to discuss the
                  right solution for your business.
                </p>

                <ul className="mt-6 space-y-4">
                  {details.map((item) => {
                    const content = (
                      <>
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aurex-red/10 text-aurex-red">
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-medium uppercase tracking-wide text-muted">
                            {item.label}
                          </span>
                          <span className="block break-words text-sm font-semibold text-aurex-black">
                            {item.value}
                          </span>
                        </span>
                      </>
                    );

                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="flex items-center gap-4 rounded-xl transition-colors hover:text-aurex-red"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-center gap-4">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <p className="mt-8 rounded-xl bg-surface-muted px-4 py-3 text-xs leading-relaxed text-muted">
                {company.industry}
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
