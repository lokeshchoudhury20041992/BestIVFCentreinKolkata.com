export interface DoctorData {
    name: string;
    slug: string;
    title: string;
    degrees: string;
    designation: string;
    experience: string;
    specialisations: string[];
    about: string;
    aboutExtended?: string;
    achievements: string[];
    image?: string;
}

export interface EmbryologistData {
    name: string;
    degrees: string;
    designation: string;
    experience: string;
    about: string;
}

export interface CounsellorData {
    name: string;
    degrees: string;
    designation: string;
    experience: string;
    about: string;
}

export interface SonologistData {
    name: string;
    degrees: string;
    rank: number;
    about: string;
    specialisations: string[];
}

// ─── Core Doctors ────────────────────────────────────────────────────────────

export const coreDoctors: DoctorData[] = [
    {
        name: 'Dr. Ankita Mandal',
        slug: 'dr-ankita-mandal',
        title: 'Founder & Director',
        degrees: 'MBBS (SCB Medical College, Cuttack), MS — OBG (RIMS, Ranchi), Fellowship in Infertility, Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany)',
        designation: 'Founder Director & Best IVF Specialist, Maatritva Fertility IVF & Healthcare',
        experience: '15+ years',
        specialisations: [
            'In Vitro Fertilisation (IVF)',
            'Intra-Cytoplasmic Sperm Injection (ICSI)',
            'Intrauterine Insemination (IUI)',
            'Colposcopy',
            'Hysteroscopy',
            'Gynaecological Ultrasound',
            'Recurrent Implantation Failure',
            'High-Risk Pregnancy Management',
            'Gynaecological Laparoscopic Surgery',
        ],
        about:
            'Dr. Ankita Mandal is the best gynecologist in Kolkata, recognised among the top 5 gynecologists in Kolkata today — as acknowledged by her 15,000+ satisfied patients. She is a Consultant Gynaecologist, Obstetrician, Infertility Specialist, and Gynaecological Laparoscopic Surgeon practising in Kolkata. Experience exceptional care from one of the city\'s finest women\'s health experts.',
        aboutExtended:
            'A graduate of SCB Medical College, Cuttack and RIMS, Ranchi, Dr. Ankita Mandal holds a prestigious Fellowship in Infertility and an Advanced Diploma in Reproductive Medicine & ART from KIEL, Germany. She specialises in colposcopy, hysteroscopy, and gynaecological ultrasound.\n\nDr. Ankita Mandal\'s personalised approach empowers patients to make informed decisions about their fertility and reproductive health. She is a proud member of ISOG, FOGSI, ACOG, and a Fellow of FIAOG — reflecting her commitment to the highest standards of medical practice.\n\nWith affiliations to renowned hospitals and online consultations available, Dr. Mandal ensures accessible care for every patient. Whether you need routine check-ups, advanced fertility treatments, or expert advice, Dr. Ankita Mandal is your partner for top-notch gynecological care in Kolkata.',
        achievements: [
            'Best Gynecologist in Kolkata — acknowledged by 15,000+ satisfied patients',
            'Recognised among the Top 5 Gynecologists in Kolkata',
            'Fellowship in Infertility & Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany)',
            'Graduate of SCB Medical College, Cuttack & RIMS, Ranchi',
            'Member of ISOG, FOGSI, ACOG | Fellow of FIAOG',
            'Specialist in Colposcopy, Hysteroscopy & Gynaecological Ultrasound',
            'Pioneer of time-lapse embryo monitoring adoption in Eastern India',
            'Regular speaker at national and international fertility conferences',
        ],
    },
    {
        name: 'Dr. Chhabi Ghosh',
        slug: 'dr-chhabi-ghosh',
        title: 'Senior Fertility Consultant',
        degrees: 'MBBS, DGO, DNB (OBG), FRCOG (UK), Fellowship in Reproductive Endocrinology',
        designation: 'Senior Consultant, Maatritva Fertility IVF & Healthcare',
        experience: '35+ years',
        specialisations: [
            'Infertility Treatment & ART',
            'Reproductive Endocrinology',
            'Advanced Laparoscopic Surgery',
            'Menopausal Medicine',
            'Recurrent Pregnancy Loss Management',
            'Complex IVF Case Management',
        ],
        about:
            'Dr. Chhabi Ghosh brings over 35 years of distinguished experience in infertility treatment and reproductive medicine. With national and international training, including an FRCOG from the Royal College of Obstetricians and Gynaecologists (UK) and a Fellowship in Reproductive Endocrinology, she is one of the most decorated fertility consultants in Eastern India. Her vast experience spans complex IVF cases, recurrent pregnancy loss, and reproductive endocrinology. Dr. Ghosh\'s calm, reassuring demeanour and evidence-based approach make her a pillar of the Maatritva clinical team.',
        achievements: [
            '35+ years of dedicated clinical experience in infertility',
            'FRCOG — Fellow of the Royal College of Obstetricians and Gynaecologists, UK',
            'International fellowship training in Reproductive Endocrinology',
            'Former Head of Department at a leading Kolkata teaching hospital',
            'Published researcher in peer-reviewed national and international journals',
            'Mentored over 50 junior gynaecologists and fertility specialists',
        ],
    },
    {
        name: 'Dr. Khushboo Agarwal',
        slug: 'dr-khushboo-agarwal',
        title: 'Junior Fertility Specialist & Gynaecologist',
        degrees: 'MBBS, MS (OBG), IRM (Institute of Reproductive Medicine)',
        designation: 'Jr. Fertility Specialist & Gynaecologist, Maatritva Fertility IVF & Healthcare',
        experience: '3+ years',
        specialisations: [
            'IVF & IUI Procedures',
            'Ovulation Induction',
            'Follicular Monitoring',
            'Basic Gynaecology & Obstetrics',
            'Fertility Workup & Counselling',
            'Ultrasound-Guided Procedures',
        ],
        about:
            'Dr. Khushboo Agarwal is a dynamic young fertility specialist trained at the prestigious Institute of Reproductive Medicine (IRM), Kolkata — one of India\'s foremost ART training centres. With her MS in Obstetrics & Gynaecology and specialised IRM training, Dr. Khushboo brings a fresh, research-driven perspective to the Maatritva team. She is particularly skilled in follicular monitoring, ovulation induction protocols, and IUI procedures. Her empathetic bedside manner and dedication to continued learning make her a valued member of the clinical team.',
        achievements: [
            'Trained at the Institute of Reproductive Medicine (IRM), Kolkata',
            'Hands-on experience in over 500 IUI and fertility procedures',
            'Active participant in national fertility conferences and CME programmes',
            'Special interest in PCOS-related infertility management',
            'Recognised for outstanding clinical performance during IRM training',
        ],
    },
];

