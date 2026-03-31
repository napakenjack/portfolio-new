import Link from 'next/link';

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
};

export default function CTAButton({ href, label, variant = 'primary' }: CTAButtonProps) {
  return (
    <Link className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`} href={href}>
      {label}
    </Link>
  );
}
