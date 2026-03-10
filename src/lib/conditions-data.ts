export interface ConditionData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubtext: string;
    whatIsIt: string;
    symptoms: string[];
    diagnosis: { method: string; description: string }[];
    treatmentOptions: { name: string; description: string; link: string }[];
    drAnkitaApproach: string;
    faqs: { question: string; answer: string }[];
    relatedServices: { slug: string; label: string }[];
    keywords: string[];
}

export const conditionsData: ConditionData[] = [
    {
        slug: 'blocked-fallopian-tubes',
        title: 'Blocked Fallopian Tubes — Diagnosis & Treatment',
        metaTitle: 'Blocked Fallopian Tubes Treatment in Kolkata',
        metaDescription:
            'Expert treatment for blocked fallopian tubes by Dr. Ankita Mandal. Laparoscopic surgery and IVF options at Maatritva IVF, Kolkata.',
        heroHeadline: 'Blocked Fallopian Tubes? Know Your Options.',
        heroSubtext:
            'A blocked tube does not mean the end of your journey. Dr. Ankita Mandal helps you understand the cause and find the right path forward.',
        whatIsIt:
            'The fallopian tubes are where the egg and sperm meet for fertilisation. When one or both tubes are blocked — by scar tissue, infection, or endometriosis — the egg cannot travel to the uterus, making natural conception difficult or impossible. Blocked tubes are one of the most common causes of female infertility, accounting for roughly 25-30% of cases.',
        symptoms: [
            'Often asymptomatic — many women discover it only during fertility investigations',
            'Pelvic pain (especially if caused by hydrosalpinx or infection)',
            'Unusual vaginal discharge (if underlying infection is present)',
            'History of pelvic inflammatory disease (PID)',
            'Previous ectopic pregnancy',
        ],
        diagnosis: [
            {
                method: 'Hysterosalpingography (HSG)',
                description:
                    'An X-ray-based test where dye is injected through the cervix. If the dye flows freely through the tubes, they are open. If it stops, a blockage is identified. This is the primary screening test.',
            },
            {
                method: 'Sono-Salpingography (SSG)',
                description:
                    'An ultrasound-based alternative to HSG, using saline solution. It avoids radiation exposure and can be more comfortable.',
            },
            {
                method: 'Diagnostic Laparoscopy',
                description:
                    'The gold standard. A tiny camera is inserted through a small abdominal incision to directly visualise the tubes. This can be both diagnostic and therapeutic — Dr. Ankita can treat mild blockages during the same procedure.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Laparoscopic Surgery',
                description:
                    'For partial blockages or adhesions, Dr. Ankita can open the tubes through minimally invasive keyhole surgery. Recovery is fast, with many women conceiving naturally within the following months.',
                link: '/services/laparoscopic-surgery',
            },
            {
                name: 'IVF (In Vitro Fertilisation)',
                description:
                    'When tubes are severely damaged or both are blocked, IVF bypasses the tubes entirely — eggs are collected directly from the ovaries. This is often the most effective option for bilateral tubal blockage.',
                link: '/services/ivf-treatment',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita believes in a thorough evaluation before recommending surgery or IVF. Not every blocked tube needs IVF — mild adhesions can often be resolved laparoscopically, giving you a chance to conceive naturally. She will explain your options clearly, with realistic expectations, so you can make an informed decision.',
        faqs: [
            {
                question: 'Can I get pregnant naturally with one blocked tube?',
                answer:
                    'Yes. If <b>one tube is open and functioning</b>, natural conception is possible. Ovulation alternates between the two ovaries, so you still have a chance each month. Dr. Ankita may recommend timed intercourse or IUI to optimise your chances.',
            },
            {
                question: 'My HSG showed a blockage. Does that mean I definitely need IVF?',
                answer:
                    'Not necessarily. HSG can sometimes show <b>false positives</b> due to tubal spasm. Dr. Ankita may recommend a repeat test or a diagnostic laparoscopy to confirm. Even confirmed blockages may be surgically correctable.',
            },
            {
                question: 'What causes fallopian tubes to get blocked?',
                answer:
                    'Common causes include <b>pelvic infections (PID), endometriosis, previous surgeries, or a ruptured appendix</b>. In some cases, the exact cause is unknown. Dr. Ankita will investigate thoroughly to understand your specific situation.',
            },
        ],
        relatedServices: [
            { slug: 'laparoscopic-surgery', label: 'Laparoscopic Surgery' },
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
        ],
        keywords: ['blocked fallopian tubes treatment Kolkata', 'tubal blockage IVF', 'HSG test Kolkata'],
    },
    {
        slug: 'low-amh-treatment',
        title: 'Low AMH — Understanding & Treatment Options',
        metaTitle: 'Low AMH Treatment in Kolkata',
        metaDescription:
            'Low AMH does not mean you cannot conceive. Dr. Ankita Mandal at Maatritva IVF offers expert, personalised fertility care for diminished ovarian reserve.',
        heroHeadline: 'Low AMH? Your Fertility Story Isn\'t Over.',
        heroSubtext:
            'AMH is one number, not the full picture. Dr. Ankita Mandal specialises in helping women with low AMH achieve motherhood.',
        whatIsIt:
            'Anti-Müllerian Hormone (AMH) is a blood marker that reflects your ovarian reserve — the number of eggs remaining in your ovaries. A low AMH level (typically below 1.0 ng/mL) suggests a reduced egg count. However, AMH tells you about quantity, not quality. Many women with low AMH have eggs of excellent quality and can conceive with the right approach. It is important not to panic over this number alone.',
        symptoms: [
            'There are usually no symptoms — low AMH is discovered through blood testing',
            'Shorter menstrual cycles (periods coming earlier, e.g. every 24-25 days)',
            'Difficulty conceiving after months of trying',
            'Previous IVF cycle with a lower-than-expected egg retrieval',
        ],
        diagnosis: [
            {
                method: 'AMH Blood Test',
                description:
                    'A simple blood test that can be done on any day of the cycle. Results are available within 24-48 hours. Normal range is 1.5-4.0 ng/mL; below 1.0 is considered low.',
            },
            {
                method: 'Antral Follicle Count (AFC)',
                description:
                    'An ultrasound done on day 2-3 of the menstrual cycle to count the small follicles (resting eggs) in both ovaries. This complements the AMH test and gives a fuller picture of ovarian reserve.',
            },
            {
                method: 'FSH & Estradiol',
                description:
                    'These hormones measured on day 2-3 provide additional information. An elevated FSH (above 10-12) combined with low AMH further confirms diminished reserve.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Customised IVF Protocol',
                description:
                    'Dr. Ankita uses modified stimulation protocols designed specifically for low AMH patients — focusing on quality over quantity. Even 2-3 good eggs can lead to a successful pregnancy.',
                link: '/services/ivf-treatment',
            },
            {
                name: 'ICSI',
                description:
                    'When only a small number of eggs are retrieved, ICSI ensures that each egg has the best possible chance of fertilisation by injecting a single selected sperm.',
                link: '/services/icsi-treatment',
            },
            {
                name: 'Lifestyle & Supplement Support',
                description:
                    'DHEA supplementation, CoQ10, and lifestyle modifications (diet, stress reduction, sleep) can support egg quality in the months leading up to IVF.',
                link: '',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita treats the patient, not just the number. A low AMH does not mean zero chances — it means we need to be smarter and more personalised in our approach. She uses gentle stimulation protocols, focuses on egg quality through nutrition and supplementation, and honestly discusses realistic expectations. Her philosophy: every egg is precious, and every woman deserves a thorough, compassionate approach.',
        faqs: [
            {
                question: 'I have AMH of 0.5. Should I give up hope?',
                answer:
                    'Absolutely not. Dr. Ankita has helped patients with <b>AMH below 0.5 achieve successful pregnancies</b>. With customised gentle stimulation protocols and focusing on egg quality, even a small number of eggs can lead to a healthy baby.',
            },
            {
                question: 'Can supplements actually improve my egg quality?',
                answer:
                    'Research supports that <b>CoQ10, DHEA, and Vitamin D</b> can improve mitochondrial function in eggs. Dr. Ankita recommends a 2-3 month supplement protocol before IVF to optimise your egg quality.',
            },
            {
                question: 'Does low AMH mean early menopause?',
                answer:
                    'Low AMH suggests a <b>smaller remaining egg pool</b>, which may mean menopause could arrive earlier. However, this varies greatly between individuals. The priority is to act promptly on your fertility goals while eggs are still available.',
            },
        ],
        relatedServices: [
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
            { slug: 'icsi-treatment', label: 'ICSI Treatment' },
        ],
        keywords: ['low AMH treatment Kolkata', 'diminished ovarian reserve', 'AMH less than 1 IVF'],
    },
    {
        slug: 'pcos-treatment',
        title: 'PCOS — Comprehensive Diagnosis & Treatment',
        metaTitle: 'PCOS Treatment in Kolkata',
        metaDescription:
            'Expert PCOS treatment and fertility care by Dr. Ankita Mandal at Maatritva IVF, Kolkata. From lifestyle changes to IVF — personalised solutions for every woman.',
        heroHeadline: 'PCOS Treatment in Kolkata — Take Back Control',
        heroSubtext:
            'Polycystic Ovary Syndrome affects 1 in 5 Indian women. Dr. Ankita Mandal provides a complete, compassionate approach to managing PCOS and restoring fertility.',
        whatIsIt:
            'Polycystic Ovary Syndrome (PCOS) is a hormonal condition where the ovaries produce excess androgens (male hormones), leading to irregular ovulation, cyst formation on the ovaries, and metabolic changes. PCOS is one of the most common — and most treatable — causes of infertility in women. With the right management, most women with PCOS can conceive successfully.',
        symptoms: [
            'Irregular or absent periods',
            'Heavy or prolonged menstrual bleeding',
            'Acne, oily skin, or excess facial/body hair (hirsutism)',
            'Weight gain, especially around the abdomen',
            'Difficulty losing weight',
            'Thinning hair on the scalp',
            'Darkened skin patches (acanthosis nigricans)',
            'Difficulty getting pregnant',
        ],
        diagnosis: [
            {
                method: 'Ultrasound',
                description:
                    'A pelvic ultrasound reveals multiple small follicles (the "string of pearls" appearance) on the ovaries and may show enlarged ovarian volume.',
            },
            {
                method: 'Hormonal Blood Tests',
                description:
                    'Tests for testosterone, DHEA-S, LH, FSH, insulin, thyroid function, and AMH. A high LH-to-FSH ratio and elevated androgens are classic PCOS markers.',
            },
            {
                method: 'Rotterdam Criteria',
                description:
                    'PCOS is diagnosed when 2 of 3 criteria are met: irregular ovulation, clinical/biochemical signs of excess androgens, and polycystic ovaries on ultrasound.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Lifestyle Modifications',
                description:
                    'Weight management through diet and exercise is the first line of treatment. Even a 5-10% weight loss can restore regular ovulation in many PCOS patients.',
                link: '',
            },
            {
                name: 'Ovulation Induction + IUI',
                description:
                    'Medications like Letrozole or Clomiphene stimulate ovulation. Combined with IUI, this is highly effective for PCOS patients who ovulate irregularly.',
                link: '/services/iui-treatment',
            },
            {
                name: 'IVF',
                description:
                    'For PCOS patients who do not respond to simpler treatments, IVF provides excellent success rates. PCOS patients often respond well to stimulation, producing good numbers of eggs.',
                link: '/services/ivf-treatment',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita takes a step-wise approach to PCOS: start with lifestyle changes and ovulation induction, then move to IUI, and only escalate to IVF if needed. She also addresses the metabolic and emotional aspects of PCOS — insulin resistance, weight concerns, and the anxiety that comes with irregular periods and difficulty conceiving.',
        faqs: [
            {
                question: 'Can I get pregnant naturally with PCOS?',
                answer:
                    'Many women with PCOS <b>conceive naturally</b> after lifestyle changes restore regular ovulation. Weight loss, dietary modifications, and sometimes medications like Letrozole are often enough. Dr. Ankita always starts with the simplest effective approach.',
            },
            {
                question: 'Will my PCOS symptoms go away after pregnancy?',
                answer:
                    'PCOS is a <b>chronic condition that can be managed, not cured</b>. Some symptoms improve during pregnancy and breastfeeding, but long-term management through diet, exercise, and regular monitoring is important for your overall health.',
            },
            {
                question: 'I have PCOS and my periods are very irregular. When should I see a fertility specialist?',
                answer:
                    'If you have been <b>trying to conceive for 6 months without success</b> and have irregular periods, consult a fertility specialist. With PCOS, early intervention through ovulation induction can significantly shorten your time to pregnancy.',
            },
        ],
        relatedServices: [
            { slug: 'iui-treatment', label: 'IUI Treatment' },
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
        ],
        keywords: ['PCOS treatment Kolkata', 'polycystic ovary syndrome specialist', 'PCOS fertility Kolkata'],
    },
    {
        slug: 'endometriosis',
        title: 'Endometriosis — Diagnosis & Fertility Treatment',
        metaTitle: 'Endometriosis Treatment in Kolkata | Fertility Solutions — Maatritva IVF',
        metaDescription:
            'Expert endometriosis diagnosis and fertility treatment by Dr. Ankita Mandal at Maatritva IVF, Kolkata. Laparoscopic surgery and IVF for endometriosis-related infertility.',
        heroHeadline: 'Endometriosis & Fertility — Expert Care in Kolkata',
        heroSubtext:
            'Endometriosis affects up to 50% of women with infertility. Dr. Ankita Mandal offers advanced diagnosis and targeted treatment to help you conceive.',
        whatIsIt:
            'Endometriosis is a condition where tissue similar to the uterine lining grows outside the uterus — on the ovaries, fallopian tubes, peritoneum, and other pelvic organs. This misplaced tissue responds to hormonal changes each month, causing inflammation, pain, and scarring. Endometriosis can impair fertility by damaging the fallopian tubes, creating adhesions, forming ovarian cysts (endometriomas), and altering the pelvic environment. It is estimated to affect 10-15% of women of reproductive age and is present in up to 50% of women investigated for infertility.',
        symptoms: [
            'Severe menstrual cramps (dysmenorrhea) that worsen over time',
            'Chronic pelvic pain, not limited to periods',
            'Pain during intercourse (dyspareunia)',
            'Heavy or irregular menstrual bleeding',
            'Pain during bowel movements or urination, especially during periods',
            'Difficulty getting pregnant',
            'Fatigue, bloating, or digestive issues during periods',
        ],
        diagnosis: [
            {
                method: 'Pelvic Ultrasound',
                description:
                    'Transvaginal ultrasound can detect endometriomas (chocolate cysts) on the ovaries and deep infiltrating endometriosis in some cases. This is the first-line imaging tool.',
            },
            {
                method: 'MRI Pelvis',
                description:
                    'MRI provides detailed imaging of deep infiltrating endometriosis, especially in areas like the rectovaginal septum, bladder, and bowel. Useful for surgical planning.',
            },
            {
                method: 'Diagnostic Laparoscopy',
                description:
                    'The gold standard for definitive diagnosis. Direct visualisation allows staging of endometriosis (Stages I-IV) and simultaneous surgical treatment of lesions and adhesions.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Laparoscopic Surgery',
                description:
                    'Excision or ablation of endometriotic lesions, removal of endometriomas, and adhesiolysis. Surgery can restore pelvic anatomy and improve natural conception rates.',
                link: '/services/laparoscopic-surgery',
            },
            {
                name: 'IVF Treatment',
                description:
                    'For moderate-to-severe endometriosis or when surgery alone has not resulted in pregnancy, IVF bypasses damaged tubes and the hostile pelvic environment.',
                link: '/services/ivf-treatment',
            },
            {
                name: 'Medical Management',
                description:
                    'Hormonal suppression with GnRH analogues before IVF can improve outcomes in some patients. Pain management through medications and lifestyle changes.',
                link: '',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita takes a personalised, stage-specific approach. For mild endometriosis, surgery followed by timed intercourse or IUI may be sufficient. For moderate-to-severe cases, she coordinates surgical treatment with a planned IVF cycle. Her goal is to preserve ovarian reserve while effectively treating the disease. She is experienced in managing the delicate balance between surgical thoroughness and fertility preservation.',
        faqs: [
            {
                question: 'Can I get pregnant naturally with endometriosis?',
                answer:
                    'Yes, many women with <b>mild endometriosis conceive naturally</b>, especially after surgical treatment. The chances depend on the stage, location of lesions, and whether the tubes and ovaries are affected.',
            },
            {
                question: 'Should I have surgery before IVF if I have endometriosis?',
                answer:
                    'It depends on the type. <b>Endometriomas larger than 3-4 cm</b> are generally removed before IVF. However, surgery must be done carefully to preserve ovarian tissue. Dr. Ankita evaluates each case individually.',
            },
            {
                question: 'Does endometriosis affect IVF success rates?',
                answer:
                    'Moderate-to-severe endometriosis can <b>reduce IVF success rates somewhat</b>, but most women with endometriosis still achieve pregnancy through IVF. Protocols can be tailored to optimise outcomes.',
            },
        ],
        relatedServices: [
            { slug: 'laparoscopic-surgery', label: 'Laparoscopic Surgery' },
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
        ],
        keywords: ['endometriosis treatment Kolkata', 'endometriosis fertility', 'endometriosis specialist Kolkata', 'chocolate cyst treatment Kolkata'],
    },
    {
        slug: 'male-infertility',
        title: 'Male Infertility — Causes, Diagnosis & Solutions',
        metaTitle: 'Male Infertility Causes & Treatment in Kolkata — Maatritva IVF',
        metaDescription:
            'Comprehensive guide to male infertility causes, diagnosis, and treatment options at Maatritva IVF, Kolkata. Expert evaluation and advanced solutions by Dr. Ankita Mandal.',
        heroHeadline: 'Male Infertility — Understanding the Causes & Finding Solutions',
        heroSubtext:
            'Male factor is present in 40-50% of infertile couples. Early, thorough evaluation is the key to effective treatment.',
        whatIsIt:
            'Male infertility refers to any condition that reduces a man\'s ability to contribute to conception. It can result from problems with sperm production, sperm transport, hormonal imbalances, or sexual dysfunction. The most common manifestation is an abnormal semen analysis — showing low sperm count (oligospermia), poor motility (asthenospermia), abnormal shape (teratospermia), or a combination. In approximately 10-15% of cases, no sperm is found in the ejaculate (azoospermia). Modern medicine offers effective solutions for virtually all causes of male infertility.',
        symptoms: [
            'Difficulty conceiving after 12 months of unprotected intercourse',
            'Abnormal semen analysis results',
            'History of testicular injury, surgery, or undescended testis',
            'Erectile or ejaculatory dysfunction',
            'Swelling or pain in the testicular area (varicocele)',
            'History of genital infections or sexually transmitted diseases',
            'Reduced facial or body hair (possible hormonal imbalance)',
        ],
        diagnosis: [
            {
                method: 'Semen Analysis',
                description:
                    'The cornerstone of male fertility evaluation. Assesses sperm count, motility (movement), morphology (shape), volume, and vitality. Should be done according to WHO 2021 criteria after 2-5 days of abstinence.',
            },
            {
                method: 'Hormonal Profile',
                description:
                    'Blood tests for FSH, LH, testosterone, prolactin, and thyroid function. Abnormal levels can indicate testicular failure, pituitary issues, or hormonal imbalance.',
            },
            {
                method: 'Scrotal Ultrasound',
                description:
                    'Doppler ultrasound of the scrotum to detect varicocele, testicular abnormalities, or obstructive pathology in the reproductive tract.',
            },
            {
                method: 'Genetic Testing',
                description:
                    'Karyotyping and Y-chromosome microdeletion analysis for men with severe oligospermia or azoospermia. Identifies genetic causes and informs treatment decisions.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Male Infertility Treatment',
                description:
                    'Comprehensive evaluation and targeted treatment including lifestyle optimisation, hormonal therapy, varicocelectomy, or advanced ART procedures.',
                link: '/services/male-infertility-treatment',
            },
            {
                name: 'ICSI Treatment',
                description:
                    'For severe male factor, ICSI enables pregnancy with even a single viable sperm by injecting it directly into the egg.',
                link: '/services/icsi-treatment',
            },
            {
                name: 'Surgical Sperm Retrieval (TESA/PESA)',
                description:
                    'For azoospermia, sperm can be retrieved directly from the testes or epididymis for use with ICSI.',
                link: '/services/testicular-sperm-extraction',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita ensures the male partner is evaluated early and thoroughly — not just with a basic semen analysis, but with hormonal, genetic, and anatomical assessment when indicated. She coordinates male and female treatment plans simultaneously to save time and optimise outcomes. Her team provides a comfortable, non-judgmental environment for male patients.',
        faqs: [
            {
                question: 'Is male infertility common?',
                answer:
                    'Very common. <b>Male factor is present in approximately 40-50%</b> of all infertility cases. It can be the sole cause in 20-30% of couples. Early evaluation is important.',
            },
            {
                question: 'Can male infertility be treated without surgery?',
                answer:
                    'In many cases, yes. <b>Lifestyle changes, hormonal medication, and antioxidant supplements</b> can improve sperm parameters. Surgery is needed mainly for varicocele or obstructive azoospermia.',
            },
            {
                question: 'What is a normal sperm count?',
                answer:
                    'According to WHO 2021 criteria, a normal sperm count is <b>≥16 million sperm per millilitre</b>. However, counts below this can still result in pregnancy with appropriate treatment.',
            },
        ],
        relatedServices: [
            { slug: 'male-infertility-treatment', label: 'Male Infertility Treatment' },
            { slug: 'icsi-treatment', label: 'ICSI Treatment' },
            { slug: 'testicular-sperm-extraction', label: 'TESA / PESA' },
        ],
        keywords: ['male infertility Kolkata', 'male infertility causes', 'low sperm count Kolkata', 'male fertility specialist Kolkata'],
    },
    {
        slug: 'unexplained-infertility',
        title: 'Unexplained Infertility — When Tests Are Normal',
        metaTitle: 'Unexplained Infertility Treatment in Kolkata — Maatritva IVF',
        metaDescription:
            'Expert treatment for unexplained infertility at Maatritva IVF, Kolkata. When all tests are normal but conception does not happen, Dr. Ankita Mandal can help.',
        heroHeadline: 'Unexplained Infertility — All Tests Normal, Still Not Pregnant?',
        heroSubtext:
            'In about 15-20% of couples, standard tests reveal no clear cause. That does not mean there is no solution.',
        whatIsIt:
            'Unexplained infertility is diagnosed when a couple has been unable to conceive for over a year, and all standard fertility tests — including semen analysis, ovulation assessment, hormonal profile, tubal patency, and uterine evaluation — come back normal. This does not mean nothing is wrong; it means the issue may lie beyond what current routine tests can detect. Possible hidden factors include subtle egg quality issues, sperm DNA fragmentation, impaired fertilisation capacity, or endometrial receptivity problems. The good news is that treatment is highly effective even without a specific diagnosis.',
        symptoms: [
            'Inability to conceive after 12+ months of unprotected intercourse',
            'All standard fertility tests (semen analysis, hormones, ultrasound, HSG) are normal',
            'No identified cause of infertility in either partner',
        ],
        diagnosis: [
            {
                method: 'Complete Fertility Work-Up Confirmation',
                description:
                    'Verification that all standard tests have been properly completed: semen analysis, ovulation tracking, hormonal panel, HSG or laparoscopy for tubal assessment, and uterine evaluation.',
            },
            {
                method: 'Advanced Investigations',
                description:
                    'Sperm DNA fragmentation test, hysteroscopy for detailed uterine assessment, endometrial receptivity testing (ERA), and immunological screening may uncover subtle issues.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Timed Intercourse with Ovulation Monitoring',
                description:
                    'Precise tracking of ovulation with ultrasound and timing intercourse accordingly. Often combined with mild ovulation-enhancing medication.',
                link: '',
            },
            {
                name: 'IUI Treatment',
                description:
                    'Placing concentrated sperm directly into the uterus during ovulation. IUI combined with ovulation induction is the standard first-line treatment for unexplained infertility.',
                link: '/services/iui-treatment',
            },
            {
                name: 'IVF Treatment',
                description:
                    'If 3-4 IUI cycles are unsuccessful, IVF provides the ability to observe fertilisation directly in the laboratory, often revealing the hidden cause and providing effective treatment simultaneously.',
                link: '/services/ivf-treatment',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita first ensures the evaluation has been thorough and considers advanced tests that may uncover subtle issues. She follows an evidence-based step-wise approach: ovulation induction with timed intercourse, then IUI, then IVF. This structured progression ensures you are not over-treated and each step is given a fair chance before escalating.',
        faqs: [
            {
                question: 'If all tests are normal, why am I not getting pregnant?',
                answer:
                    'Standard tests assess the <b>major known factors</b> but cannot evaluate everything — egg quality, sperm-egg interaction, fertilisation capacity, and embryo development can only be assessed during IVF. There may be subtle issues that current tests cannot detect.',
            },
            {
                question: 'What is the success rate for IVF in unexplained infertility?',
                answer:
                    '<b>IVF success rates for unexplained infertility are among the highest</b> — often 40-50% per cycle — because these patients typically have good ovarian reserve and no structural issues.',
            },
            {
                question: 'Should I try IUI or go straight to IVF?',
                answer:
                    'Dr. Ankita recommends <b>3-4 IUI cycles</b> as the first step for younger patients. If unsuccessful, IVF is the next logical step. For women over 37, earlier transition to IVF may be advisable.',
            },
        ],
        relatedServices: [
            { slug: 'iui-treatment', label: 'IUI Treatment' },
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
        ],
        keywords: ['unexplained infertility treatment Kolkata', 'infertility all tests normal', 'idiopathic infertility Kolkata'],
    },
    {
        slug: 'recurrent-miscarriage',
        title: 'Recurrent Miscarriage — Investigation & Treatment',
        metaTitle: 'Recurrent Miscarriage Treatment in Kolkata — Maatritva IVF',
        metaDescription:
            'Expert evaluation and treatment for recurrent miscarriage by Dr. Ankita Mandal at Maatritva IVF, Kolkata. Thorough investigation and supportive care for repeated pregnancy loss.',
        heroHeadline: 'Recurrent Miscarriage — Find Answers, Find Hope',
        heroSubtext:
            'Losing a pregnancy more than once is devastating. Dr. Ankita Mandal provides thorough investigation and compassionate treatment to help you carry to term.',
        whatIsIt:
            'Recurrent miscarriage (recurrent pregnancy loss) is defined as two or more consecutive pregnancy losses before 20 weeks of gestation. It affects approximately 1-2% of couples trying to conceive. The causes are varied — chromosomal abnormalities in the embryo, uterine structural issues, blood clotting disorders, hormonal imbalances, and immunological factors can all play a role. In about 50% of cases, a specific cause can be identified and treated. Even when no cause is found, the prognosis for a successful subsequent pregnancy remains good with proper monitoring and support.',
        symptoms: [
            'Two or more consecutive pregnancy losses before 20 weeks',
            'Vaginal bleeding in early pregnancy',
            'Recurrent early pregnancy cramping and pain',
            'History of abnormal embryo karyotype in previous losses',
        ],
        diagnosis: [
            {
                method: 'Chromosomal Analysis (Karyotype)',
                description:
                    'Karyotyping of both partners to check for balanced translocations or other chromosomal rearrangements that may cause recurrent embryo abnormalities.',
            },
            {
                method: 'Thrombophilia Screening',
                description:
                    'Tests for antiphospholipid syndrome, Factor V Leiden, and other clotting disorders that can cause placental blood clots and miscarriage.',
            },
            {
                method: 'Uterine Evaluation',
                description:
                    'Hysteroscopy and/or MRI to identify uterine abnormalities — septum, fibroids, adhesions — that may interfere with implantation and pregnancy maintenance.',
            },
            {
                method: 'Hormonal & Immunological Testing',
                description:
                    'Thyroid function, progesterone levels, NK cell activity, and other immunological markers that may be associated with pregnancy loss.',
            },
        ],
        treatmentOptions: [
            {
                name: 'IVF with PGT (Genetic Testing)',
                description:
                    'Testing embryos for chromosomal abnormalities before transfer significantly reduces the risk of miscarriage due to genetic causes.',
                link: '/services/ivf-with-pgd-pgs',
            },
            {
                name: 'Hysteroscopy',
                description:
                    'Surgical correction of uterine abnormalities (septum, adhesions, polyps) that may be causing implantation failure or miscarriage.',
                link: '/services/hysteroscopy',
            },
            {
                name: 'Medical Management',
                description:
                    'Anticoagulant therapy for thrombophilia, progesterone support, thyroid optimisation, and immunomodulatory treatment based on investigation results.',
                link: '',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita investigates every possible factor systematically. She understands the emotional toll of recurrent loss and provides a supportive, reassuring environment. Her approach combines evidence-based medical treatment with early pregnancy monitoring — including serial blood tests and scans — to provide confidence and peace of mind during subsequent pregnancies.',
        faqs: [
            {
                question: 'After two miscarriages, what are my chances of carrying to full term?',
                answer:
                    'Even after two losses, <b>the overall chance of a successful next pregnancy is 60-75%</b>. With proper investigation and treatment of any identified causes, the prognosis improves further.',
            },
            {
                question: 'Do I need IVF after recurrent miscarriages?',
                answer:
                    'Not always. If a <b>treatable cause</b> is found (clotting disorder, uterine issue, hormonal imbalance), addressing it may allow natural conception. IVF with PGT is recommended when chromosomal factors are suspected.',
            },
            {
                question: 'Can stress cause miscarriage?',
                answer:
                    'While stress is unpleasant and should be managed, <b>there is no strong evidence</b> that emotional stress directly causes miscarriage. Physical causes are far more likely. Dr. Ankita addresses both medical and emotional aspects of care.',
            },
        ],
        relatedServices: [
            { slug: 'ivf-with-pgd-pgs', label: 'IVF with PGD/PGS' },
            { slug: 'hysteroscopy', label: 'Hysteroscopy' },
        ],
        keywords: ['recurrent miscarriage treatment Kolkata', 'repeated pregnancy loss Kolkata', 'miscarriage specialist Kolkata'],
    },
    {
        slug: 'uterine-fibroids',
        title: 'Uterine Fibroids & Fertility',
        metaTitle: 'Uterine Fibroids Treatment in Kolkata | Fertility Impact — Maatritva IVF',
        metaDescription:
            'Expert treatment for uterine fibroids affecting fertility by Dr. Ankita Mandal at Maatritva IVF, Kolkata. Laparoscopic and hysteroscopic fibroid removal.',
        heroHeadline: 'Uterine Fibroids — Understanding Their Impact on Fertility',
        heroSubtext:
            'Not all fibroids affect fertility, but some can. Dr. Ankita Mandal helps you understand which fibroids matter and what to do about them.',
        whatIsIt:
            'Uterine fibroids (leiomyomas) are benign growths of the uterine muscle. They are extremely common — up to 70-80% of women develop them by age 50. However, not all fibroids affect fertility. Their impact depends on size, number, and most importantly, location. Submucous fibroids (those that grow into the uterine cavity) are most likely to interfere with implantation and pregnancy. Intramural fibroids larger than 4-5 cm may also affect fertility. Subserosal fibroids (growing outward) rarely impact reproductive outcomes.',
        symptoms: [
            'Heavy or prolonged menstrual bleeding',
            'Pelvic pressure or pain',
            'Frequent urination due to bladder pressure',
            'Difficulty conceiving or recurrent miscarriage',
            'Enlarged uterus felt during examination',
            'Many women with fibroids have no symptoms at all',
        ],
        diagnosis: [
            {
                method: 'Pelvic Ultrasound',
                description:
                    'Transvaginal ultrasound identifies the number, size, and location of fibroids. This is the primary diagnostic tool.',
            },
            {
                method: 'Sonohysterography (SHG)',
                description:
                    'Saline-infused ultrasound provides a clearer view of whether fibroids are encroaching on the uterine cavity.',
            },
            {
                method: 'Hysteroscopy',
                description:
                    'Direct visualisation of the uterine cavity to confirm submucous fibroids and assess their suitability for hysteroscopic removal.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Hysteroscopic Myomectomy',
                description:
                    'Submucous fibroids can be removed through the cervix using a hysteroscope — no abdominal incision needed. Quick recovery, with fertility treatment possible within 1-2 months.',
                link: '/services/hysteroscopy',
            },
            {
                name: 'Laparoscopic Myomectomy',
                description:
                    'Larger intramural or subserosal fibroids are removed through keyhole surgery. Dr. Ankita uses meticulous surgical technique to preserve uterine integrity for future pregnancy.',
                link: '/services/laparoscopic-surgery',
            },
            {
                name: 'IVF After Fibroid Treatment',
                description:
                    'After surgical correction, IVF can be planned with improved chances of implantation and pregnancy success.',
                link: '/services/ivf-treatment',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita does not recommend surgery for every fibroid. She carefully assesses whether the fibroid is actually affecting fertility based on its size, location, and relationship to the uterine cavity. Only fibroids likely to impair implantation or pregnancy are surgically addressed. Her surgical approach prioritises preserving maximum healthy uterine tissue.',
        faqs: [
            {
                question: 'Do all fibroids need to be removed before IVF?',
                answer:
                    'No. <b>Only submucous fibroids and large intramural fibroids</b> (>4-5 cm) that distort the cavity typically need removal. Small subserosal fibroids can usually be left alone.',
            },
            {
                question: 'Can fibroids come back after removal?',
                answer:
                    'Fibroids can recur because <b>myomectomy removes existing fibroids but does not prevent new ones</b>. However, recurrence within 1-2 years is uncommon, giving adequate time for conception.',
            },
            {
                question: 'Can I have a normal pregnancy with fibroids?',
                answer:
                    'Many women with fibroids have <b>completely normal pregnancies</b>. Problems can arise if fibroids are large (>5 cm) or located in certain positions. Dr. Ankita monitors these pregnancies as high-risk for added safety.',
            },
        ],
        relatedServices: [
            { slug: 'hysteroscopy', label: 'Hysteroscopy' },
            { slug: 'laparoscopic-surgery', label: 'Laparoscopic Surgery' },
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
        ],
        keywords: ['uterine fibroids treatment Kolkata', 'fibroids and fertility', 'myomectomy Kolkata', 'fibroid removal Kolkata'],
    },
    {
        slug: 'ovulation-disorders',
        title: 'Ovulation Disorders — Causes & Treatment',
        metaTitle: 'Ovulation Disorders Treatment in Kolkata — Maatritva IVF',
        metaDescription:
            'Expert diagnosis and treatment of ovulation disorders at Maatritva IVF, Kolkata. Dr. Ankita Mandal helps restore regular ovulation for natural conception.',
        heroHeadline: 'Ovulation Disorders — Restoring Your Natural Cycle',
        heroSubtext:
            'Irregular or absent ovulation is the most common cause of female infertility — and one of the most treatable.',
        whatIsIt:
            'Ovulation disorders (anovulation or oligo-ovulation) occur when the ovaries do not release an egg regularly. Without ovulation, pregnancy cannot occur naturally. These disorders account for approximately 25-30% of all female infertility. The most common cause is PCOS, but thyroid dysfunction, hyperprolactinaemia, hypothalamic amenorrhoea (from stress, excessive exercise, or low body weight), and premature ovarian failure can also disrupt ovulation. The good news is that ovulation disorders respond very well to treatment.',
        symptoms: [
            'Irregular periods (cycles shorter than 21 days or longer than 35 days)',
            'Absent periods (amenorrhoea)',
            'Very light or very heavy menstrual bleeding',
            'No ovulation signs (lack of mid-cycle mucus changes or temperature shift)',
            'Difficulty getting pregnant',
        ],
        diagnosis: [
            {
                method: 'Hormonal Blood Tests',
                description:
                    'Day 2-3 FSH, LH, estradiol, prolactin, thyroid panel (TSH, T3, T4), AMH, and testosterone. These identify the specific hormonal cause of anovulation.',
            },
            {
                method: 'Ovulation Tracking',
                description:
                    'Serial ultrasound monitoring to assess follicular development and confirm whether ovulation occurs. Progesterone blood test on Day 21 can confirm ovulation retrospectively.',
            },
            {
                method: 'Pelvic Ultrasound',
                description:
                    'Assess ovarian morphology (polycystic appearance, number of antral follicles), uterine lining thickness, and rule out structural abnormalities.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Ovulation Induction Medications',
                description:
                    'Letrozole or Clomiphene Citrate stimulate the ovaries to produce and release eggs. This is the first-line treatment for most ovulation disorders.',
                link: '',
            },
            {
                name: 'IUI with Ovulation Induction',
                description:
                    'Combining ovulation medication with IUI maximises the chances by ensuring sperm is placed in the uterus at the exact time of ovulation.',
                link: '/services/iui-treatment',
            },
            {
                name: 'IVF',
                description:
                    'For patients who do not respond to oral medications or have other contributing factors, IVF provides controlled stimulation and fertilisation.',
                link: '/services/ivf-treatment',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita starts with identifying the root cause — is it PCOS, thyroid, prolactin, stress, or something else? Treating the underlying cause often restores natural ovulation. She uses evidence-based ovulation induction with careful monitoring to avoid complications like ovarian hyperstimulation or multiple pregnancies.',
        faqs: [
            {
                question: 'Can I ovulate naturally without medication?',
                answer:
                    'In some cases, yes. <b>Correcting thyroid dysfunction, reducing prolactin levels, managing stress, or achieving a healthy weight</b> can restore natural ovulation without fertility drugs.',
            },
            {
                question: 'What is the difference between Letrozole and Clomiphene?',
                answer:
                    'Both stimulate ovulation, but <b>Letrozole</b> is now preferred as first-line for PCOS patients due to better ovulation and pregnancy rates with fewer side effects. Dr. Ankita selects the best option for your specific situation.',
            },
            {
                question: 'How many cycles of ovulation induction should I try?',
                answer:
                    'Typically <b>3-6 cycles</b>. If ovulation occurs but pregnancy does not, the treatment is combined with IUI. If still unsuccessful, the next step is IVF.',
            },
        ],
        relatedServices: [
            { slug: 'iui-treatment', label: 'IUI Treatment' },
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
        ],
        keywords: ['ovulation disorder treatment Kolkata', 'anovulation treatment', 'irregular ovulation Kolkata', 'ovulation induction Kolkata'],
    },
    {
        slug: 'premature-ovarian-failure',
        title: 'Premature Ovarian Failure (POF / POI)',
        metaTitle: 'Premature Ovarian Failure Treatment in Kolkata — Maatritva IVF',
        metaDescription:
            'Expert management of premature ovarian failure (POI) at Maatritva IVF, Kolkata. Dr. Ankita Mandal offers tailored fertility solutions for women with early menopause.',
        heroHeadline: 'Premature Ovarian Failure — Fertility Options Still Exist',
        heroSubtext:
            'An early decline in ovarian function does not mean your dream of motherhood is over. Dr. Ankita Mandal offers expert guidance and treatment.',
        whatIsIt:
            'Premature Ovarian Failure (POF), now more commonly called Primary Ovarian Insufficiency (POI), occurs when the ovaries stop functioning normally before age 40. The ovaries produce fewer eggs, hormone levels fluctuate, and periods become irregular or stop altogether. POI affects approximately 1% of women under 40. It can be caused by genetic factors, autoimmune conditions, chemotherapy, or radiation. In many cases, the cause remains unknown. Importantly, POI is not the same as menopause — intermittent ovarian function and even spontaneous pregnancies can occur in 5-10% of women with POI.',
        symptoms: [
            'Irregular or absent periods before age 40',
            'Hot flashes and night sweats',
            'Vaginal dryness',
            'Difficulty conceiving',
            'Decreased libido',
            'Mood changes and irritability',
        ],
        diagnosis: [
            {
                method: 'Hormonal Testing',
                description:
                    'Elevated FSH (>25-40 IU/L on two occasions 4 weeks apart), low estradiol, and very low AMH confirm ovarian insufficiency. These tests should be done on Day 2-3 of the cycle if periods are present.',
            },
            {
                method: 'Genetic Testing',
                description:
                    'Karyotype and Fragile X premutation testing to identify genetic causes. Turner syndrome mosaicism and FMR1 premutations are important to rule out.',
            },
            {
                method: 'Autoimmune Screening',
                description:
                    'Tests for thyroid antibodies, adrenal antibodies, and other autoimmune markers. Autoimmune conditions are associated with POI in 10-20% of cases.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Donor Egg IVF',
                description:
                    'The most effective fertility treatment for POI. Using eggs from a young, healthy donor achieves excellent pregnancy rates regardless of the patient\'s own ovarian function.',
                link: '/services/donor-egg-ivf',
            },
            {
                name: 'Egg Freezing (if caught early)',
                description:
                    'If POI is diagnosed early while some ovarian function remains, urgent egg freezing can preserve future fertility options.',
                link: '/services/egg-freezing',
            },
            {
                name: 'Hormone Replacement Therapy',
                description:
                    'HRT to manage menopausal symptoms and protect bone and cardiovascular health until the natural age of menopause. Essential for long-term wellbeing.',
                link: '',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita approaches POI with sensitivity and thoroughness. She first confirms the diagnosis, investigates causes, and preserves any remaining fertility if possible. For patients ready to conceive, she guides them through the donor egg IVF process with full transparency and emotional support. She also ensures long-term health is protected through appropriate hormone management.',
        faqs: [
            {
                question: 'Can I get pregnant with premature ovarian failure?',
                answer:
                    'While natural conception is unlikely with established POI, <b>donor egg IVF offers excellent pregnancy rates</b> (50-60% per cycle). Additionally, 5-10% of women with POI experience spontaneous ovarian function and may conceive naturally.',
            },
            {
                question: 'Is POI the same as early menopause?',
                answer:
                    'Not exactly. <b>POI involves intermittent ovarian function</b> — the ovaries may still occasionally produce hormones and eggs. True early menopause means complete and permanent cessation. This distinction matters for treatment planning.',
            },
            {
                question: 'What causes premature ovarian failure?',
                answer:
                    'Causes include <b>genetic factors (Turner syndrome, Fragile X), autoimmune conditions, chemotherapy/radiation, and surgical removal</b> of ovaries. In about 50% of cases, no specific cause is identified.',
            },
        ],
        relatedServices: [
            { slug: 'donor-egg-ivf', label: 'Donor Egg IVF' },
            { slug: 'egg-freezing', label: 'Egg Freezing' },
        ],
        keywords: ['premature ovarian failure Kolkata', 'POI treatment Kolkata', 'early menopause fertility', 'primary ovarian insufficiency Kolkata'],
    },
    {
        slug: 'azoospermia',
        title: 'Azoospermia — Zero Sperm Count Treatment',
        metaTitle: 'Azoospermia Treatment in Kolkata | Zero Sperm Count — Maatritva IVF',
        metaDescription:
            'Expert azoospermia treatment at Maatritva IVF, Kolkata. Surgical sperm retrieval (TESA, PESA, micro-TESE) and ICSI for zero sperm count by Dr. Ankita Mandal.',
        heroHeadline: 'Azoospermia — Zero Sperm Does Not Mean Zero Hope',
        heroSubtext:
            'Advanced surgical sperm retrieval combined with ICSI can help men with zero sperm count father biological children.',
        whatIsIt:
            'Azoospermia is the absence of sperm in the ejaculate. It affects approximately 1% of all men and 10-15% of infertile men. There are two main types: obstructive azoospermia (OA), where sperm are produced but cannot reach the ejaculate due to blockage, and non-obstructive azoospermia (NOA), where the testes have impaired sperm production. The distinction is critical because treatment approaches differ significantly. With modern surgical techniques and ICSI, many men with azoospermia can achieve biological fatherhood.',
        symptoms: [
            'Semen analysis showing zero sperm (confirmed on at least two separate tests)',
            'Normal ejaculation volume and sexual function in most cases',
            'Small or soft testicular size (may indicate non-obstructive cause)',
            'History of testicular injury, infection, or surgery',
            'History of vasectomy or hernia repair',
        ],
        diagnosis: [
            {
                method: 'Repeated Semen Analysis',
                description:
                    'At least two separate semen analyses confirming zero sperm. Centrifugation of the sample may reveal rare sperm (cryptozoospermia).',
            },
            {
                method: 'Hormonal Evaluation',
                description:
                    'FSH, LH, and testosterone levels help distinguish obstructive from non-obstructive azoospermia. Elevated FSH suggests impaired production.',
            },
            {
                method: 'Genetic Testing',
                description:
                    'Karyotype analysis and Y-chromosome microdeletion testing. Certain genetic deletions (AZFc) still allow surgical sperm retrieval, while others (AZFa, AZFb) have very poor prognosis.',
            },
            {
                method: 'Physical Examination & Imaging',
                description:
                    'Scrotal ultrasound and clinical examination to assess testicular size, check for varicocele, and evaluate the reproductive tract for obstruction signs.',
            },
        ],
        treatmentOptions: [
            {
                name: 'TESA / PESA / Micro-TESE',
                description:
                    'Surgical sperm retrieval directly from the testes or epididymis. Micro-TESE offers the highest retrieval rates for non-obstructive azoospermia.',
                link: '/services/testicular-sperm-extraction',
            },
            {
                name: 'ICSI',
                description:
                    'Retrieved sperm (even very few) are used for ICSI — direct injection into the egg — to achieve fertilisation.',
                link: '/services/icsi-treatment',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita works closely with urologists for surgical cases and coordinates the male and female treatment timelines to maximise success. She ensures thorough genetic counselling before surgical sperm retrieval, so couples understand the implications and make informed decisions. Her team provides a supportive, non-judgmental environment for male patients.',
        faqs: [
            {
                question: 'What is the chance of finding sperm with micro-TESE?',
                answer:
                    'For obstructive azoospermia, sperm retrieval success is <b>over 90%</b>. For non-obstructive azoospermia, micro-TESE has success rates of approximately <b>50-60%</b> — significantly better than conventional TESA.',
            },
            {
                question: 'If sperm are found, what are the pregnancy chances?',
                answer:
                    'Once sperm are retrieved, <b>ICSI fertilisation and pregnancy rates are comparable</b> to standard ICSI cycles. The critical step is finding viable sperm.',
            },
            {
                question: 'Can medications improve sperm production in azoospermia?',
                answer:
                    'In some cases of <b>hypogonadotropic hypogonadism</b> (hormonal deficiency), medications like hCG and FSH injections can stimulate sperm production. However, this is only applicable to a small subset of patients with specific hormonal causes.',
            },
        ],
        relatedServices: [
            { slug: 'testicular-sperm-extraction', label: 'TESA / PESA / Micro-TESE' },
            { slug: 'icsi-treatment', label: 'ICSI Treatment' },
        ],
        keywords: ['azoospermia treatment Kolkata', 'zero sperm count treatment', 'no sperm in semen Kolkata', 'TESE Kolkata'],
    },
    {
        slug: 'age-related-infertility',
        title: 'Age-Related Infertility — Fertility After 35',
        metaTitle: 'Fertility After 35 in Kolkata | Age-Related Infertility — Maatritva IVF',
        metaDescription:
            'Expert fertility treatment for women over 35 at Maatritva IVF, Kolkata. Dr. Ankita Mandal offers tailored IVF protocols for age-related infertility.',
        heroHeadline: 'Fertility After 35 — Time Matters, But Hope Remains',
        heroSubtext:
            'Age affects fertility, but it does not define it. Dr. Ankita Mandal helps women over 35 navigate their options with clarity and confidence.',
        whatIsIt:
            'Female fertility naturally declines with age, particularly after 35, and more rapidly after 38-40. This is primarily due to a decrease in both the number and quality of eggs. The risk of chromosomal abnormalities in eggs increases with age, leading to higher rates of miscarriage and conditions like Down syndrome. However, many women over 35 conceive successfully — especially with timely medical intervention. Understanding the biology and acting promptly is key. For men, age also affects sperm quality, though the decline is more gradual.',
        symptoms: [
            'Difficulty conceiving after 6 months of trying (for women over 35)',
            'Shorter menstrual cycles (indicating declining ovarian reserve)',
            'Previous unsuccessful fertility treatments',
            'History of miscarriage',
            'Low AMH or elevated FSH on testing',
        ],
        diagnosis: [
            {
                method: 'Ovarian Reserve Testing',
                description:
                    'AMH blood test, antral follicle count (AFC) via ultrasound, and Day 3 FSH/estradiol levels to assess remaining egg quantity and estimate reproductive lifespan.',
            },
            {
                method: 'Complete Fertility Work-Up',
                description:
                    'Standard evaluation for both partners — semen analysis, tubal assessment, hormonal panel — to identify any additional factors beyond age.',
            },
        ],
        treatmentOptions: [
            {
                name: 'IVF with Optimised Protocols',
                description:
                    'Customised stimulation protocols for older patients, focusing on maximising egg yield while maintaining quality. Blastocyst culture and PGT may be recommended.',
                link: '/services/ivf-treatment',
            },
            {
                name: 'IVF with PGT-A',
                description:
                    'Preimplantation genetic screening of embryos to select chromosomally normal ones, reducing miscarriage risk and increasing per-transfer success rates.',
                link: '/services/ivf-with-pgd-pgs',
            },
            {
                name: 'Egg Freezing',
                description:
                    'For women not yet ready to conceive, freezing eggs at the earliest opportunity preserves current fertility potential for future use.',
                link: '/services/egg-freezing',
            },
            {
                name: 'Donor Egg IVF',
                description:
                    'For women over 42-43, or those with severely diminished ovarian reserve, donor eggs offer the highest chance of successful pregnancy.',
                link: '/services/donor-egg-ivf',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita is honest about the biological realities while remaining deeply optimistic and supportive. She avoids both false hope and unnecessary pessimism. For women over 35, she recommends acting promptly, optimising protocols carefully, and considering egg quality enhancement strategies. She tailors every cycle to maximise the chance of success within the patient\'s biological reality.',
        faqs: [
            {
                question: 'What are my chances of conceiving through IVF at 38-40?',
                answer:
                    'IVF success rates at 38-40 are approximately <b>25-35% per cycle</b> with own eggs, and higher with cumulative attempts. Success depends on individual ovarian reserve and egg quality, which Dr. Ankita evaluates thoroughly.',
            },
            {
                question: 'Should I freeze my eggs if I am 35 and not ready for a baby?',
                answer:
                    '<b>Yes, strongly considered.</b> Egg quality and quantity decline each year after 35. Freezing eggs now preserves your current fertility for future use. The sooner you freeze, the better the outcomes.',
            },
            {
                question: 'At what age should I consider donor eggs?',
                answer:
                    'There is no strict cutoff, but <b>after 42-43</b>, own-egg IVF success rates drop significantly. Dr. Ankita discusses donor eggs when the chance of success with own eggs is very low, but the decision is always yours.',
            },
        ],
        relatedServices: [
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
            { slug: 'egg-freezing', label: 'Egg Freezing' },
            { slug: 'donor-egg-ivf', label: 'Donor Egg IVF' },
            { slug: 'ivf-with-pgd-pgs', label: 'IVF with PGD/PGS' },
        ],
        keywords: ['fertility after 35 Kolkata', 'IVF for older women Kolkata', 'age related infertility treatment', 'IVF over 40 Kolkata'],
    },
    {
        slug: 'secondary-infertility',
        title: 'Secondary Infertility — When the Second Baby Doesn\'t Come',
        metaTitle: 'Secondary Infertility Treatment in Kolkata — Maatritva IVF',
        metaDescription:
            'Expert treatment for secondary infertility at Maatritva IVF, Kolkata. Dr. Ankita Mandal helps couples struggling to conceive their second child.',
        heroHeadline: 'Secondary Infertility — Help for Your Growing Family',
        heroSubtext:
            'Having conceived before does not guarantee it will happen again. Many couples face difficulties with their second or third child — and effective help is available.',
        whatIsIt:
            'Secondary infertility is the inability to conceive or carry a pregnancy to term after previously having a child without difficulty. It is surprisingly common and can be deeply frustrating because couples expect that if they conceived once, it should happen again easily. The causes are similar to primary infertility — age-related decline, hormonal changes, new medical conditions, weight changes, or issues that have developed since the last pregnancy. In many cases, simply the passage of time (and declining egg quality) is the primary factor.',
        symptoms: [
            'Inability to conceive after 6-12 months of trying for another child',
            'Previous successful pregnancy and delivery',
            'No known new medical conditions',
            'Increasing age since last pregnancy',
        ],
        diagnosis: [
            {
                method: 'Standard Fertility Evaluation',
                description:
                    'Complete work-up for both partners — semen analysis, hormonal testing, ovarian reserve assessment, tubal evaluation — even if previous pregnancy was natural.',
            },
            {
                method: 'Uterine Assessment',
                description:
                    'Ultrasound and possibly hysteroscopy to check for new uterine issues — adhesions from previous caesarean section, polyps, or fibroids that may have developed.',
            },
        ],
        treatmentOptions: [
            {
                name: 'Ovulation Induction & IUI',
                description:
                    'For mild cases, simple ovulation support and IUI may be sufficient, especially if the issue is age-related cycle changes.',
                link: '/services/iui-treatment',
            },
            {
                name: 'IVF',
                description:
                    'For more complex cases or when the woman is over 35-37, IVF provides the most effective path to pregnancy.',
                link: '/services/ivf-treatment',
            },
        ],
        drAnkitaApproach:
            'Dr. Ankita recognises that secondary infertility can be emotionally isolating — couples may feel their concerns are dismissed because they already have a child. She provides the same thoroughness and compassion as for primary infertility. A fresh, comprehensive evaluation is essential because circumstances change, and assumptions should never be made based on past fertility.',
        faqs: [
            {
                question: 'Why can\'t I conceive again if I already have a child?',
                answer:
                    'Fertility changes over time. <b>Age, hormonal shifts, new medical conditions, weight changes, or lifestyle factors</b> can all affect your ability to conceive again. A fresh evaluation is essential.',
            },
            {
                question: 'Is secondary infertility common?',
                answer:
                    'Yes. <b>Secondary infertility accounts for approximately 50% of all infertility cases</b>. It is more common than most people realise and deserves the same medical attention as primary infertility.',
            },
            {
                question: 'Do I need a full work-up if I conceived naturally before?',
                answer:
                    '<b>Yes, absolutely.</b> Your fertility status may have changed. A complete evaluation including semen analysis, hormonal testing, and anatomical assessment is necessary to identify the current cause.',
            },
        ],
        relatedServices: [
            { slug: 'iui-treatment', label: 'IUI Treatment' },
            { slug: 'ivf-treatment', label: 'IVF Treatment' },
        ],
        keywords: ['secondary infertility Kolkata', 'secondary infertility treatment', 'cannot conceive second child Kolkata'],
    },
];

export function getConditionBySlug(slug: string): ConditionData | undefined {
    return conditionsData.find((c) => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
    return conditionsData.map((c) => c.slug);
}
