import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

interface MedicallyReviewedProps {
    date: string;
    doctorName?: string;
    doctorHref?: string;
}

export default function MedicallyReviewed({
    date,
    doctorName = 'Dr. Ankita Mandal',
    doctorHref = '/doctors/dr-ankita-mandal',
}: MedicallyReviewedProps) {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-sage shrink-0" />
                <p className="text-xs text-gray-600">
                    <span className="font-semibold text-navy">Medically reviewed</span> by{' '}
                    <Link href={doctorHref} className="text-rose-deep font-medium hover:underline">
                        {doctorName}
                    </Link>
                    {' · '}
                    Last updated: {new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    {' · '}
                    Sources referenced: WHO, ICMR, PubMed
                </p>
            </div>
        </div>
    );
}
