import { stats } from '@/content/site';

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Performance highlights">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="stat-value">{item.value}</p>
            <p className="muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
