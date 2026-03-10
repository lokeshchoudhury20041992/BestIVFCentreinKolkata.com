import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
    getBreadcrumbSchema,
    getIndividualPhysicianSchema,
    SITE_URL,
} from '@/lib/schema-helpers';
import { coreDoctors } from '@/lib/doctors-data';

export const metadata: Metadata = {
    title: 'Best IVF IUI and Fertility Specialists of Kolkata | Dr. Ankita Mandal - Best IVF Centre',
    description:
        'Meet the expert team at Maatritva Fertility IVF & Healthcare — Dr. Ankita Mandal and Kolkata\'s top fertility specialists, embryologists, counsellors, and empanelled sonologists. 15+ years of IVF, IUI, ICSI, and infertility treatment experience.',
    keywords: [
        'IVF doctor Kolkata',
        'fertility specialist Kolkata',
        'best gynaecologist Kolkata',
        'IVF specialist near me',
        'infertility doctor Kolkata',
        'IUI specialist Kolkata',
        'ICSI specialist Kolkata',
        'Dr Ankita Mandal IVF',
        'sonologist Kolkata',
        'embryologist Kolkata',
    ],
    alternates: {
        canonical: `${SITE_URL}/doctors`,
    },
};

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Our Doctors', url: `${SITE_URL}/doctors` },
    ]);

    // Generate individual Physician schemas for each core doctor
    const doctorSchemas = coreDoctors.map((doctor) =>
        getIndividualPhysicianSchema({
            name: doctor.name,
            description: doctor.about,
            degrees: doctor.degrees,
            designation: doctor.designation,
            specialisations: doctor.specialisations,
            url: `${SITE_URL}/doctors`,
        }),
    );

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />
            {doctorSchemas.map((schema, i) => (
                <SchemaMarkup key={i} schema={schema} />
            ))}
            {children}
        </>
    );
}
