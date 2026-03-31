import { processSteps } from '@/content/site';

export default function ProcessSteps() {
  return (
    <div className="process-grid">
      {processSteps.map((step, index) => (
        <article className="card" key={step.title}>
          <p className="eyebrow">Step {index + 1}</p>
          <h3>{step.title}</h3>
          <p className="muted">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
