/* ═══════════════════════════════════════════════════════════════════════════
 * schema-helpers.ts — Centralised JSON-LD & Metadata generators
 *
 * Every schema follows Google's Structured Data guidelines:
 * https://developers.google.com/search/docs/appearance/structured-data
 *
 * Schemas implemented:
 *   MedicalClinic (with availableService, hasCredential)
 *   Physician
 *   MedicalProcedure (enhanced with bodyLocation, status, category)
 *   MedicalCondition (NEW — for condition hub pages)
 *   FAQPage
 *   BreadcrumbList (NEW — sitewide breadcrumbs)
 *   MedicalOrganization (NEW — parent entity for the clinic)
 * ═══════════════════════════════════════════════════════════════════════════ */

// ─── Constants ───────────────────────────────────────────────────────────────

export const SITE_URL = 'https://bestivfcentreinkolkata.com';
export const SITE_NAME = 'Best IVF Centre in Kolkata';
export const CLINIC_NAME = 'Maatritva Fertility IVF & Healthcare';
export const DOCTOR_NAME = 'Dr. Ankita Mandal';

// ─── MedicalClinic (global — layout.tsx) ─────────────────────────────────────

export function getMedicalClinicSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_URL}/#clinic`,
    name: CLINIC_NAME,
    alternateName: 'Maatritva IVF',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/clinic.jpg`,
    description:
      'Maatritva Fertility IVF & Healthcare is Kolkata\'s most trusted IVF, IUI, and fertility treatment centre. Led by Dr. Ankita Mandal, the clinic provides advanced assisted reproductive technology (ART), laparoscopic surgery, and high-risk pregnancy care with consistently high clinical success rates.',
    medicalSpecialty: [
      'Obstetrics',
      'Gynecology',
      'ReproductiveEndocrinology',
    ],
    // ── availableService: tells Google every procedure offered ──
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'In Vitro Fertilisation (IVF)',
        procedureType: 'Percutaneous',
        url: `${SITE_URL}/services/ivf-treatment`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Intrauterine Insemination (IUI)',
        procedureType: 'Noninvasive',
        url: `${SITE_URL}/services/iui-treatment`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Intracytoplasmic Sperm Injection (ICSI)',
        procedureType: 'Percutaneous',
        url: `${SITE_URL}/services/icsi-treatment`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Laparoscopic Surgery for Infertility',
        procedureType: 'Surgical',
        url: `${SITE_URL}/services/laparoscopic-surgery`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'High-Risk Pregnancy Management',
        procedureType: 'Noninvasive',
        url: `${SITE_URL}/services/high-risk-pregnancy`,
      },
    ],
    // ── hasCredential: accreditation / registration signals ──
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Registration',
        name: 'NMC Registered Medical Establishment',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Accreditation',
        name: 'ICMR Registered ART Clinic',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'New Town, Rajarhat',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700156',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.5958',
      longitude: '88.4797',
    },
    areaServed: [
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'State', name: 'West Bengal' },
    ],
    telephone: '+91-XXXXXXXXXX',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    priceRange: '₹₹',
    sameAs: [
      // Add social handles when available
    ],
  };
}

// ─── Physician (global — layout.tsx) ─────────────────────────────────────────

export function getPhysicianSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/#doctor`,
    name: DOCTOR_NAME,
    image: `${SITE_URL}/images/dr-ankita.jpg`,
    description:
      'Dr. Ankita Mandal is the best gynecologist in Kolkata, recognised among the top 5 gynecologists in Kolkata by 15,000+ satisfied patients. She is a Consultant Gynaecologist, Obstetrician, Infertility Specialist, and Gynaecological Laparoscopic Surgeon. A graduate of SCB Medical College Cuttack and RIMS Ranchi, she holds a Fellowship in Infertility and an Advanced Diploma in Reproductive Medicine & ART from KIEL, Germany. Best IVF specialist and best fertility doctor in Kolkata.',
    medicalSpecialty: [
      'Obstetrics',
      'Gynecology',
      'ReproductiveEndocrinology',
    ],
    knowsAbout: [
      'In Vitro Fertilisation',
      'IVF Treatment',
      'Best IVF Specialist',
      'Intrauterine Insemination',
      'IUI Treatment',
      'ICSI Treatment',
      'Infertility Treatment',
      'Reproductive Medicine',
      'Assisted Reproductive Technology',
      'Laparoscopic Surgery',
      'Colposcopy',
      'Hysteroscopy',
      'Gynaecological Ultrasound',
      'High-Risk Pregnancy',
      'PCOS Treatment',
      'Low AMH Treatment',
      'Blocked Fallopian Tubes',
      'Recurrent Implantation Failure',
      'Male Infertility',
      'Egg Freezing',
      'Embryo Transfer',
      'Ovulation Induction',
      'Best Fertility Doctor in Kolkata',
      'Best Gynecologist Kolkata',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'SCB Medical College, Cuttack',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'RIMS, Ranchi',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'KIEL, Germany',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'MBBS (SCB Medical College, Cuttack)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'MS — Obstetrics & Gynaecology (RIMS, Ranchi)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'fellowship',
        name: 'Fellowship in Infertility',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'diploma',
        name: 'Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany)',
      },
    ],
    memberOf: [
      { '@type': 'Organization', name: 'ISOG — Indian Society of Obstetrics and Gynaecology' },
      { '@type': 'Organization', name: 'FOGSI — Federation of Obstetric and Gynaecological Societies of India' },
      { '@type': 'Organization', name: 'ACOG — American College of Obstetricians and Gynecologists' },
      { '@type': 'Organization', name: 'FIAOG — Fellow of Indian Association of Gynaecological Endoscopists' },
    ],
    worksFor: {
      '@type': 'MedicalClinic',
      '@id': `${SITE_URL}/#clinic`,
      name: CLINIC_NAME,
    },
    jobTitle: 'Founder Director & Best IVF Specialist in Kolkata',
    award: [
      'Best Gynecologist in Kolkata — acknowledged by 15,000+ patients',
      'Recognised among Top 5 Gynecologists in Kolkata',
      'Fellowship in Infertility',
      'Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany)',
    ],
    url: `${SITE_URL}/doctors`,
    sameAs: [],
  };
}

