export interface BlogPost {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    publishedDate: string; // ISO date string
    author: string;
    category: string;
    readTime: string;
    heroHeadline: string;
    heroSubtext: string;
    content: { heading: string; body: string }[];
    faqs: { question: string; answer: string }[];
    relatedServices: { slug: string; label: string }[];
    relatedConditions: { slug: string; label: string }[];
    keywords: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'ivf-process-step-by-step-guide',
        title: 'IVF Process: A Complete Step-by-Step Guide',
        metaTitle: 'IVF Process Explained Step by Step — What to Expect | Maatritva IVF',
        metaDescription: 'A comprehensive guide to the IVF process — from initial consultation to embryo transfer and pregnancy test. Understand every step of your IVF journey at Maatritva IVF, Kolkata.',
        publishedDate: '2026-02-20',
        author: 'Dr. Ankita Mandal',
        category: 'IVF Treatment',
        readTime: '8 min read',
        heroHeadline: 'The IVF Process: What Happens at Every Step',
        heroSubtext: 'Understanding the IVF journey removes anxiety and helps you prepare. Here is a clear, honest explanation of every stage.',
        content: [
            {
                heading: 'Step 1: Initial Consultation & Diagnosis',
                body: 'Your IVF journey begins with a thorough consultation. Dr. Ankita reviews your complete medical history, previous treatments (if any), and performs a baseline ultrasound. Blood tests for AMH, FSH, LH, thyroid, and prolactin are ordered. A semen analysis is done for the male partner. This comprehensive evaluation identifies the root cause and helps design a personalised protocol.',
            },
            {
                heading: 'Step 2: Ovarian Stimulation (10-12 Days)',
                body: 'Once your protocol is decided, you begin daily hormone injections to stimulate your ovaries to produce multiple mature eggs (instead of the single egg released in a natural cycle). Regular ultrasound scans and blood tests monitor follicle growth. The dosage may be adjusted based on your response. This phase typically lasts 10-12 days.',
            },
            {
                heading: 'Step 3: Trigger Injection & Timing',
                body: 'When follicles reach optimal size (usually 18-20mm), a "trigger" injection (hCG or GnRH agonist) is given to finalise egg maturation. Egg retrieval is precisely timed 34-36 hours after this injection. Timing is critical for success.',
            },
            {
                heading: 'Step 4: Egg Retrieval (OPU)',
                body: 'Egg retrieval is a short procedure (15-20 minutes) performed under mild sedation. Using ultrasound guidance, a thin needle is passed through the vaginal wall to aspirate fluid from each follicle. The embryologist immediately examines the fluid to identify and collect mature eggs. Most patients go home within 2-3 hours.',
            },
            {
                heading: 'Step 5: Fertilisation in the Laboratory',
                body: 'On the same day, collected eggs are fertilised with prepared sperm. In standard IVF, eggs and sperm are placed together. In ICSI (recommended for most cases today), a single healthy sperm is directly injected into each mature egg. The fertilised eggs (now called embryos) are placed in specialised incubators.',
            },
            {
                heading: 'Step 6: Embryo Culture (3-5 Days)',
                body: 'Embryos are cultured in the laboratory for 3-5 days. The embryologist monitors cell division and development daily. By Day 5, the best embryos reach the "blastocyst" stage. Time-lapse monitoring (available at Maatritva IVF) allows continuous observation without disturbing the embryos.',
            },
            {
                heading: 'Step 7: Embryo Transfer',
                body: 'The best-quality embryo is selected for transfer. A thin catheter is used to gently place the embryo into the uterus — a painless procedure that takes 5-10 minutes. Most centres (including Maatritva) prefer single embryo transfer to reduce the risk of multiple pregnancies. Remaining good-quality embryos are frozen (vitrified) for future use.',
            },
            {
                heading: 'Step 8: The Two-Week Wait & Pregnancy Test',
                body: 'After transfer, you continue progesterone support medication. Approximately 14 days later, a blood test (beta-hCG) confirms whether pregnancy has occurred. This waiting period can be emotionally challenging — our counselling team is available for support throughout.',
            },
        ],
        faqs: [
            { question: 'How long does one IVF cycle take?', answer: 'A typical IVF cycle takes <b>approximately 4-6 weeks</b> from the start of stimulation to the pregnancy test.' },
            { question: 'Is the egg retrieval procedure painful?', answer: 'No. Egg retrieval is performed under <b>mild sedation</b>. Most patients feel no pain during the procedure and report only mild cramping afterward.' },
            { question: 'How many embryos are transferred?', answer: 'At Maatritva IVF, we generally recommend <b>single embryo transfer (SET)</b> to avoid the risks of multiple pregnancies. Extra embryos are frozen for future use.' },
        ],
        relatedServices: [
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
            { slug: 'icsi-treatment', label: 'ICSI Treatment' },
            { slug: 'blastocyst-transfer', label: 'Blastocyst Transfer' },
        ],
        relatedConditions: [],
        keywords: ['IVF process', 'IVF steps', 'IVF procedure explained', 'what happens during IVF', 'IVF step by step guide'],
    },
    {
        slug: 'ivf-success-rate-factors',
        title: 'What Affects IVF Success Rates? Key Factors Explained',
        metaTitle: 'IVF Success Rate Factors — What Determines Your Chances | Maatritva IVF',
        metaDescription: 'Understand the key factors that affect IVF success rates — age, egg quality, embryo quality, lifestyle, and more. Honest guidance from Dr. Ankita Mandal at Maatritva IVF.',
        publishedDate: '2026-02-18',
        author: 'Dr. Ankita Mandal',
        category: 'IVF Treatment',
        readTime: '7 min read',
        heroHeadline: 'IVF Success Rates: What Really Matters',
        heroSubtext: 'Not all IVF cycles are created equal. Understanding these key factors helps you make informed decisions and set realistic expectations.',
        content: [
            {
                heading: 'Age — The Single Most Important Factor',
                body: 'A woman\'s age is the most significant predictor of IVF success. Women under 35 have the highest success rates (typically 40-50% per cycle), while rates decline progressively after 37 and more significantly after 40. This is primarily because egg quality and quantity decrease with age. However, with the right protocol and lab, women over 35 can still achieve excellent results.',
            },
            {
                heading: 'Egg Quality & Ovarian Reserve',
                body: 'AMH (Anti-Müllerian Hormone) and AFC (Antral Follicle Count) measure your ovarian reserve. Low AMH doesn\'t automatically mean poor outcomes — it means we may get fewer eggs, but quality can still be excellent. Dr. Ankita tailors stimulation protocols specifically for low-reserve patients to optimise quality over quantity.',
            },
            {
                heading: 'Sperm Quality',
                body: 'Male factor is often underestimated. Sperm morphology, motility, and DNA fragmentation all impact fertilisation rates and embryo development. ICSI can overcome many sperm issues, and surgical sperm retrieval (TESA/PESA) offers options even for men with azoospermia.',
            },
            {
                heading: 'Embryo Quality & Lab Standards',
                body: 'The IVF laboratory is where the magic happens. Embryo quality depends on lab conditions — air quality, temperature control, culture media, and embryologist expertise. This is why choosing a centre with a well-equipped, well-maintained lab is critical. At Maatritva, we use time-lapse monitoring to select the best embryos without disturbing them.',
            },
            {
                heading: 'Uterine Environment',
                body: 'A healthy uterine lining (endometrium) of adequate thickness (ideally 8mm+) and pattern is essential for implantation. Conditions like fibroids, polyps, or adenomyosis can affect implantation. These are addressed before the embryo transfer cycle.',
            },
            {
                heading: 'Lifestyle Factors',
                body: 'Smoking, excessive alcohol, high BMI, and extreme stress can negatively impact IVF outcomes. Simple lifestyle modifications — balanced diet, moderate exercise, adequate sleep, and stress management — can meaningfully improve your chances.',
            },
        ],
        faqs: [
            { question: 'What is a good IVF success rate?', answer: 'A good IVF centre should have clinical pregnancy rates of <b>40-50% for women under 35</b>, declining to 20-30% for 38-40, and lower for 40+. Always ask for age-specific rates.' },
            { question: 'Can I improve my IVF success rate?', answer: 'Yes. <b>Optimising weight, reducing stress, stopping smoking, and taking prescribed supplements</b> (like Coenzyme Q10 and Vitamin D) can improve egg quality and success rates.' },
        ],
        relatedServices: [
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
            { slug: 'egg-freezing', label: 'Egg Freezing' },
        ],
        relatedConditions: [
            { slug: 'low-amh-treatment', label: 'Low AMH' },
            { slug: 'age-related-infertility', label: 'Age-Related Infertility' },
        ],
        keywords: ['IVF success rate', 'IVF success factors', 'what affects IVF success', 'IVF age success rate', 'IVF success tips'],
    },
    {
        slug: 'pcos-and-fertility-complete-guide',
        title: 'PCOS and Fertility: A Complete Guide to Getting Pregnant',
        metaTitle: 'PCOS and Fertility — How to Get Pregnant with PCOS | Maatritva IVF',
        metaDescription: 'Comprehensive guide to PCOS and fertility. Learn how PCOS affects conception and the treatment options available — from lifestyle changes to IVF — at Maatritva IVF, Kolkata.',
        publishedDate: '2026-02-15',
        author: 'Dr. Ankita Mandal',
        category: 'Conditions',
        readTime: '9 min read',
        heroHeadline: 'PCOS & Fertility: Can You Get Pregnant with PCOS?',
        heroSubtext: 'PCOS is the most common cause of ovulation-related infertility — but it is also highly treatable. Here is everything you need to know.',
        content: [
            {
                heading: 'What is PCOS?',
                body: 'Polycystic Ovary Syndrome (PCOS) is a hormonal condition affecting approximately 1 in 5 Indian women of reproductive age. It is characterised by irregular or absent periods, excess androgen hormones, and polycystic ovaries on ultrasound. Not all women with PCOS have all three features.',
            },
            {
                heading: 'How Does PCOS Affect Fertility?',
                body: 'The primary way PCOS affects fertility is through anovulation — irregular or absent ovulation. If you don\'t ovulate regularly, it\'s difficult to conceive naturally because no egg is released. Additionally, hormonal imbalances can affect egg quality and the uterine lining.',
            },
            {
                heading: 'Step 1: Lifestyle Modifications',
                body: 'For many PCOS patients, weight management is the first step. Even a 5-10% reduction in body weight can restore ovulation in many women. A balanced diet low in refined carbohydrates, regular exercise (30 minutes daily), and stress management form the foundation of PCOS treatment.',
            },
            {
                heading: 'Step 2: Ovulation Induction',
                body: 'If lifestyle changes alone don\'t restore ovulation, medications like Letrozole or Clomiphene are used to stimulate ovulation. Dr. Ankita monitors your response with ultrasound to time intercourse or IUI for optimal results.',
            },
            {
                heading: 'Step 3: IUI (Intrauterine Insemination)',
                body: 'If ovulation induction with timed intercourse doesn\'t succeed after 3-4 cycles, IUI is the next step. Processed sperm is placed directly into the uterus at the time of ovulation, increasing the chances of fertilisation.',
            },
            {
                heading: 'Step 4: IVF for PCOS',
                body: 'IVF is recommended if simpler treatments haven\'t worked or if there are additional fertility factors. PCOS patients often respond well to IVF stimulation and produce many eggs. However, they are also at higher risk of ovarian hyperstimulation syndrome (OHSS), which is why experienced protocol management is crucial.',
            },
            {
                heading: 'Metformin & Inositol',
                body: 'Metformin can improve insulin sensitivity in PCOS patients and may help restore ovulation. Myo-inositol and D-chiro-inositol supplements have shown promising results in improving egg quality and ovulation rates in PCOS women.',
            },
        ],
        faqs: [
            { question: 'Can I get pregnant naturally with PCOS?', answer: 'Yes. Many women with PCOS conceive naturally, especially with <b>lifestyle modifications and ovulation induction medications</b>. The key is regular ovulation.' },
            { question: 'Is IVF always needed for PCOS?', answer: 'No. IVF is typically needed only when <b>simpler treatments (medications, IUI) haven\'t worked</b> after adequate trials, or when other factors like tubal issues or male infertility are present.' },
            { question: 'Does PCOS affect egg quality?', answer: 'PCOS can affect egg quality due to <b>hormonal imbalances and insulin resistance</b>. However, with proper management, many PCOS patients produce excellent-quality eggs.' },
        ],
        relatedServices: [
            { slug: 'iui-treatment', label: 'IUI Treatment' },
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
        ],
        relatedConditions: [
            { slug: 'pcos-treatment', label: 'PCOS Treatment' },
            { slug: 'ovulation-disorders', label: 'Ovulation Disorders' },
        ],
        keywords: ['PCOS fertility', 'PCOS pregnancy', 'getting pregnant with PCOS', 'PCOS IVF', 'PCOS treatment for fertility'],
    },
    {
        slug: 'male-infertility-causes-and-treatment',
        title: 'Male Infertility: Causes, Tests, and Treatment Options',
        metaTitle: 'Male Infertility — Causes, Diagnosis & Treatment | Maatritva IVF',
        metaDescription: 'Comprehensive guide to male infertility — causes, diagnostic tests, and advanced treatment options including ICSI and surgical sperm retrieval at Maatritva IVF, Kolkata.',
        publishedDate: '2026-02-12',
        author: 'Dr. Ankita Mandal',
        category: 'Male Fertility',
        readTime: '7 min read',
        heroHeadline: 'Male Infertility: It Takes Two — Understanding the Male Factor',
        heroSubtext: '40-50% of infertility involves a male factor. Yet it\'s often overlooked. Here\'s what every couple should know about male fertility.',
        content: [
            {
                heading: 'How Common Is Male Infertility?',
                body: 'Male factor contributes to approximately 40-50% of all infertility cases. Despite this, many couples focus solely on the female partner\'s evaluation. At Maatritva IVF, we evaluate both partners from the very first visit because treating infertility requires understanding the complete picture.',
            },
            {
                heading: 'Common Causes of Male Infertility',
                body: 'The most common causes include low sperm count (oligospermia), poor sperm motility (asthenospermia), abnormal sperm morphology (teratospermia), and azoospermia (no sperm in ejaculate). Other causes include varicocele, hormonal imbalances, infections, genetic conditions, lifestyle factors (smoking, obesity), and certain medications.',
            },
            {
                heading: 'Essential Tests for Male Fertility',
                body: 'Semen analysis is the cornerstone test — it evaluates sperm count, motility, morphology, and volume. If abnormalities are found, further tests may include hormonal profiling (FSH, LH, testosterone), scrotal ultrasound, DNA fragmentation testing, and genetic karyotyping. All these tests are available at Maatritva IVF.',
            },
            {
                heading: 'Treatment: From Simple to Advanced',
                body: 'Treatment depends on the cause and severity. Mild issues may respond to lifestyle modifications, antioxidant supplements, and hormonal therapy. Moderate cases benefit from IUI with sperm processing. Severe cases — including very low count or poor motility — are best treated with ICSI (Intracytoplasmic Sperm Injection), where a single healthy sperm is injected directly into the egg.',
            },
            {
                heading: 'Surgical Sperm Retrieval (TESA/PESA/Micro-TESE)',
                body: 'For men with azoospermia (no sperm in ejaculate), surgical techniques can often retrieve sperm directly from the testicles or epididymis. TESA, PESA, and Micro-TESE are minimally invasive procedures that, combined with ICSI, allow biological fatherhood even in severe male factor cases.',
            },
            {
                heading: 'The Emotional Dimension',
                body: 'A male infertility diagnosis can be emotionally difficult. Many men feel shame or inadequacy. Our counselling team provides confidential, supportive counselling for both partners. Remember: male infertility is a medical condition, not a reflection of masculinity.',
            },
        ],
        faqs: [
            { question: 'Can male infertility be cured?', answer: 'Many causes of male infertility are <b>treatable or can be bypassed</b> with assisted reproductive technologies like ICSI. Even severe cases like azoospermia have solutions through surgical sperm retrieval.' },
            { question: 'Does lifestyle affect sperm quality?', answer: 'Yes. <b>Smoking, excess alcohol, obesity, heat exposure, and stress</b> all negatively affect sperm quality. Improvements are typically seen within 3 months of lifestyle changes.' },
        ],
        relatedServices: [
            { slug: 'male-infertility-treatment', label: 'Male Infertility Treatment' },
            { slug: 'icsi-treatment', label: 'ICSI Treatment' },
            { slug: 'testicular-sperm-extraction', label: 'TESA/PESA' },
        ],
        relatedConditions: [
            { slug: 'male-infertility', label: 'Male Infertility' },
            { slug: 'azoospermia', label: 'Azoospermia' },
        ],
        keywords: ['male infertility', 'male infertility causes', 'male fertility treatment', 'low sperm count treatment', 'ICSI for male infertility'],
    },
    {
        slug: 'egg-freezing-right-age-and-process',
        title: 'Egg Freezing: The Right Age, Process, and What to Expect',
        metaTitle: 'Egg Freezing Guide — Best Age, Process & Cost | Maatritva IVF',
        metaDescription: 'Complete guide to egg freezing — ideal age, step-by-step process, success rates, and what to expect. Fertility preservation at Maatritva IVF, Kolkata.',
        publishedDate: '2026-02-10',
        author: 'Dr. Ankita Mandal',
        category: 'Fertility Preservation',
        readTime: '6 min read',
        heroHeadline: 'Egg Freezing: Preserve Your Fertility on Your Timeline',
        heroSubtext: 'Modern egg freezing gives women the freedom to plan motherhood on their terms. Here is what you need to know.',
        content: [
            {
                heading: 'Why Consider Egg Freezing?',
                body: 'Egg freezing (oocyte cryopreservation) allows women to preserve their eggs at a younger age for future use. This is valuable for women who want to delay motherhood for career, education, or personal reasons, as well as those facing medical treatments (like chemotherapy) that may affect fertility.',
            },
            {
                heading: 'The Ideal Age for Egg Freezing',
                body: 'The best time to freeze eggs is in your late 20s to early 30s, when egg quality and quantity are optimal. Freezing before 35 yields the best results. However, egg freezing up to age 38-39 can still be beneficial. Beyond 40, the decline in egg quality means fewer viable eggs per cycle.',
            },
            {
                heading: 'The Egg Freezing Process',
                body: 'The process is identical to the first half of an IVF cycle: hormone injections for 10-12 days to stimulate multiple egg production, followed by a short egg retrieval procedure under sedation. Instead of fertilising the eggs, they are flash-frozen (vitrified) and stored in liquid nitrogen at -196°C. The entire process takes about 2 weeks.',
            },
            {
                heading: 'How Many Eggs Should You Freeze?',
                body: 'The recommended number depends on your age. Generally, 15-20 eggs frozen before age 35 gives a strong chance of a future pregnancy. If the first cycle yields fewer eggs, a second cycle may be recommended. Dr. Ankita discusses realistic expectations based on your AMH and follicle count.',
            },
            {
                heading: 'Using Frozen Eggs Later',
                body: 'When you\'re ready to conceive, frozen eggs are thawed, fertilised with sperm via ICSI, and the resulting embryos are transferred to your uterus. Survival rates for vitrified eggs are excellent (85-95%), and success rates are comparable to using fresh eggs, especially when frozen before age 35.',
            },
            {
                heading: 'Egg Freezing in India — Is It Growing?',
                body: 'Yes. Egg freezing is increasingly popular among Indian women, particularly professionals in metros like Kolkata, Mumbai, and Bangalore. The social stigma is reducing, and awareness is growing. At Maatritva IVF, we have seen a significant increase in egg freezing enquiries from women in their late 20s and early 30s.',
            },
        ],
        faqs: [
            { question: 'How long can frozen eggs be stored?', answer: 'Frozen eggs can be stored <b>indefinitely</b> in liquid nitrogen without deterioration. There is no evidence of reduced quality over time.' },
            { question: 'Is egg freezing painful?', answer: 'The hormone injections are <b>subcutaneous (under the skin) and well-tolerated</b>. The egg retrieval is done under sedation and is painless. Most women return to normal activities the next day.' },
            { question: 'What is the success rate with frozen eggs?', answer: 'When eggs are frozen before age 35, the <b>thaw survival rate is 85-95%</b>, and pregnancy rates are comparable to fresh IVF cycles.' },
        ],
        relatedServices: [
            { slug: 'egg-freezing', label: 'Egg Freezing' },
            { slug: 'fertility-preservation', label: 'Fertility Preservation' },
        ],
        relatedConditions: [
            { slug: 'age-related-infertility', label: 'Age-Related Infertility' },
        ],
        keywords: ['egg freezing', 'egg freezing age', 'egg freezing process', 'egg freezing cost India', 'oocyte cryopreservation', 'fertility preservation'],
    },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogPosts.map((post) => post.slug);
}
