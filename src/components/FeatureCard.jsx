/**
 * Feature card used in "Why Choose Us". Clean, whitespace-forward, red icon.
 */
export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aurex-red/30 hover:shadow-card sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aurex-red/10 text-aurex-red transition-colors duration-300 group-hover:bg-aurex-red group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-aurex-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