// ─── MedicalProcedure (per service page) ─────────────────────────────────────

export function getMedicalProcedureSchema(procedure: {
  name: string;
  description: string;
  preparation: string;
  procedureType: string;
  followup: string;
  url: string;
  bodyLocation?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: procedure.name,
    description: procedure.description,
    preparation: procedure.preparation,
    procedureType: procedure.procedureType,
    howPerformed: procedure.procedureType,
    followup: procedure.followup,
    url: procedure.url,
    bodyLocation: procedure.bodyLocation || 'Reproductive System',
    status: 'https://schema.org/ActiveActionStatus',
    category: 'https://schema.org/RecommendedDoseSchedule',
    performedBy: {
      '@type': 'Physician',
      '@id': `${SITE_URL}/#doctor`,
      name: DOCTOR_NAME,
    },
    availableService: {
      '@type': 'MedicalClinic',
      '@id': `${SITE_URL}/#clinic`,
      name: CLINIC_NAME,
    },
  };
}

// ─── MedicalCondition (per condition page) ───────────────────────────────────

export function getMedicalConditionSchema(condition: {
  name: string;
  description: string;
  url: string;
  symptoms: string[];
  possibleTreatments: string[];
  diagnosisMethods: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: condition.name,
    description: condition.description,
    url: condition.url,
    associatedAnatomy: {
      '@type': 'AnatomicalStructure',
      name: 'Female Reproductive System',
    },
    signOrSymptom: condition.symptoms.map((symptom) => ({
      '@type': 'MedicalSignOrSymptom',
      name: symptom,
    })),
    possibleTreatment: condition.possibleTreatments.map((treatment) => ({
      '@type': 'MedicalTherapy',
      name: treatment,
    })),
    typicalTest: condition.diagnosisMethods.map((method) => ({
      '@type': 'MedicalTest',
      name: method,
    })),
    differentialDiagnosis: {
      '@type': 'DDxElement',
      diagnosis: {
        '@type': 'MedicalCondition',
        name: condition.name,
      },
    },
    medicineSystem: 'https://schema.org/WesternConventional',
    status: 'https://schema.org/MedicalStudyStatus',
  };
}

// ─── FAQPage ─────────────────────────────────────────────────────────────────

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── BreadcrumbList (per page) ───────────────────────────────────────────────

export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Individual Physician (for doctors page) ─────────────────────────────────

export function getIndividualPhysicianSchema(doctor: {
  name: string;
  description: string;
  degrees: string;
  designation: string;
  specialisations: string[];
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: doctor.name,
    description: doctor.description,
    medicalSpecialty: ['Obstetrics', 'Gynecology', 'ReproductiveEndocrinology'],
    knowsAbout: doctor.specialisations,
    jobTitle: doctor.designation,
    worksFor: {
      '@type': 'MedicalClinic',
      '@id': `${SITE_URL}/#clinic`,
      name: CLINIC_NAME,
    },
    url: doctor.url,
  };
}

// ─── Metadata helper ─────────────────────────────────────────────────────────

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title: `${title} | ${DOCTOR_NAME} - Best IVF Centre`,
    description,
    keywords: keywords || [],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${DOCTOR_NAME} - Best IVF Centre`,
      description,
      url,
      siteName: CLINIC_NAME,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${title} | ${DOCTOR_NAME}`,
      description,
    },
  };
}
