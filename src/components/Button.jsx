/**
 * Shared button. Renders an <a> when `href` is provided, otherwise a <button>.
 * Variants: primary (red), outline (charcoal outline), light (for dark sections).
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurex-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary:
    'bg-aurex-red text-white shadow-sm hover:bg-aurex-red-dark hover:shadow-redglow hover:-translate-y-0.5',
  outline:
    'border border-line bg-white text-aurex-charcoal hover:border-aurex-red hover:text-aurex-red',
  light:
    'bg-white text-aurex-black hover:bg-aurex-red hover:text-white hover:-translate-y-0.5',
  ghost:
    'text-aurex-charcoal hover:text-aurex-red',
};

export default function Button({
  as,
  href,
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  const Tag = as || (href ? 'a' : 'button');

  return (
    <Tag href={href} className={classes} {...props}>
      {children}
    </Tag>
  );
}
