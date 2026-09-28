import Reveal from './Reveal';

/**
 * Consistent section heading block: optional eyebrow, title and subtitle.
 * `align` controls text alignment; `onDark` flips colors for dark sections.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  onDark = false,
  className = '',
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <Reveal
      className={`${alignment} max-w-2xl ${
        align === 'center' ? '' : 'max-w-xl'
      } ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-aurex-red" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${
          onDark ? 'text-white' : 'text-aurex-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            onDark ? 'text-white/70' : 'text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
