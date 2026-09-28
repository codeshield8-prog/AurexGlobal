import logo from '../assets/aurex-logo.webp';
import { company } from '../data';

/**
 * Aurex Global brand logo. Uses the existing brand asset unmodified.
 * `variant="onDark"` places it on a subtle white chip so the light logo
 * stays legible against the charcoal navbar/footer backgrounds.
 */
export default function Logo({ className = '', imgClassName = '', variant = 'plain' }) {
  const img = (
    <img
      src={logo}
      alt={`${company.name} logo`}
      className={`h-full w-auto object-contain ${imgClassName}`}
      loading="eager"
      decoding="async"
    />
  );

  if (variant === 'onDark') {
    return (
      <span
        className={`inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-sm ${className}`}
      >
        {img}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{img}</span>;
}
