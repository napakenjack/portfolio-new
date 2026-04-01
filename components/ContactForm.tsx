'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/thank-you');
  };

  return (
    <form className="contact-form card" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="projectType">Project Type</label>
      <select id="projectType" name="projectType" required>
        <option value="">Select one</option>
        <option>Business Website</option>
        <option>WordPress Website</option>
        <option>React/Vue Frontend</option>
        <option>Backend/API</option>
        <option>SEO + Content</option>
      </select>

      <label htmlFor="message">Project Goals</label>
      <textarea id="message" name="message" rows={5} required />

      <button className="btn btn-primary" type="submit">Send Inquiry</button>
    </form>
  );
}