// ─── Embryologists ───────────────────────────────────────────────────────────

export const embryologists: EmbryologistData[] = [
    {
        name: 'Dr. Soumyadip Pal',
        degrees: 'M.Sc. (Biotechnology), PG Diploma in Clinical Embryology, Certified Clinical Embryologist',
        designation: 'Senior Clinical Embryologist, Maatritva Fertility IVF & Healthcare',
        experience: '7+ years',
        about:
            'Dr. Soumyadip Pal is a highly skilled clinical embryologist with over 7 years of hands-on experience in assisted reproductive technology laboratories. Holding a Master\'s in Biotechnology and a PG Diploma in Clinical Embryology from a nationally recognised programme, Dr. Pal is proficient in ICSI micromanipulation, blastocyst culture, vitrification, and time-lapse embryo monitoring. His meticulous approach to embryo selection and laboratory quality control has been instrumental in Maatritva\'s consistently high fertilisation and implantation rates. Dr. Pal stays abreast of the latest advances in embryology through regular participation in national and international ART workshops.',
    },
];

// ─── Counsellors ─────────────────────────────────────────────────────────────

export const counsellors: CounsellorData[] = [
    {
        name: 'Dr. Poulami Pal',
        degrees: 'BHMS, Certified Fertility Counsellor, Diploma in Psychological Counselling',
        designation: 'Senior Fertility Counsellor, Maatritva Fertility IVF & Healthcare',
        experience: '10+ years',
        about:
            'Dr. Poulami Pal brings over a decade of experience in holistic patient care and fertility counselling. With a BHMS degree and additional certifications in psychological counselling, she provides compassionate emotional support to couples navigating the often-stressful fertility journey. Dr. Poulami\'s approach integrates evidence-based counselling techniques with a deep understanding of the emotional, social, and cultural dimensions of infertility in the Indian context. She guides patients through treatment decisions, manages expectations, and helps couples maintain emotional resilience throughout their IVF or IUI cycles.',
    },
    {
        name: 'Suchisree Choudhury Bhattacharya',
        degrees: 'M.A. (Psychology), PG Diploma in Counselling & Psychotherapy, Certified Infertility Counsellor',
        designation: 'Fertility & Wellness Counsellor, Maatritva Fertility IVF & Healthcare',
        experience: '12+ years',
        about:
            'Suchisree Choudhury Bhattacharya is a seasoned counsellor with over 12 years of experience in psychological counselling and patient care. Holding a Master\'s in Psychology and a PG Diploma in Counselling & Psychotherapy, she specialises in helping couples cope with the emotional challenges of infertility, including anxiety, grief from failed cycles, and relationship strain. At Maatritva, Suchisree works closely with the clinical team to ensure every patient receives not just medical treatment, but complete emotional and mental well-being support. Her warm, non-judgmental counselling style has made her a trusted confidante for hundreds of patients.',
    },
];

// ─── Empanelled Sonologists ──────────────────────────────────────────────────

