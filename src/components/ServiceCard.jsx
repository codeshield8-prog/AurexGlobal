/**
 * Service card — white card, thin border, red icon, red accent line on hover.
 */
export default function ServiceCard({ number, icon: Icon, title, description }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aurex-red/30 hover:shadow-card sm:p-7">
      {/* Red accent line revealed on hover */}
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-aurex-red transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-aurex-red/10 text-aurex-red transition-colors duration-300 group-hover:bg-aurex-red group-hover:text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="font-display text-2xl font-bold text-line transition-colors duration-300 group-hover:text-aurex-red/30">
          {number}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-aurex-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
