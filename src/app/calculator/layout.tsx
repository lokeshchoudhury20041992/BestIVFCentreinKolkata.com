import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/schema-helpers';

export const metadata: Metadata = generatePageMetadata({
    title: 'Fertility Score Calculator',
    description: 'Free fertility assessment tool by Dr. Ankita Mandal. Answer 6 questions to get a personalised fertility score and recommendation.',
    path: '/calculator',
    keywords: ['fertility calculator', 'fertility score test', 'am I fertile test', 'fertility assessment Kolkata'],
});

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