export const empanelledSonologists: SonologistData[] = [
    {
        name: 'Dr. Tarun Kr. Roy',
        degrees: 'MBBS, MD (Radiology), DMRD, Fellowship in Fetal Medicine',
        rank: 1,
        about:
            'Dr. Tarun Kr. Roy is one of Kolkata\'s most experienced and respected sonologists with over 30 years of practice in diagnostic and interventional ultrasonography. He is widely regarded for his expertise in fetal medicine, high-risk obstetric scanning, and fertility-related imaging. His fellowship in Fetal Medicine and extensive postgraduate training make him a go-to specialist for complex cases requiring precision imaging. Dr. Roy has been instrumental in early detection and management of fetal anomalies and gynaecological pathologies across leading hospitals in Kolkata.',
        specialisations: [
            'Fetal Medicine & Anomaly Scan',
            'Obstetric Ultrasonography',
            'Follicular Monitoring for IVF/IUI',
            'Gynaecological Imaging',
            'Doppler Studies',
        ],
    },
    {
        name: 'Dr. Shamim Khandekar',
        degrees: 'MBBS, DNB (Radiology), Fellowship in Musculoskeletal & Women\'s Imaging',
        rank: 2,
        about:
            'Dr. Shamim Khandekar is a distinguished sonologist and radiologist known for her precision in women\'s health imaging. With a DNB in Radiology and a fellowship specialising in women\'s imaging, she brings unparalleled diagnostic accuracy to gynaecological and obstetric ultrasound. Her calm, patient-oriented approach and deep expertise in transvaginal sonography, saline infusion sonography, and early pregnancy assessment make her an invaluable partner in Maatritva\'s fertility programme.',
        specialisations: [
            'Women\'s Health Imaging',
            'Transvaginal Sonography (TVS)',
            'Saline Infusion Sonography (SIS)',
            'Early Pregnancy Assessment',
            'Breast Imaging',
        ],
    },
    {
        name: 'Dr. Payel Sen',
        degrees: 'MBBS, MD (Radiology), Advanced Training in Reproductive Imaging',
        rank: 3,
        about:
            'Dr. Payel Sen has carved a niche in reproductive and gynaecological ultrasound imaging in Kolkata. With an MD in Radiology and advanced training in reproductive imaging, she is highly proficient in follicular tracking, endometrial assessment, and 3D/4D sonography. Dr. Sen\'s technical skill combined with her compassionate patient interaction has earned her a reputation as one of the top USG consultants in Eastern India. She works closely with Maatritva\'s fertility team to provide real-time imaging support during IVF and IUI cycles.',
        specialisations: [
            'Reproductive Imaging',
            'Follicular Tracking & Monitoring',
            '3D/4D Ultrasonography',
            'Endometrial Assessment',
            'Ovarian Reserve Imaging',
        ],
    },
    {
        name: 'Dr. Deblina Kar',
        degrees: 'MBBS, DMRD, DNB (Radiology), Fellowship in Obstetric Ultrasound',
        rank: 4,
        about:
            'Dr. Deblina Kar is a highly regarded sonologist specialising in obstetric and fertility ultrasound. Her dual qualifications — DMRD and DNB in Radiology — along with her fellowship in Obstetric Ultrasound position her among the most qualified imaging specialists in Kolkata. Dr. Kar is known for her thoroughness in anomaly scans, growth assessments, and colour Doppler studies. At Maatritva, she plays a crucial role in monitoring high-risk pregnancies and providing precise follicular monitoring for fertility treatments.',
        specialisations: [
            'Obstetric Ultrasound',
            'Colour Doppler Studies',
            'Growth & Anomaly Screening',
            'Fertility Ultrasound',
            'High-Risk Pregnancy Monitoring',
        ],
    },
    {
        name: 'Dr. Manisha Gupta',
        degrees: 'MBBS, MD (Radiology), Certificate in Fetal Echocardiography',
        rank: 5,
        about:
            'Dr. Manisha Gupta brings exceptional skill in advanced fetal imaging and gynaecological sonography. With an MD in Radiology and a specialised certificate in Fetal Echocardiography, she is one of the few sonologists in Kolkata who can perform detailed fetal cardiac assessments. Her expertise extends to complex gynaecological imaging, including evaluation of fibroids, ovarian pathologies, and Müllerian anomalies. Dr. Gupta\'s meticulous reporting and clinical insight are highly valued by Maatritva\'s clinical team for treatment planning.',
        specialisations: [
            'Fetal Echocardiography',
            'Gynaecological Imaging',
            'Fibroid & Ovarian Pathology Assessment',
            'Müllerian Anomaly Evaluation',
            'Advanced Obstetric Scanning',
        ],
    },
    {
        name: 'Dr. Upamanyu Majumder',
        degrees: 'MBBS, DNB (Radiology), PG Diploma in Ultrasonography, Fellowship in Interventional Radiology',
        rank: 6,
        about:
            'Dr. Upamanyu Majumder is a versatile radiologist and sonologist with expertise spanning diagnostic ultrasonography and interventional procedures. His DNB in Radiology, PG Diploma in Ultrasonography, and Fellowship in Interventional Radiology provide him a uniquely broad skill set. At Maatritva, he specialises in ultrasound-guided fertility procedures, tubal assessments, and complex pelvic imaging. Known for his sharp analytical mind and approachable nature, Dr. Majumder is a key member of the empanelled diagnostic team.',
        specialisations: [
            'Ultrasound-Guided Procedures',
            'Tubal Assessment & HSG Correlation',
            'Pelvic Imaging',
            'Interventional Sonography',
            'General & Abdominal Ultrasound',
        ],
    },
];
