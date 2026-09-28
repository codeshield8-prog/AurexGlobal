import { FiPhone, FiMail } from 'react-icons/fi';
import Logo from './Logo';
import { company, navLinks } from '../data';

export default function Footer() {
  return (
    <footer className="bg-aurex-black text-white/70">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand + description */}
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex" aria-label="Aurex Global Technologies — home">
              <Logo variant="onDark" className="h-12" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Aurex Global Technologies provides telecommunications and
              technology solutions that help businesses communicate, connect and
              grow.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-aurex-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="group inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-aurex-red"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-aurex-red transition-colors group-hover:bg-aurex-red group-hover:text-white">
                    <FiPhone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="group inline-flex items-center gap-3 break-all text-sm text-white/60 transition-colors hover:text-aurex-red"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-aurex-red transition-colors group-hover:bg-aurex-red group-hover:text-white">
                    <FiMail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © 2026 {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            {company.industry}
          </p>
        </div>
      </div>
    </footer>
  );
}
