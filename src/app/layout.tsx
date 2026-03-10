import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './tailwind.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getMedicalClinicSchema, getPhysicianSchema } from '@/lib/schema-helpers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Best IVF Centre in Kolkata | Dr. Ankita Mandal - Maatritva IVF',
  description:
    'Maatritva Fertility IVF & Healthcare by Dr. Ankita Mandal — Kolkata\'s most trusted IVF, IUI, ICSI, and fertility treatment centre. Advanced assisted reproductive technology, laparoscopic surgery, and high-risk pregnancy care with transparent pricing and consistently high clinical success rates.',
  keywords: [
    'best IVF specialist',
    'best fertility doctor in Kolkata',
    'best IVF specialist in Kolkata',
    'best gynecologist in Kolkata',
    'IVF centre Kolkata',
    'best IVF doctor Kolkata',
    'fertility clinic Kolkata',
    'Dr Ankita Mandal',
    'IVF treatment Kolkata',
    'IUI treatment Kolkata',
    'ICSI treatment Kolkata',
    'infertility specialist Kolkata',
    'fertility specialist Kolkata',
    'IVF cost Kolkata',
    'best gynaecologist Kolkata',
    'test tube baby Kolkata',
    'IVF hospital Kolkata',
    'infertility treatment Kolkata',
    'PCOS treatment Kolkata',
    'low AMH treatment Kolkata',
    'blocked fallopian tubes treatment',
    'laparoscopic surgery Kolkata',
    'best fertility clinic in West Bengal',
    'assisted reproductive technology Kolkata',
    'top 5 gynecologists Kolkata',
  ],
  metadataBase: new URL('https://bestivfcentreinkolkata.com'),
  alternates: {
    canonical: 'https://bestivfcentreinkolkata.com',
  },
  openGraph: {
    title: 'Best IVF Centre in Kolkata | Dr. Ankita Mandal',
    description: 'Kolkata\'s most trusted IVF, IUI, ICSI, and fertility treatment centre. 15,000+ happy families. Advanced ART, laparoscopic surgery, and high-risk pregnancy care.',
    url: 'https://bestivfcentreinkolkata.com',
    siteName: 'Maatritva Fertility IVF & Healthcare',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <SchemaMarkup schema={getMedicalClinicSchema()} />
        <SchemaMarkup schema={getPhysicianSchema()} />
        <Navbar />
        <main className="pt-16 lg:pt-20 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <LeadForm />
      </body>
    </html>
  );
}
