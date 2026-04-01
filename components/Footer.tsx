import Link from 'next/link';
import { footerLinks, siteSettings, socialLinks } from '@/content/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{siteSettings.siteName}</h3>
          <p className="muted">{siteSettings.tagline}</p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.section}>
            <h4>{group.section}</h4>
            <ul>
              {group.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4>Connect</h4>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {siteSettings.siteName}. All rights reserved.</p>
    </footer>
  );
}
