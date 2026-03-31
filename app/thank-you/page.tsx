import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <section className="container section centered">
      <article className="card max-compact">
        <h1>Thank You</h1>
        <p className="muted">Your inquiry has been received. I will get back to you with next steps shortly.</p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </article>
    </section>
  );
}
