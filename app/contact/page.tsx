import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import { contactInfo, siteSettings } from '@/content/site';
import { createMetadata } from '@/lib/utils';

export const metadata: Metadata = createMetadata('Contact | Alex Mercer', 'Start your website or content project.', '/contact');

export default function ContactPage() {
  return (
    <section className="container section">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build a digital presence your audience trusts"
        description="Share your goals, timeline, and current challenges. I’ll reply with next steps and a clear scope."
      />
      <div className="contact-layout">
        <ContactForm />
        <aside className="card">
          <h3>Direct Contact</h3>
          <ul>
            <li><strong>Email:</strong> {contactInfo.email}</li>
            <li><strong>Telegram:</strong> {contactInfo.telegram}</li>
            <li><strong>WhatsApp:</strong> {contactInfo.whatsapp}</li>
            <li><strong>LinkedIn:</strong> {contactInfo.linkedin}</li>
          </ul>
          <p className="muted">Expected response time: {siteSettings.responseTime}</p>
        </aside>
      </div>
    </section>
  );
}
