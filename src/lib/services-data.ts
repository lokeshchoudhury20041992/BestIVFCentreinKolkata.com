export interface ServiceData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubtext: string;
    overview: string;
    whoIsItFor: string[];
    procedureSteps: { step: number; title: string; description: string }[];
    preparation: string;
    procedureType: string;
    followup: string;
    successRateNote: string;
    faqs: { question: string; answer: string }[];
    relatedConditions: { slug: string; label: string }[];
    keywords: string[];
}

export const servicesData: ServiceData[] = [
    {
        slug: 'ivf-treatment',
        title: 'In Vitro Fertilisation (IVF)',
        metaTitle: 'IVF Treatment in Kolkata',
        metaDescription:
            'Advanced IVF treatment at Maatritva IVF, Kolkata. Dr. Ankita Mandal offers personalised fertility care with high clinical success rates. Book consultation today.',
        heroHeadline: 'IVF Treatment in Kolkata — Your Path to Parenthood',
        heroSubtext:
            'Dr. Ankita Mandal and her team at Maatritva IVF provide compassionate, evidence-based IVF care tailored to your unique fertility journey.',
        overview:
            'In Vitro Fertilisation (IVF) is a well-established assisted reproductive technology where eggs are fertilised with sperm in a specialised laboratory. The resulting embryos are then carefully transferred to the uterus. At Maatritva IVF, we use advanced techniques including time-lapse embryo monitoring and blastocyst culture to optimise your chances. Our approach is deeply personalised — because your body and your story are unique.',
        whoIsItFor: [
            'Couples with unexplained infertility after thorough evaluation',
            'Women with blocked or damaged fallopian tubes',
            'Patients with endometriosis affecting fertility',
            'Cases where IUI has not been successful',
            'Male factor infertility (low sperm count or motility)',
            'Women with diminished ovarian reserve or low AMH',
        ],
        procedureSteps: [
            { step: 1, title: 'Ovarian Stimulation', description: 'Controlled hormonal medication to encourage the development of multiple mature eggs, monitored through regular ultrasounds.' },
            { step: 2, title: 'Egg Retrieval', description: 'A minimally invasive, ultrasound-guided procedure performed under short anaesthesia. It takes about 15-20 minutes.' },
            { step: 3, title: 'Fertilisation & Culture', description: 'Eggs are fertilised with prepared sperm in our embryology lab. Embryos are cultured and monitored for 3-5 days.' },
            { step: 4, title: 'Embryo Transfer', description: 'The healthiest embryo is gently placed into the uterus — a painless procedure that does not require anaesthesia.' },
            { step: 5, title: 'Pregnancy Test', description: 'A blood test (beta-hCG) is done approximately 14 days after transfer to confirm pregnancy.' },
        ],
        preparation: 'Initial fertility assessment including hormonal blood tests, ultrasound, and semen analysis. Lifestyle counselling on nutrition, stress management, and supplementation.',
        procedureType: 'Percutaneous',
        followup: 'Post-transfer rest period of 2 days, followed by hormonal support medication. Regular follow-up scans starting at 6 weeks of pregnancy.',
        successRateNote:
            'Our clinical success rates at Maatritva IVF are consistently strong, and we are transparent about outcomes. Success depends on age, ovarian reserve, and individual health factors. Dr. Ankita personally reviews each case to set realistic expectations.',
        faqs: [
            {
                question: 'I have low AMH. Will IVF still work for me?',
                answer:
                    'Low AMH means fewer eggs, but <b>quality matters more than quantity</b>. Dr. Ankita uses customised stimulation protocols for low AMH patients. Many women with AMH below 1.0 have achieved successful pregnancies at our centre through tailored IVF approaches.',
            },
            {
                question: 'Does egg retrieval hurt? What about the anaesthesia?',
                answer:
                    'Egg retrieval is performed under <b>short intravenous sedation</b> — you will be comfortably asleep during the 15-20 minute procedure. Most patients describe only mild cramping afterward, similar to period discomfort, which resolves within a day.',
            },
            {
                question: 'How many IVF cycles will I need?',
                answer:
                    'Many patients conceive in <b>1-2 cycles</b>. However, this depends on individual factors like age and egg quality. Dr. Ankita discusses cumulative success rates during your initial consultation so you can plan realistically.',
            },
            {
                question: 'Is IVF safe? Are there risks to the baby?',
                answer:
                    'IVF is a <b>well-established, globally practised</b> procedure. Decades of research confirm that IVF babies develop just as healthily as naturally conceived children. All medications and procedures follow strict safety protocols at our centre.',
            },
        ],
        relatedConditions: [
            { slug: 'low-amh-treatment', label: 'Low AMH Treatment' },
            { slug: 'blocked-fallopian-tubes', label: 'Blocked Fallopian Tubes' },
            { slug: 'pcos-treatment', label: 'PCOS Treatment' },
        ],
        keywords: ['IVF treatment Kolkata', 'IVF centre Kolkata', 'best IVF doctor Kolkata', 'IVF cost Kolkata'],
    },
    {
        slug: 'iui-treatment',
        title: 'Intrauterine Insemination (IUI)',
        metaTitle: 'IUI Treatment in Kolkata',
        metaDescription:
            'Effective IUI treatment at Maatritva IVF by Dr. Ankita Mandal. A gentle, less invasive fertility option. Consult today for personalised care.',
        heroHeadline: 'IUI Treatment in Kolkata — A Gentle First Step',
        heroSubtext:
            'Intrauterine Insemination is often the first-line fertility treatment — less invasive, more affordable, and effective for many couples.',
        overview:
            'IUI involves placing specially washed and concentrated sperm directly into the uterus around the time of ovulation. This gives sperm a head start by bypassing the cervix and increasing the number that reach the fallopian tubes. At Maatritva IVF, we carefully time each IUI cycle using ultrasound tracking to maximise success.',
        whoIsItFor: [
            'Couples with unexplained infertility',
            'Mild male factor infertility (slightly low count or motility)',
            'Women with cervical factor infertility',
            'Couples using donor sperm',
            'Patients who prefer a less invasive initial approach',
        ],
        procedureSteps: [
            { step: 1, title: 'Ovulation Monitoring', description: 'Serial ultrasounds and sometimes blood tests to pinpoint the exact timing of ovulation.' },
            { step: 2, title: 'Sperm Preparation', description: 'The semen sample is washed and concentrated in the lab to select the most motile, healthy sperm.' },
            { step: 3, title: 'Insemination', description: 'The prepared sperm is gently placed into the uterus through a thin, flexible catheter. The procedure takes just 5-10 minutes.' },
            { step: 4, title: 'Follow-Up', description: 'A pregnancy test is taken approximately two weeks after the procedure.' },
        ],
        preparation: 'Fertility blood work, ultrasound to assess ovarian function, and semen analysis. Ovulation may be stimulated with mild oral medications.',
        procedureType: 'Noninvasive',
        followup: 'Normal activities can be resumed immediately. Progesterone support may be prescribed. Pregnancy test after 14 days.',
        successRateNote:
            'IUI success rates typically range from 10-20% per cycle, depending on the underlying cause. Dr. Ankita recommends trying 3-4 IUI cycles before considering IVF, unless other factors warrant earlier escalation.',
        faqs: [
            {
                question: 'Is the IUI procedure painful?',
                answer:
                    'IUI is <b>virtually painless</b> — most women compare it to a routine Pap smear. No anaesthesia is needed and you can go home within 30 minutes. Some women experience very mild cramping that passes quickly.',
            },
            {
                question: 'How long should we try IUI before moving to IVF?',
                answer:
                    'Dr. Ankita typically recommends <b>3-4 well-timed IUI cycles</b>. If pregnancy has not occurred by then, she will discuss whether IVF or other approaches may be more appropriate based on your specific situation.',
            },
            {
                question: 'Can IUI be done with donor sperm?',
                answer:
                    'Yes, IUI is <b>commonly used with donor sperm</b> and has good success rates in this scenario. Our centre follows all ICMR guidelines for donor sperm usage and maintains complete confidentiality.',
            },
        ],
        relatedConditions: [
            { slug: 'pcos-treatment', label: 'PCOS Treatment' },
        ],
        keywords: ['IUI treatment Kolkata', 'IUI cost Kolkata', 'intrauterine insemination Kolkata'],
    },
    {
        slug: 'icsi-treatment',
        title: 'ICSI — Intracytoplasmic Sperm Injection',
        metaTitle: 'ICSI Treatment in Kolkata',
        metaDescription:
            'Advanced ICSI treatment at Maatritva IVF. Dr. Ankita Mandal offers precision-guided sperm injection for severe male factor infertility. Consult now.',
        heroHeadline: 'ICSI Treatment in Kolkata — Precision Fertility Care',
        heroSubtext:
            'When standard IVF requires an extra level of precision, ICSI ensures each egg receives the best possible chance of fertilisation.',
        overview:
            'ICSI is an advanced form of IVF where a single healthy sperm is directly injected into the centre of a mature egg using a micromanipulator. This technique bypasses the natural barriers to fertilisation and is particularly effective for severe male factor infertility. At Maatritva IVF, our embryologists have extensive experience performing ICSI with consistently strong fertilisation rates.',
        whoIsItFor: [
            'Severe male factor infertility (very low count, motility, or abnormal morphology)',
            'Previous IVF cycles with poor or zero fertilisation',
            'Sperm retrieved surgically (TESA/MESA)',
            'Frozen sperm with limited quantity',
            'Unexplained fertilisation failure',
        ],
        procedureSteps: [
            { step: 1, title: 'Ovarian Stimulation & Egg Retrieval', description: 'Identical to IVF — controlled stimulation followed by ultrasound-guided egg collection.' },
            { step: 2, title: 'Sperm Selection', description: 'An embryologist selects the best individual sperm based on morphology and motility under high-power magnification.' },
            { step: 3, title: 'Microinjection', description: 'The selected sperm is injected directly into the cytoplasm of each mature egg using a fine glass needle.' },
            { step: 4, title: 'Embryo Culture & Transfer', description: 'Fertilised eggs are monitored for development and the best embryo is transferred to the uterus.' },
        ],
        preparation: 'Comprehensive fertility assessment. Semen analysis with detailed morphology report. Hormonal evaluation for the female partner.',
        procedureType: 'Percutaneous',
        followup: 'Same as IVF — post-transfer hormonal support, rest, and follow-up blood test in 14 days.',
        successRateNote:
            'ICSI achieves fertilisation in approximately 70-80% of injected eggs. Combined with expert embryo selection at our centre, this translates to strong clinical pregnancy rates.',
        faqs: [
            {
                question: 'How is ICSI different from regular IVF?',
                answer:
                    'In standard IVF, sperm and eggs are mixed together and fertilisation happens naturally. In ICSI, <b>a single sperm is directly injected</b> into each egg. This is essential when sperm count or motility is too low for natural fertilisation to occur reliably.',
            },
            {
                question: 'Are ICSI babies healthy?',
                answer:
                    'Yes. Large-scale studies spanning over 30 years confirm that <b>children born through ICSI develop normally</b> with no increased risk of birth defects compared to naturally conceived children.',
            },
            {
                question: 'We were told my husband\'s sperm count is almost zero. Is there any hope?',
                answer:
                    'With techniques like <b>surgical sperm retrieval (TESA/MESA)</b> combined with ICSI, even men with extremely low or zero ejaculated sperm can father biological children. Dr. Ankita evaluates each case carefully to recommend the best path.',
            },
        ],
        relatedConditions: [
            { slug: 'low-amh-treatment', label: 'Low AMH Treatment' },
        ],
        keywords: ['ICSI treatment Kolkata', 'ICSI cost Kolkata', 'intracytoplasmic sperm injection'],
    },
    {
        slug: 'laparoscopic-surgery',
        title: 'Laparoscopic Surgery for Infertility',
        metaTitle: 'Laparoscopic Surgery in Kolkata',
        metaDescription:
            'Minimally invasive laparoscopic surgery for infertility by Dr. Ankita Mandal at Maatritva IVF, Kolkata. Treat fibroids, endometriosis, and tubal issues.',
        heroHeadline: 'Laparoscopic Surgery — Minimally Invasive, Maximum Results',
        heroSubtext:
            'Advanced keyhole surgery to diagnose and treat conditions affecting your fertility, with faster recovery and minimal scarring.',
        overview:
            'Laparoscopic (keyhole) surgery allows Dr. Ankita Mandal to both diagnose and treat many conditions that cause infertility — without the need for large incisions. Using a tiny camera and specialised instruments inserted through small cuts in the abdomen, she can address issues like blocked tubes, ovarian cysts, endometriosis, and fibroids with precision and care.',
        whoIsItFor: [
            'Women with blocked or damaged fallopian tubes',
            'Ovarian cysts or polycystic ovaries requiring surgical management',
            'Endometriosis (diagnosis and treatment)',
            'Uterine fibroids affecting the uterine cavity',
            'Diagnostic evaluation when the cause of infertility is unclear',
        ],
        procedureSteps: [
            { step: 1, title: 'Pre-operative Assessment', description: 'Blood work, imaging, and anaesthesia fitness check. Dr. Ankita explains the procedure and answers all your questions.' },
            { step: 2, title: 'Surgery', description: 'Performed under general anaesthesia through 2-3 tiny (5-10mm) incisions. The procedure typically takes 30-90 minutes.' },
            { step: 3, title: 'Recovery', description: 'Most patients go home the same day or the next morning. Full recovery takes 1-2 weeks — far shorter than open surgery.' },
        ],
        preparation: 'Fasting from midnight before surgery. Pre-operative blood tests and ECG. Anaesthesia consultation.',
        procedureType: 'Surgical',
        followup: 'Follow-up visit at 1 week for wound check. Fertility treatment planning can usually begin within 1-2 months after surgery.',
        successRateNote:
            'Laparoscopic surgery can significantly improve natural conception rates or IVF outcomes by correcting underlying structural issues. Dr. Ankita will discuss expected outcomes specific to your diagnosis.',
        faqs: [
            {
                question: 'How soon can I try to conceive after laparoscopic surgery?',
                answer:
                    'Depending on the procedure, most women can <b>resume trying within 1-2 months</b> after surgery. For some conditions like mild adhesions, natural conception rates improve significantly in the first 6 months post-surgery.',
            },
            {
                question: 'Will I have visible scars?',
                answer:
                    'Laparoscopic incisions are only <b>5-10mm</b> — about the size of a pencil tip. They heal to become nearly invisible within a few months. This is one of the key advantages over traditional open surgery.',
            },
            {
                question: 'Is laparoscopy better than directly doing IVF?',
                answer:
                    'It depends on your specific situation. For conditions like <b>hydrosalpinx (fluid-filled tubes) or large endometriomas</b>, surgery before IVF can actually improve IVF success rates. Dr. Ankita evaluates what\'s best for you individually.',
            },
        ],
        relatedConditions: [
            { slug: 'blocked-fallopian-tubes', label: 'Blocked Fallopian Tubes' },
        ],
        keywords: ['laparoscopic surgery Kolkata', 'keyhole surgery infertility', 'laparoscopy for fibroids Kolkata'],
    },
    {
        slug: 'high-risk-pregnancy',
        title: 'High-Risk Pregnancy Management',
        metaTitle: 'High-Risk Pregnancy Care in Kolkata',
        metaDescription:
            'Expert high-risk pregnancy management by Dr. Ankita Mandal at Maatritva IVF, Kolkata. Specialised care for IVF pregnancies, gestational diabetes, and more.',
        heroHeadline: 'High-Risk Pregnancy Care — Expert Monitoring, Peace of Mind',
        heroSubtext:
            'Every pregnancy is precious. Dr. Ankita provides specialised, round-the-clock care for pregnancies that need extra attention.',
        overview:
            'A high-risk pregnancy requires closer monitoring and specialised care to ensure the best outcomes for both mother and baby. Dr. Ankita Mandal has extensive experience managing complex pregnancies — including IVF pregnancies, multiples, advanced maternal age, and conditions like gestational diabetes or pre-eclampsia. At Maatritva IVF, we combine medical expertise with genuine emotional support.',
        whoIsItFor: [
            'IVF or ICSI pregnancies',
            'Women over 35 (advanced maternal age)',
            'Multiple pregnancies (twins or higher)',
            'Pre-existing conditions (diabetes, hypertension, thyroid disorders)',
            'History of recurrent miscarriages',
            'Placenta-related complications',
        ],
        procedureSteps: [
            { step: 1, title: 'Comprehensive Assessment', description: 'Detailed medical history, early pregnancy blood work, and baseline scans to identify risk factors.' },
            { step: 2, title: 'Personalised Care Plan', description: 'Dr. Ankita creates a week-by-week monitoring schedule tailored to your specific risks.' },
            { step: 3, title: 'Regular Monitoring', description: 'More frequent ultrasounds, growth scans, Doppler studies, and blood tests as needed.' },
            { step: 4, title: 'Delivery Planning', description: 'Detailed birth plan considering your medical needs, with coordination with neonatology if required.' },
        ],
        preparation: 'Early booking visit (ideally before 8 weeks). Full panel of blood tests, genetic counselling if indicated.',
        procedureType: 'Noninvasive',
        followup: 'Post-delivery check-up at 6 weeks. Contraception counselling. Follow-up for any pregnancy-related conditions.',
        successRateNote:
            'With proper monitoring and expert management, the vast majority of high-risk pregnancies result in healthy mothers and babies. Early identification and consistent follow-up are key.',
        faqs: [
            {
                question: 'My pregnancy is through IVF. Is it automatically high-risk?',
                answer:
                    'IVF pregnancies are <b>monitored more closely</b> in the early weeks, but many progress just like natural pregnancies. The "high-risk" label ensures you receive extra care throughout — it does not mean something will go wrong.',
            },
            {
                question: 'I am 38 and pregnant. Should I be worried?',
                answer:
                    'Many women over 35 have <b>perfectly healthy pregnancies</b>. Advanced maternal age does warrant additional screening (like early anomaly scans), but with proper care, outcomes are excellent. Dr. Ankita has helped numerous women in this age group.',
            },
            {
                question: 'What happens if I develop gestational diabetes?',
                answer:
                    'Gestational diabetes is <b>very manageable</b> with diet modifications, monitoring, and sometimes medication. Dr. Ankita works closely with you to keep blood sugar levels under control, ensuring a safe pregnancy and delivery.',
            },
        ],
        relatedConditions: [],
        keywords: ['high risk pregnancy Kolkata', 'IVF pregnancy care', 'pregnancy specialist Kolkata'],
    },
    {
        slug: 'egg-freezing',
        title: 'Egg Freezing (Oocyte Cryopreservation)',
        metaTitle: 'Egg Freezing in Kolkata | Oocyte Cryopreservation — Maatritva IVF',
        metaDescription:
            'Preserve your fertility with advanced egg freezing at Maatritva IVF, Kolkata. Dr. Ankita Mandal offers vitrification-based oocyte cryopreservation for women planning ahead.',
        heroHeadline: 'Egg Freezing in Kolkata — Preserve Your Fertility, On Your Terms',
        heroSubtext:
            'Whether you are focused on your career, awaiting the right partner, or facing a medical condition, egg freezing gives you the power to plan motherhood when you are ready.',
        overview:
            'Egg freezing, medically known as oocyte cryopreservation, allows women to preserve their eggs at their current biological age for future use. At Maatritva IVF, we use vitrification — an ultra-rapid freezing technique — which achieves survival rates exceeding 90% upon thawing. Dr. Ankita Mandal guides each patient through the process with care, ensuring your eggs are stored securely for when you decide to start your family. This is increasingly popular among women in their late twenties and thirties who wish to safeguard their reproductive potential while they focus on personal or professional goals.',
        whoIsItFor: [
            'Women who wish to delay motherhood for personal or career reasons',
            'Patients about to undergo chemotherapy or radiation therapy',
            'Women diagnosed with conditions that may affect ovarian reserve (endometriosis, autoimmune disorders)',
            'Women with a family history of early menopause',
            'Those who want reproductive insurance before age-related fertility decline',
        ],
        procedureSteps: [
            { step: 1, title: 'Fertility Assessment', description: 'Hormonal blood tests (AMH, FSH) and an antral follicle count ultrasound to evaluate your ovarian reserve and determine the optimal stimulation protocol.' },
            { step: 2, title: 'Ovarian Stimulation', description: 'Self-administered hormone injections for 10-12 days, with regular ultrasound monitoring to track egg development. Dr. Ankita personalises the dosage based on your response.' },
            { step: 3, title: 'Egg Retrieval', description: 'A minimally invasive, ultrasound-guided procedure under short sedation. Typically takes 15-20 minutes. Most women return to normal activities within 1-2 days.' },
            { step: 4, title: 'Vitrification & Storage', description: 'Mature eggs are flash-frozen using vitrification technology and stored in liquid nitrogen at -196°C. They can remain viable for many years.' },
        ],
        preparation: 'Initial consultation with Dr. Ankita including AMH testing and ultrasound. Lifestyle optimisation advice on nutrition, supplements, and avoiding harmful substances. Pre-procedure blood work.',
        procedureType: 'Percutaneous',
        followup: 'Post-retrieval rest for 1-2 days. Follow-up appointment within a week. Annual storage renewal discussion. When ready to use frozen eggs, they are thawed, fertilised via ICSI, and transferred as embryos.',
        successRateNote:
            'Vitrification has revolutionised egg freezing — survival rates upon thawing exceed 90% at our centre. Younger eggs generally yield better outcomes. Dr. Ankita recommends freezing before age 35 for optimal results, though older patients can also benefit.',
        faqs: [
            {
                question: 'What is the best age to freeze my eggs?',
                answer:
                    'Ideally, <b>before age 35</b>. Egg quality and quantity decline with age, particularly after 35. However, women up to their early 40s can still benefit. Dr. Ankita assesses your individual ovarian reserve to give personalised advice.',
            },
            {
                question: 'How long can frozen eggs be stored?',
                answer:
                    'Frozen eggs can be stored <b>indefinitely</b> in liquid nitrogen at -196°C without any deterioration in quality. Many successful pregnancies have resulted from eggs frozen for over 10 years.',
            },
            {
                question: 'Is the egg freezing procedure painful?',
                answer:
                    'The egg retrieval is done under <b>short intravenous sedation</b> — you will not feel pain during the procedure. Some women experience mild bloating or cramping for a day or two afterward, similar to period discomfort.',
            },
            {
                question: 'How many eggs should I freeze?',
                answer:
                    'This depends on your age and ovarian reserve. As a general guide, <b>15-20 eggs</b> provide a strong chance of at least one future pregnancy. Multiple cycles may be recommended for older patients or those with lower reserves.',
            },
        ],
        relatedConditions: [
            { slug: 'low-amh-treatment', label: 'Low AMH Treatment' },
            { slug: 'premature-ovarian-failure', label: 'Premature Ovarian Failure' },
        ],
        keywords: ['egg freezing Kolkata', 'oocyte cryopreservation Kolkata', 'fertility preservation Kolkata', 'freeze eggs cost Kolkata'],
    },
    {
        slug: 'male-infertility-treatment',
        title: 'Male Infertility Treatment',
        metaTitle: 'Male Infertility Treatment in Kolkata | Expert Diagnosis — Maatritva IVF',
        metaDescription:
            'Comprehensive male infertility diagnosis and treatment at Maatritva IVF, Kolkata. Dr. Ankita Mandal offers semen analysis, hormonal evaluation, ICSI, and surgical sperm retrieval.',
        heroHeadline: 'Male Infertility Treatment in Kolkata — Expert Care for Men',
        heroSubtext:
            'Male factor contributes to nearly 40-50% of infertility cases. At Maatritva IVF, we provide thorough evaluation and effective treatment options for men.',
        overview:
            'Male infertility affects a significant proportion of couples struggling to conceive. At Maatritva IVF, we take a systematic approach — starting with advanced semen analysis and hormonal profiling, followed by targeted treatment. Whether the issue is low sperm count (oligospermia), poor motility (asthenospermia), abnormal morphology (teratospermia), or even zero sperm in the ejaculate (azoospermia), Dr. Ankita Mandal and her team offer a comprehensive range of solutions including lifestyle modification, medical therapy, surgical sperm retrieval, and advanced IVF/ICSI.',
        whoIsItFor: [
            'Men with abnormal semen analysis results',
            'Couples where male factor infertility has been identified',
            'Men with varicocele affecting fertility',
            'Patients with obstructive or non-obstructive azoospermia',
            'Men requiring hormonal evaluation for infertility',
            'Couples where the male partner has had cancer treatment affecting sperm',
        ],
        procedureSteps: [
            { step: 1, title: 'Detailed Semen Analysis', description: 'Comprehensive assessment of sperm count, motility, morphology, and vitality using WHO 2021 criteria. Additional tests like DNA fragmentation may be recommended.' },
            { step: 2, title: 'Hormonal & Physical Evaluation', description: 'Blood tests including FSH, LH, testosterone, and prolactin. Physical examination to check for varicocele or anatomical issues.' },
            { step: 3, title: 'Treatment Plan', description: 'Depending on findings — lifestyle optimisation, medical therapy, surgical correction (varicocelectomy), or ART procedures like IUI, IVF, or ICSI.' },
            { step: 4, title: 'Advanced Interventions', description: 'For severe cases, surgical sperm retrieval (TESA/PESA/micro-TESE) combined with ICSI to achieve fertilisation and pregnancy.' },
        ],
        preparation: 'Abstinence of 2-5 days before semen analysis. Complete medical history including previous surgeries, medications, and lifestyle factors. Partner evaluation is done simultaneously.',
        procedureType: 'Noninvasive',
        followup: 'Repeat semen analysis after 3 months of treatment to assess improvement. Ongoing fertility counselling for the couple. If ART is needed, seamless transition to IVF/ICSI cycle planning.',
        successRateNote:
            'With modern techniques including ICSI and surgical sperm retrieval, even severe male infertility can be successfully treated. At Maatritva IVF, we have helped many couples where the male partner had extremely challenging diagnoses, including non-obstructive azoospermia.',
        faqs: [
            {
                question: 'Can male infertility be cured?',
                answer:
                    'Many causes of male infertility are <b>treatable or manageable</b>. Lifestyle changes, hormonal therapy, and surgical correction can improve sperm parameters. Even when natural improvement is not possible, ICSI allows pregnancy with very few sperm.',
            },
            {
                question: 'My semen analysis shows zero sperm. Does that mean I cannot have a biological child?',
                answer:
                    'Not necessarily. <b>Azoospermia</b> can be obstructive (blocked ducts) or non-obstructive (production issue). Surgical sperm retrieval techniques like TESA, PESA, or micro-TESE can often find sperm directly from the testes for use with ICSI.',
            },
            {
                question: 'Does lifestyle affect male fertility?',
                answer:
                    'Yes, significantly. <b>Smoking, excessive alcohol, obesity, and prolonged heat exposure</b> (hot baths, laptops on lap) can all impair sperm quality. Dr. Ankita provides detailed lifestyle counselling as part of the treatment plan.',
            },
            {
                question: 'How long does it take for lifestyle changes to improve sperm?',
                answer:
                    'Sperm production takes about <b>74 days</b>, so improvements from lifestyle changes or medication typically become visible in semen analysis after 3 months of consistent effort.',
            },
        ],
        relatedConditions: [
            { slug: 'male-infertility', label: 'Male Infertility (Causes & Diagnosis)' },
            { slug: 'azoospermia', label: 'Azoospermia' },
        ],
        keywords: ['male infertility treatment Kolkata', 'male fertility specialist Kolkata', 'low sperm count treatment Kolkata', 'semen analysis Kolkata'],
    },
    {
        slug: 'fertility-preservation',
        title: 'Fertility Preservation',
        metaTitle: 'Fertility Preservation in Kolkata | Cancer & Medical Fertility — Maatritva IVF',
        metaDescription:
            'Protect your future fertility before cancer treatment or surgery. Maatritva IVF, Kolkata offers egg, sperm, and embryo freezing with expert guidance by Dr. Ankita Mandal.',
        heroHeadline: 'Fertility Preservation in Kolkata — Safeguard Your Future Family',
        heroSubtext:
            'Facing cancer treatment, surgery, or a medical condition that threatens fertility? We help you preserve your reproductive options before it is too late.',
        overview:
            'Fertility preservation refers to the process of saving eggs, sperm, or embryos before undergoing medical treatments that may damage reproductive function — such as chemotherapy, radiation therapy, or certain surgeries. At Maatritva IVF, we work urgently and compassionately with oncologists and surgeons to ensure patients can freeze their gametes before treatment begins. Dr. Ankita Mandal understands the time-sensitivity of these situations and prioritises rapid consultation and treatment initiation.',
        whoIsItFor: [
            'Cancer patients about to start chemotherapy or radiation',
            'Women requiring ovarian surgery that may reduce egg reserve',
            'Patients with autoimmune conditions requiring gonadotoxic therapy',
            'Transgender individuals before hormone therapy',
            'Anyone facing medical treatment that may impair future fertility',
        ],
        procedureSteps: [
            { step: 1, title: 'Urgent Consultation', description: 'Rapid assessment of fertility status and timeline coordination with your oncologist or surgeon. We can initiate the process within days.' },
            { step: 2, title: 'Ovarian Stimulation (Women)', description: 'A modified fast-track stimulation protocol of 10-14 days. Random-start protocols available so you do not have to wait for your next menstrual cycle.' },
            { step: 3, title: 'Egg/Sperm/Embryo Collection', description: 'Egg retrieval for women, semen collection for men. If preferred and a partner is available, embryos can be created and frozen.' },
            { step: 4, title: 'Cryopreservation', description: 'Vitrification of eggs or embryos, or standard freezing for sperm. Secure long-term storage in our certified cryo-bank.' },
        ],
        preparation: 'Rapid hormonal blood tests and ultrasound. Coordination with referring specialist. Psychological counselling support available.',
        procedureType: 'Percutaneous',
        followup: 'Post-retrieval recovery. Annual storage updates. When you are ready to conceive after completing treatment, we thaw and use your preserved samples for IVF/ICSI.',
        successRateNote:
            'Modern vitrification techniques have dramatically improved outcomes. Eggs frozen through vitrification have survival rates above 90%. The younger you are at the time of freezing, the better the future outcomes will be.',
        faqs: [
            {
                question: 'How quickly can I start the fertility preservation process?',
                answer:
                    'We can begin <b>within 2-3 days</b> of your initial consultation. Random-start stimulation protocols mean you do not need to wait for a specific time in your menstrual cycle. Time is critical, and we treat it as such.',
            },
            {
                question: 'Will fertility preservation delay my cancer treatment?',
                answer:
                    'In most cases, <b>egg freezing takes 10-14 days</b> and does not significantly delay cancer treatment. We coordinate closely with your oncologist to ensure the timeline works for both fertility and cancer care.',
            },
            {
                question: 'Is freezing eggs or embryos better?',
                answer:
                    'If you have a partner, <b>embryo freezing</b> has slightly higher success rates historically. However, modern egg vitrification results are now very comparable. Single women and those without partners typically freeze eggs.',
            },
        ],
        relatedConditions: [
            { slug: 'low-amh-treatment', label: 'Low AMH Treatment' },
            { slug: 'premature-ovarian-failure', label: 'Premature Ovarian Failure' },
        ],
        keywords: ['fertility preservation Kolkata', 'cancer fertility preservation', 'freeze eggs before chemo Kolkata', 'oncofertility Kolkata'],
    },
    {
        slug: 'donor-egg-ivf',
        title: 'Donor Egg IVF Programme',
        metaTitle: 'Donor Egg IVF in Kolkata | Egg Donor Programme — Maatritva IVF',
        metaDescription:
            'Donor egg IVF at Maatritva IVF, Kolkata. Ethical, ICMR-compliant egg donation programme with high success rates. Confidential and compassionate care by Dr. Ankita Mandal.',
        heroHeadline: 'Donor Egg IVF in Kolkata — A Proven Path to Parenthood',
        heroSubtext:
            'When using your own eggs is not an option, our ICMR-compliant donor egg programme offers an excellent chance of becoming a mother.',
        overview:
            'Donor egg IVF involves using eggs from a carefully screened, healthy, young donor to create embryos that are transferred into the recipient mother\'s uterus. At Maatritva IVF, our donor programme follows strict ICMR (Indian Council of Medical Research) guidelines. All donors undergo thorough medical, genetic, and psychological screening. Dr. Ankita Mandal personally oversees donor selection and matching to ensure the best possible outcomes. This option is ideal for women whose own eggs cannot achieve pregnancy due to age, premature ovarian failure, or genetic concerns.',
        whoIsItFor: [
            'Women with premature ovarian failure or very low ovarian reserve',
            'Women over 40-42 with repeated IVF failure using own eggs',
            'Patients with genetic conditions they wish to avoid passing on',
            'Women who have undergone bilateral oophorectomy (ovary removal)',
            'Repeated IVF failure with poor egg quality despite optimal protocols',
        ],
        procedureSteps: [
            { step: 1, title: 'Consultation & Matching', description: 'Detailed discussion about the donor programme, ICMR guidelines, and matching criteria. Physical characteristics, blood group, and health history are matched.' },
            { step: 2, title: 'Donor Screening & Stimulation', description: 'The selected donor undergoes comprehensive medical, genetic, and psychological screening, followed by ovarian stimulation and egg retrieval.' },
            { step: 3, title: 'Recipient Preparation', description: 'The recipient mother\'s uterine lining is prepared with hormonal medications to create the optimal environment for embryo implantation.' },
            { step: 4, title: 'Fertilisation & Transfer', description: 'Donor eggs are fertilised with the male partner\'s sperm (or donor sperm if needed) via IVF/ICSI. The best embryo is transferred to the recipient.' },
        ],
        preparation: 'Recipient undergoes uterine evaluation (hysteroscopy if needed), hormonal blood work, and infectious disease screening. Psychological counselling is provided. Legal consent and ICMR documentation completed.',
        procedureType: 'Percutaneous',
        followup: 'Pregnancy test 14 days after transfer. If positive, continued hormonal support until 10-12 weeks. Regular pregnancy monitoring as with any IVF pregnancy.',
        successRateNote:
            'Donor egg IVF has some of the highest success rates in assisted reproduction — often exceeding 50-60% per cycle — because eggs come from young, healthy donors. Age of the recipient is less critical since it is the egg quality that matters most.',
        faqs: [
            {
                question: 'Will the baby look like me if I use donor eggs?',
                answer:
                    'We carefully <b>match donors based on physical characteristics</b> including height, build, complexion, and blood group. Additionally, recent research shows that the uterine environment can influence gene expression (epigenetics), meaning your body can affect how the baby develops.',
            },
            {
                question: 'Is donor egg IVF legal in India?',
                answer:
                    'Yes, donor egg IVF is <b>legal and regulated</b> by the ICMR and the ART (Regulation) Act, 2021. At Maatritva IVF, we strictly follow all guidelines. Donation is anonymous and confidential.',
            },
            {
                question: 'How are egg donors screened?',
                answer:
                    'Donors undergo <b>extensive screening</b> including medical history, physical examination, hormonal tests, genetic screening, karyotyping, infectious disease testing, and psychological evaluation. Only donors meeting all criteria are accepted.',
            },
        ],
        relatedConditions: [
            { slug: 'premature-ovarian-failure', label: 'Premature Ovarian Failure' },
            { slug: 'low-amh-treatment', label: 'Low AMH Treatment' },
            { slug: 'age-related-infertility', label: 'Age-Related Infertility' },
        ],
        keywords: ['donor egg IVF Kolkata', 'egg donor programme Kolkata', 'IVF with donor eggs cost Kolkata', 'egg donation Kolkata'],
    },
    {
        slug: 'embryo-freezing',
        title: 'Embryo Freezing (Embryo Cryopreservation)',
        metaTitle: 'Embryo Freezing in Kolkata | Embryo Cryopreservation — Maatritva IVF',
        metaDescription:
            'Advanced embryo freezing and cryopreservation at Maatritva IVF, Kolkata. Preserve surplus IVF embryos for future use with vitrification technology.',
        heroHeadline: 'Embryo Freezing in Kolkata — Preserve Your Best Embryos',
        heroSubtext:
            'Surplus embryos from your IVF cycle can be safely frozen for future pregnancies, reducing cost and stress of additional stimulation cycles.',
        overview:
            'Embryo cryopreservation allows couples to freeze surplus high-quality embryos from an IVF cycle for future use. At Maatritva IVF, we use vitrification — a rapid freezing technique that achieves survival rates above 95% upon thawing. This means you can attempt future pregnancies without repeating the entire stimulation and retrieval process. Frozen embryo transfers (FET) often achieve success rates comparable to or even better than fresh transfers, as the uterine environment can be optimally prepared without the effects of stimulation hormones.',
        whoIsItFor: [
            'Couples with surplus embryos after a fresh IVF cycle',
            'Patients who need to delay transfer due to medical reasons (OHSS risk, uterine issues)',
            'Couples who want to attempt a second child using remaining embryos',
            'Patients undergoing PGD/PGS where biopsy results are awaited',
            'Those who wish to preserve embryos for future family planning',
        ],
        procedureSteps: [
            { step: 1, title: 'Embryo Assessment', description: 'After IVF/ICSI, the embryology team assesses all embryos for quality. Those suitable for freezing are identified based on strict grading criteria.' },
            { step: 2, title: 'Vitrification', description: 'Selected embryos are flash-frozen using vitrification, preventing ice crystal formation and preserving cellular integrity. Each embryo is individually labelled and catalogued.' },
            { step: 3, title: 'Secure Storage', description: 'Embryos are stored in liquid nitrogen at -196°C in our certified cryo-bank with 24/7 monitoring and redundant safety systems.' },
            { step: 4, title: 'Future Thawing & Transfer', description: 'When you are ready, embryos are carefully thawed, assessed for viability, and transferred in a prepared FET cycle.' },
        ],
        preparation: 'No separate preparation needed as embryo freezing follows naturally from the IVF cycle. Consent for cryopreservation and duration of storage is documented.',
        procedureType: 'Noninvasive',
        followup: 'Annual storage renewal and communication. When ready for FET, a simple consultation to plan the transfer cycle. No additional egg retrieval needed.',
        successRateNote:
            'Vitrified embryos at our centre have survival rates exceeding 95%. Frozen embryo transfer success rates are now equivalent to — and in some protocols, better than — fresh embryo transfers.',
        faqs: [
            {
                question: 'How long can embryos remain frozen?',
                answer:
                    'Embryos can be stored <b>indefinitely</b> in liquid nitrogen without any deterioration. Healthy babies have been born from embryos frozen for over 25 years.',
            },
            {
                question: 'Are frozen embryo babies as healthy as fresh transfer babies?',
                answer:
                    'Yes. Research consistently shows that children born from frozen embryo transfers are <b>equally healthy</b>. Some studies even suggest slightly better outcomes due to the more natural uterine environment during FET cycles.',
            },
            {
                question: 'What happens if I no longer need my frozen embryos?',
                answer:
                    'You have several options: <b>continue storage, donate to another couple (with ICMR consent), donate for research, or request disposal</b>. Dr. Ankita discusses all options with sensitivity during counselling.',
            },
        ],
        relatedConditions: [],
        keywords: ['embryo freezing Kolkata', 'embryo cryopreservation Kolkata', 'freeze embryos IVF Kolkata', 'vitrification Kolkata'],
    },
    {
        slug: 'testicular-sperm-extraction',
        title: 'Testicular Sperm Extraction (TESA / PESA)',
        metaTitle: 'TESA & PESA in Kolkata | Surgical Sperm Retrieval — Maatritva IVF',
        metaDescription:
            'Surgical sperm retrieval (TESA, PESA, micro-TESE) at Maatritva IVF, Kolkata. Advanced treatment for azoospermia and severe male infertility by Dr. Ankita Mandal\'s team.',
        heroHeadline: 'Surgical Sperm Retrieval in Kolkata — TESA, PESA & Micro-TESE',
        heroSubtext:
            'Zero sperm in the ejaculate does not mean zero hope. Our surgical retrieval techniques combined with ICSI have helped many men father biological children.',
        overview:
            'Testicular Sperm Extraction (TESA) and Percutaneous Epididymal Sperm Aspiration (PESA) are minimally invasive procedures to retrieve sperm directly from the testes or epididymis when no sperm is found in the ejaculate (azoospermia). At Maatritva IVF, these retrieved sperm are then used with ICSI to fertilise eggs and achieve pregnancy. For non-obstructive azoospermia, micro-TESE (microsurgical testicular sperm extraction) offers the highest sperm retrieval rates. Dr. Ankita Mandal coordinates the male and female treatment cycles to ensure optimal timing.',
        whoIsItFor: [
            'Men with obstructive azoospermia (blocked ducts, post-vasectomy)',
            'Men with non-obstructive azoospermia (production failure)',
            'Patients with ejaculatory dysfunction',
            'Men with failed vasectomy reversal',
            'Cases where sperm cannot be obtained through ejaculation',
        ],
        procedureSteps: [
            { step: 1, title: 'Evaluation', description: 'Comprehensive male fertility assessment including hormonal profile (FSH, LH, testosterone) and genetic testing (karyotype, Y-chromosome microdeletion) to determine the type of azoospermia.' },
            { step: 2, title: 'Procedure Selection', description: 'TESA for simpler cases, PESA for epididymal obstruction, or micro-TESE for non-obstructive azoospermia. The choice depends on your specific diagnosis.' },
            { step: 3, title: 'Sperm Retrieval', description: 'The procedure is performed under local or short general anaesthesia. Retrieved tissue is immediately examined by the embryologist for viable sperm.' },
            { step: 4, title: 'ICSI & Fertilisation', description: 'Retrieved sperm are used immediately for ICSI (if coordinated with the female partner\'s egg retrieval) or frozen for future use.' },
        ],
        preparation: 'Pre-operative blood work and anaesthesia fitness. Genetic counselling if Y-chromosome microdeletions are suspected. Coordination with the female partner\'s IVF cycle timeline.',
        procedureType: 'Surgical',
        followup: 'Post-operative rest for 2-3 days. Pain management with mild analgesics. Follow-up at 1 week. If sperm were found and frozen, IVF/ICSI cycle can be planned subsequently.',
        successRateNote:
            'Sperm retrieval rates are approximately 50-60% for non-obstructive azoospermia with micro-TESE, and over 90% for obstructive azoospermia. When combined with ICSI, fertilisation and pregnancy rates are comparable to standard ICSI cycles.',
        faqs: [
            {
                question: 'Is TESA painful?',
                answer:
                    'TESA is typically performed under <b>local anaesthesia with sedation</b>. You may feel some pressure but no significant pain. Post-procedure discomfort is mild and managed with standard painkillers for 2-3 days.',
            },
            {
                question: 'What if no sperm are found during the procedure?',
                answer:
                    'While this is possible in non-obstructive azoospermia, <b>micro-TESE maximises the chance</b> of finding even small pockets of sperm production. If no sperm are found, Dr. Ankita will discuss alternative options including donor sperm.',
            },
            {
                question: 'Can retrieved sperm be frozen for future cycles?',
                answer:
                    'Yes. <b>Retrieved sperm can be cryopreserved</b> for future IVF/ICSI cycles, so you may not need to undergo the surgical procedure again. We recommend freezing whenever possible.',
            },
        ],
        relatedConditions: [
            { slug: 'azoospermia', label: 'Azoospermia' },
            { slug: 'male-infertility', label: 'Male Infertility' },
        ],
        keywords: ['TESA Kolkata', 'PESA treatment Kolkata', 'surgical sperm retrieval Kolkata', 'micro TESE Kolkata', 'azoospermia treatment Kolkata'],
    },
    {
        slug: 'hysteroscopy',
        title: 'Hysteroscopy — Diagnostic & Operative',
        metaTitle: 'Hysteroscopy in Kolkata | Uterine Evaluation — Maatritva IVF',
        metaDescription:
            'Advanced diagnostic and operative hysteroscopy at Maatritva IVF, Kolkata. Dr. Ankita Mandal evaluates and treats uterine conditions affecting fertility.',
        heroHeadline: 'Hysteroscopy in Kolkata — See Inside, Treat Precisely',
        heroSubtext:
            'A direct look inside your uterus to diagnose and treat conditions that may be silently affecting your fertility or causing recurrent miscarriage.',
        overview:
            'Hysteroscopy is a procedure where a thin, lighted telescope (hysteroscope) is inserted through the cervix to examine the inside of the uterus. It is the gold standard for evaluating and treating intrauterine conditions. At Maatritva IVF, Dr. Ankita Mandal performs both diagnostic and operative hysteroscopy as an integral part of the fertility work-up. Conditions like uterine polyps, submucous fibroids, intrauterine adhesions (Asherman syndrome), and uterine septum can be identified and often treated in a single sitting — improving both natural conception and IVF success rates.',
        whoIsItFor: [
            'Women with unexplained infertility where uterine factors are suspected',
            'Patients with recurrent miscarriage or implantation failure',
            'Women with abnormal uterine bleeding',
            'Pre-IVF uterine cavity assessment',
            'Suspected uterine polyps, fibroids, septum, or adhesions on ultrasound',
        ],
        procedureSteps: [
            { step: 1, title: 'Pre-Procedure Evaluation', description: 'Ultrasound and medical history review. The procedure is typically scheduled in the first half of the menstrual cycle for optimal visualisation.' },
            { step: 2, title: 'Diagnostic Hysteroscopy', description: 'A thin hysteroscope is gently inserted through the cervix. The uterine cavity is examined on a monitor in real-time. This takes 5-10 minutes.' },
            { step: 3, title: 'Operative Intervention (if needed)', description: 'If abnormalities are found — polyps, adhesions, septum, or small fibroids — they can often be treated during the same procedure using specialised instruments.' },
            { step: 4, title: 'Recovery', description: 'Most patients go home within a few hours. Normal activities can usually be resumed the next day.' },
        ],
        preparation: 'Routine blood work. Cervical preparation may be done with a mild medication the evening before. Fasting for 6 hours if anaesthesia is planned.',
        procedureType: 'Noninvasive',
        followup: 'Follow-up appointment in 1 week to discuss findings and plan next steps. Fertility treatment can typically resume in the next menstrual cycle.',
        successRateNote:
            'Correcting intrauterine abnormalities through hysteroscopy has been shown to improve IVF implantation rates by 30-50%. It is a critical step in the fertility evaluation that should not be skipped.',
        faqs: [
            {
                question: 'Is hysteroscopy painful?',
                answer:
                    'Diagnostic hysteroscopy is usually done with <b>minimal discomfort</b> — similar to a smear test. Operative procedures may require short anaesthesia. Most women describe only mild cramping afterward.',
            },
            {
                question: 'Do I need hysteroscopy before IVF?',
                answer:
                    'Many fertility specialists, including Dr. Ankita, recommend <b>a hysteroscopy before the first IVF cycle</b> to ensure the uterine cavity is optimal for implantation. Studies show it can improve IVF success rates.',
            },
            {
                question: 'Can polyps or fibroids be removed during hysteroscopy?',
                answer:
                    'Yes. <b>Small to medium polyps and submucous fibroids</b> can be removed during operative hysteroscopy in a single sitting. This is one of the major advantages — diagnosis and treatment happen together.',
            },
        ],
        relatedConditions: [
            { slug: 'uterine-fibroids', label: 'Uterine Fibroids' },
            { slug: 'recurrent-miscarriage', label: 'Recurrent Miscarriage' },
        ],
        keywords: ['hysteroscopy Kolkata', 'diagnostic hysteroscopy Kolkata', 'operative hysteroscopy Kolkata', 'uterine polyp removal Kolkata'],
    },
    {
        slug: 'blastocyst-transfer',
        title: 'Blastocyst Culture & Transfer',
        metaTitle: 'Blastocyst Transfer in Kolkata | Day 5 Embryo Transfer — Maatritva IVF',
        metaDescription:
            'Advanced blastocyst culture and Day 5 embryo transfer at Maatritva IVF, Kolkata. Higher implantation rates through extended embryo culture by Dr. Ankita Mandal\'s team.',
        heroHeadline: 'Blastocyst Transfer in Kolkata — Selecting the Strongest Embryo',
        heroSubtext:
            'By culturing embryos to the blastocyst stage (Day 5), we can select the most viable embryo for transfer — significantly improving your chances of success.',
        overview:
            'Blastocyst culture involves growing embryos in the laboratory for 5 days instead of the traditional 3 days. By Day 5, the embryo has developed into a blastocyst — a more advanced structure with over 100 cells. This extended culture period allows natural selection to occur: only the strongest embryos reach the blastocyst stage. At Maatritva IVF, our state-of-the-art incubators and culture media provide the ideal environment for blastocyst development. This technique enables better embryo selection, higher implantation rates, and reduces the need for multiple embryo transfers.',
        whoIsItFor: [
            'Patients undergoing their first IVF/ICSI cycle with multiple good-quality embryos',
            'Couples who want single embryo transfer to avoid twin pregnancy risks',
            'Patients with previous failed Day 3 transfers',
            'Cases where preimplantation genetic testing (PGT) is planned',
            'Patients with good prognosis who want to maximise per-transfer success rates',
        ],
        procedureSteps: [
            { step: 1, title: 'Standard IVF/ICSI', description: 'Ovarian stimulation, egg retrieval, and fertilisation proceed as in a standard IVF cycle.' },
            { step: 2, title: 'Extended Culture', description: 'Embryos are cultured in a carefully controlled environment for 5 days. Our embryologists monitor development daily using time-lapse technology.' },
            { step: 3, title: 'Blastocyst Selection', description: 'On Day 5, the embryologist grades each blastocyst based on inner cell mass, trophectoderm quality, and expansion — selecting the best candidate for transfer.' },
            { step: 4, title: 'Transfer', description: 'A single top-quality blastocyst is transferred under ultrasound guidance. Surplus blastocysts are vitrified for future use.' },
        ],
        preparation: 'Same as standard IVF. No additional preparation needed from the patient — the extended culture is managed entirely by the embryology team.',
        procedureType: 'Noninvasive',
        followup: 'Post-transfer rest. Hormonal support medications. Pregnancy blood test at 14 days. If surplus blastocysts are frozen, they remain available for future FET cycles.',
        successRateNote:
            'Blastocyst transfer achieves implantation rates of approximately 50-60% per embryo — significantly higher than Day 3 transfers. This allows us to transfer a single embryo confidently, reducing twin pregnancy risks while maintaining high success rates.',
        faqs: [
            {
                question: 'What is the advantage of Day 5 transfer over Day 3?',
                answer:
                    'Day 5 blastocysts have <b>higher implantation rates</b> (50-60% vs 25-30% for Day 3). Extended culture also allows natural embryo selection — those that reach blastocyst stage are inherently stronger.',
            },
            {
                question: 'What if no embryos reach the blastocyst stage?',
                answer:
                    'While uncommon with good-quality eggs, it can happen. However, <b>embryos that fail to reach blastocyst</b> stage would likely not have implanted even if transferred on Day 3. This information is itself valuable for planning future cycles.',
            },
            {
                question: 'Does blastocyst transfer increase the chance of twins?',
                answer:
                    'Actually, it reduces it. Because blastocyst success rates are higher, we can confidently transfer <b>a single embryo</b> — significantly reducing the risk of twins while maintaining excellent pregnancy rates.',
            },
        ],
        relatedConditions: [
            { slug: 'low-amh-treatment', label: 'Low AMH Treatment' },
            { slug: 'unexplained-infertility', label: 'Unexplained Infertility' },
        ],
        keywords: ['blastocyst transfer Kolkata', 'Day 5 embryo transfer Kolkata', 'blastocyst culture IVF Kolkata', 'extended embryo culture Kolkata'],
    },
    {
        slug: 'frozen-embryo-transfer',
        title: 'Frozen Embryo Transfer (FET)',
        metaTitle: 'Frozen Embryo Transfer in Kolkata | FET Cycle — Maatritva IVF',
        metaDescription:
            'Frozen Embryo Transfer (FET) at Maatritva IVF, Kolkata. Use your previously frozen embryos for a new pregnancy attempt with high success rates and minimal intervention.',
        heroHeadline: 'Frozen Embryo Transfer in Kolkata — Your Embryos, Your Timeline',
        heroSubtext:
            'FET allows you to use previously frozen embryos for a new pregnancy attempt — without repeating ovarian stimulation. Simpler, gentler, and highly effective.',
        overview:
            'Frozen Embryo Transfer (FET) is a procedure where previously vitrified embryos are carefully thawed and transferred into a prepared uterus. At Maatritva IVF, FET cycles are gentler on your body compared to fresh IVF transfers because there is no need for ovarian stimulation or egg retrieval. Your uterine lining is prepared using hormonal medications (or sometimes tracked in a natural cycle), and once the lining reaches optimal thickness and pattern, the embryo is transferred. Current evidence suggests FET success rates are comparable to — and in many cases better than — fresh cycle transfers.',
        whoIsItFor: [
            'Patients with frozen embryos from a previous IVF cycle',
            'Women who experienced OHSS risk during fresh cycle and had embryos frozen',
            'Couples attempting a sibling using remaining frozen embryos',
            'Patients whose fresh transfer was unsuccessful but have remaining embryos',
            'Those who froze embryos prior to medical treatment (cancer, surgery)',
        ],
        procedureSteps: [
            { step: 1, title: 'Endometrial Preparation', description: 'Hormonal medications (estrogen tablets/patches) are used to build up the uterine lining. Serial ultrasounds monitor thickness and pattern. Some patients may opt for a natural or modified natural cycle.' },
            { step: 2, title: 'Progesterone Initiation', description: 'Once the lining is optimal (≥7mm, trilaminar pattern), progesterone support is added to prepare for implantation.' },
            { step: 3, title: 'Embryo Thawing', description: 'On the scheduled day, the embryology team carefully thaws the vitrified embryo. Survival and quality are assessed before transfer.' },
            { step: 4, title: 'Transfer', description: 'The embryo is gently placed into the uterus using a thin catheter under ultrasound guidance. The procedure takes 5-10 minutes and is painless.' },
        ],
        preparation: 'Pre-cycle consultation with Dr. Ankita to plan the FET protocol. Baseline ultrasound and blood work. Some patients may need a hysteroscopy before FET to ensure the cavity is clear.',
        procedureType: 'Noninvasive',
        followup: 'Continued progesterone and estrogen support. Pregnancy blood test (beta-hCG) at 14 days. If positive, hormone support continues until 10-12 weeks with regular monitoring.',
        successRateNote:
            'FET success rates at our centre are comparable to fresh transfers. Vitrified embryos have over 95% survival rates upon thawing. Many reproductive specialists now prefer a "freeze-all" strategy for certain patients, as the more prepared uterine environment can improve implantation.',
        faqs: [
            {
                question: 'Is FET less stressful than a fresh IVF cycle?',
                answer:
                    'Yes, significantly. <b>No injections for ovarian stimulation, no egg retrieval, and fewer clinic visits</b>. FET involves just a few weeks of oral/vaginal medications and monitoring scans.',
            },
            {
                question: 'Do frozen embryos have the same success rate as fresh ones?',
                answer:
                    'Yes, and sometimes better. <b>Modern vitrification</b> preserves embryos perfectly, and the uterine environment during FET is often more receptive because it is not affected by stimulation hormones.',
            },
            {
                question: 'How many FET cycles can I do with one batch of frozen embryos?',
                answer:
                    'This depends on <b>how many embryos were frozen</b>. Each cycle typically uses one embryo. If you have multiple frozen embryos, you can attempt several FET cycles without additional stimulation.',
            },
        ],
        relatedConditions: [],
        keywords: ['frozen embryo transfer Kolkata', 'FET treatment Kolkata', 'FET cycle cost Kolkata', 'frozen IVF transfer Kolkata'],
    },
    {
        slug: 'ivf-with-pgd-pgs',
        title: 'IVF with PGD / PGS (Preimplantation Genetic Testing)',
        metaTitle: 'PGD PGS Testing in Kolkata | Genetic Screening IVF — Maatritva IVF',
        metaDescription:
            'Preimplantation Genetic Testing (PGT-A / PGT-M) with IVF at Maatritva IVF, Kolkata. Screen embryos for genetic disorders before transfer. Expert guidance by Dr. Ankita Mandal.',
        heroHeadline: 'IVF with Genetic Testing (PGD/PGS) in Kolkata — Precision & Peace of Mind',
        heroSubtext:
            'Screen embryos for chromosomal abnormalities or specific genetic disorders before transfer, increasing the chances of a healthy pregnancy.',
        overview:
            'Preimplantation Genetic Testing (PGT) allows screening of embryos created through IVF for genetic or chromosomal abnormalities before they are transferred to the uterus. PGT-A (formerly PGS) screens for aneuploidy (abnormal chromosome number), while PGT-M (formerly PGD) tests for specific inherited genetic disorders like thalassaemia, sickle cell disease, or cystic fibrosis. At Maatritva IVF, embryos are biopsied at the blastocyst stage, and the biopsy is sent to a certified genetics laboratory for analysis. Only genetically normal embryos are selected for transfer, significantly reducing the risk of miscarriage and genetic conditions.',
        whoIsItFor: [
            'Couples with a known genetic disorder in the family',
            'Women over 37-38 with higher risk of chromosomal abnormalities',
            'Couples with recurrent unexplained miscarriages',
            'Previous IVF failures despite good embryo quality',
            'Carriers of conditions like thalassaemia, sickle cell disease, or muscular dystrophy',
            'Couples who want to maximise the chance of a healthy pregnancy per transfer',
        ],
        procedureSteps: [
            { step: 1, title: 'IVF/ICSI Cycle', description: 'Standard ovarian stimulation, egg retrieval, and fertilisation. Embryos are cultured to the blastocyst stage (Day 5-6).' },
            { step: 2, title: 'Embryo Biopsy', description: 'A few trophectoderm cells (outer layer) are carefully removed from each blastocyst. This does not harm the embryo\'s development potential.' },
            { step: 3, title: 'Genetic Analysis', description: 'Biopsied cells are sent to a certified genetics lab for analysis. Results typically take 7-14 days. Embryos are vitrified while awaiting results.' },
            { step: 4, title: 'Informed Transfer', description: 'Once results are available, Dr. Ankita discusses findings. Only chromosomally normal (euploid) or genetically unaffected embryos are selected for transfer in a subsequent FET cycle.' },
        ],
        preparation: 'Genetic counselling for the couple. Carrier testing for both partners. Detailed consent process explaining the testing, limitations, and possible outcomes. Standard IVF cycle preparation.',
        procedureType: 'Percutaneous',
        followup: 'Genetic counselling on results. Planned FET cycle for transfer of suitable embryos. Ongoing pregnancy monitoring with additional genetic screening options if desired.',
        successRateNote:
            'PGT significantly reduces miscarriage rates and increases the implantation rate per transfer, because only chromosomally normal embryos are transferred. However, it requires sufficient embryos to reach blastocyst stage for biopsy. Dr. Ankita carefully assesses whether PGT is appropriate for each individual case.',
        faqs: [
            {
                question: 'Does the embryo biopsy harm the embryo?',
                answer:
                    'No. The biopsy removes <b>only a few cells from the trophectoderm</b> (outer layer, which becomes the placenta) — not the inner cell mass (which becomes the baby). Studies show no increased risk of birth defects from the biopsy itself.',
            },
            {
                question: 'Can PGT guarantee a healthy baby?',
                answer:
                    'PGT <b>significantly reduces the risk</b> of specific genetic conditions and chromosomal abnormalities, but it cannot test for every possible condition. Standard prenatal screening is still recommended during pregnancy.',
            },
            {
                question: 'Is PGT recommended for everyone doing IVF?',
                answer:
                    'Not always. PGT is most beneficial for <b>women over 37, couples with genetic disorders, and those with recurrent miscarriage</b>. For young patients with good prognosis, it may not add significant value. Dr. Ankita advises based on your specific situation.',
            },
        ],
        relatedConditions: [
            { slug: 'recurrent-miscarriage', label: 'Recurrent Miscarriage' },
            { slug: 'age-related-infertility', label: 'Age-Related Infertility' },
        ],
        keywords: ['PGD PGS testing Kolkata', 'preimplantation genetic testing Kolkata', 'genetic screening IVF Kolkata', 'PGT-A PGT-M Kolkata'],
    },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return servicesData.map((s) => s.slug);
}
