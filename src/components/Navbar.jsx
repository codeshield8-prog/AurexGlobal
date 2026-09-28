import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import Button from './Button';
import { navLinks } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  // subtle shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300 ${
        scrolled ? 'border-line shadow-soft' : 'border-transparent'
      }`}
    >
      <nav
        className="container-x flex h-[72px] items-center justify-between"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center" aria-label="Aurex Global Technologies — home">
          <Logo className="h-9 sm:h-10" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 link-underline ${
                  active === link.href
                    ? 'text-aurex-red after:scale-x-100'
                    : 'text-aurex-charcoal hover:text-aurex-red'
                }`}
                aria-current={active === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" className="px-5 py-2.5">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-aurex-charcoal transition-colors hover:bg-surface-muted lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`overflow-hidden border-t border-line bg-white transition-[max-height,opacity] duration-300 ${
            open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    active === link.href
                      ? 'bg-aurex-red/5 text-aurex-red'
                      : 'text-aurex-charcoal hover:bg-surface-muted'
                  }`}
                  aria-current={active === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 px-1">
              <Button
                href="#contact"
                variant="primary"
                fullWidth
                onClick={handleNavClick}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
