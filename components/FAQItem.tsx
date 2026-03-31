import { FAQItemType } from '@/types/content';

type Props = { item: FAQItemType };

export default function FAQItem({ item }: Props) {
  return (
    <details className="faq-item">
      <summary>{item.question}</summary>
      <p className="muted">{item.answer}</p>
    </details>
  );
}
