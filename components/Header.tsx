'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, siteSettings } from '@/content/site';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container row-between">
        <Link href="/" className="brand">
          {siteSettings.siteName}
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link className={`nav-link ${isActive ? 'active' : ''}`} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link href="/contact" className="btn btn-primary nav-cta">
          Start a Project
        </Link>
      </div>
    </header>
  );
}
