export interface LocationData {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubtext: string;
    areaDescription: string;
    landmarks: string[];
    directions: { mode: string; detail: string }[];
    whyVisitUs: string[];
    testimonial: { text: string; name: string; area: string };
    faqs: { question: string; answer: string }[];
    mapEmbedPlaceholder: string;
    keywords: string[];
}

export const locationsData: LocationData[] = [
    {
        slug: 'salt-lake',
        title: 'IVF Centre in Salt Lake, Kolkata',
        metaTitle: 'IVF Centre Near Salt Lake Kolkata',
        metaDescription:
            'Looking for the best IVF centre near Salt Lake? Maatritva IVF by Dr. Ankita Mandal offers expert fertility care. Easy access from Sector V and City Centre.',
        heroHeadline: 'Expert IVF Care Near Salt Lake, Sector V',
        heroSubtext:
            'Conveniently located for families in Salt Lake, Sector V, and the IT corridor. Compassionate fertility care by Dr. Ankita Mandal.',
        areaDescription:
            'Salt Lake City (Bidhannagar) is one of Kolkata\'s most planned residential and commercial areas, home to the thriving IT hub in Sector V. Many young professionals and families in Salt Lake seek fertility care that fits their busy schedules. Maatritva IVF is easily accessible from Salt Lake, offering flexible appointment timings and a comfortable, private clinic environment.',
        landmarks: [
            'Near Technopolis, Sector V',
            'Close to City Centre Salt Lake',
            'Short drive from Nicco Park',
            'Accessible via Salt Lake Bypass',
        ],
        directions: [
            { mode: 'By Metro', detail: 'Nearest station: Karunamoyee (Green Line). 15-minute auto ride to clinic.' },
            { mode: 'By Car', detail: 'Via Salt Lake Bypass — 20-25 minutes from Sector V during off-peak hours.' },
            { mode: 'By Bus', detail: 'Multiple buses from Salt Lake connect to New Town. Alight at New Town bus stand.' },
        ],
        whyVisitUs: [
            'Personalised treatment plans by Dr. Ankita Mandal',
            'State-of-the-art IVF lab with time-lapse embryo monitoring',
            'Flexible appointment slots for working professionals',
            'Complete privacy and confidentiality',
        ],
        testimonial: {
            text: 'We live in Sector V and were nervous about the fertility journey. Dr. Ankita made everything so simple and comfortable. Our daughter was born last year through IVF, and we cannot thank the team enough.',
            name: 'Priya & Sourav',
            area: 'Salt Lake, Sector V',
        },
        faqs: [
            {
                question: 'How far is Maatritva IVF from Salt Lake Sector V?',
                answer:
                    'Maatritva IVF is approximately <b>20-25 minutes by car</b> from Salt Lake Sector V via the Salt Lake Bypass. It is also well-connected by metro and auto.',
            },
            {
                question: 'Do you offer evening or weekend appointments?',
                answer:
                    'Yes. We understand that many patients in the Salt Lake IT corridor have demanding work schedules. <b>Evening and Saturday appointments</b> are available upon request.',
            },
        ],
        mapEmbedPlaceholder: 'https://maps.google.com/?q=Maatritva+IVF+New+Town+Kolkata',
        keywords: ['IVF near Salt Lake Kolkata', 'fertility clinic Salt Lake', 'IVF centre Sector V Kolkata'],
    },
    {
        slug: 'new-town',
        title: 'IVF Centre in New Town, Rajarhat',
        metaTitle: 'IVF Centre in New Town Rajarhat Kolkata',
        metaDescription:
            'Expert IVF and gynaecology care in New Town, Rajarhat. Dr. Ankita Mandal at Maatritva IVF — near Biswa Bangla Gate. Book your consultation today.',
        heroHeadline: 'Expert IVF & Gynae Care in New Town, Rajarhat',
        heroSubtext:
            'Located in the heart of New Town, Maatritva IVF provides world-class fertility treatment right in your neighbourhood.',
        areaDescription:
            'New Town (Rajarhat) has rapidly emerged as Kolkata\'s modern township hub, blending residential comfort with commercial growth. Home to landmarks like Biswa Bangla Gate and Eco Park, New Town attracts young families who value both convenience and quality healthcare. Maatritva IVF is situated in New Town, making it the most accessible fertility centre for residents of this area.',
        landmarks: [
            'Near Biswa Bangla Gate',
            'Close to Eco Park, New Town',
            'Walking distance from Axis Mall',
            'Adjacent to New Town Action Area I',
        ],
        directions: [
            { mode: 'By Metro', detail: 'Nearest station: New Town (under construction). Currently best reached via Karunamoyee + auto.' },
            { mode: 'By Car', detail: 'Directly on the New Town main road. Ample parking available at the clinic.' },
            { mode: 'By Bus', detail: 'AC and non-AC buses from Howrah, Sealdah, and Garia connect to New Town bus stand.' },
        ],
        whyVisitUs: [
            'Walk-in proximity for New Town residents',
            'Advanced IVF laboratory on premises',
            'Warm, empathetic environment — not a corporate hospital feel',
            'Dr. Ankita personally oversees every patient\'s treatment',
        ],
        testimonial: {
            text: 'Living in New Town, finding a trusted fertility specialist close to home was a blessing. Dr. Ankita is patient, thorough, and genuinely caring. We\'re expecting twins, and we couldn\'t be happier.',
            name: 'Rina & Arnab',
            area: 'New Town, Action Area I',
        },
        faqs: [
            {
                question: 'Is the clinic in New Town itself or do I have to travel far?',
                answer:
                    'Maatritva IVF is <b>located in New Town</b>, making it highly convenient for residents of Action Area I, II, and III, as well as the Eco Park neighbourhood. Most patients reach within 10-15 minutes.',
            },
            {
                question: 'Can I get all my tests done at the clinic?',
                answer:
                    'Yes. Our clinic has in-house <b>ultrasound, bloodwork facilities, and an IVF laboratory</b>. Most fertility investigations can be completed on-site, saving you time and travel.',
            },
        ],
        mapEmbedPlaceholder: 'https://maps.google.com/?q=Maatritva+IVF+New+Town+Kolkata',
        keywords: ['IVF New Town Kolkata', 'fertility clinic Rajarhat', 'gynecologist New Town'],
    },
    {
        slug: 'south-kolkata',
        title: 'IVF Centre for South Kolkata',
        metaTitle: 'IVF Centre Near South Kolkata',
        metaDescription:
            'Best IVF centre accessible from South Kolkata. Dr. Ankita Mandal at Maatritva IVF. Expert fertility care near Gariahat, Dhakuria, and Jadavpur.',
        heroHeadline: 'Trusted Fertility Clinic for South Kolkata Families',
        heroSubtext:
            'Families from Gariahat, Dhakuria, Jadavpur, and beyond trust Dr. Ankita Mandal for compassionate, expert fertility care.',
        areaDescription:
            'South Kolkata — encompassing Gariahat, Dhakuria, Jadavpur, Garia, Tollygunge, and Behala — is the cultural and residential heartland of the city. Many families here seek fertility treatment but prefer a specialist they can trust, with manageable travel distances. Maatritva IVF provides an easy commute from South Kolkata via the EM Bypass and upcoming metro connections.',
        landmarks: [
            'Well-connected from Gariahat and Dhakuria',
            'Easy access via EM Bypass from Jadavpur',
            'Reachable from Tollygunge and Garia',
            'South Kolkata\'s trusted IVF referral centre',
        ],
        directions: [
            { mode: 'By Metro', detail: 'Take the Blue Line to Kavi Subhash, then an auto to New Town (approx. 30 minutes total).' },
            { mode: 'By Car', detail: 'Via EM Bypass and MAA Flyover — approximately 35-45 minutes from Gariahat.' },
            { mode: 'By Bus', detail: 'Buses from Garia and Jadavpur run direct services to New Town.' },
        ],
        whyVisitUs: [
            'Worth the journey — access Kolkata\'s best-equipped IVF lab',
            'Personal care by Dr. Ankita Mandal, one of Kolkata\'s most respected fertility specialists',
            'Patients from South Kolkata constitute a large part of our happy family',
            'Flexible scheduling to reduce your number of visits',
        ],
        testimonial: {
            text: 'We travel from Dhakuria and it\'s worth every minute. After two failed IVF attempts elsewhere, Dr. Ankita gave us hope — and our son. Her detailed approach and honesty made all the difference.',
            name: 'Moumita & Debashis',
            area: 'Dhakuria, South Kolkata',
        },
        faqs: [
            {
                question: 'Is it worth travelling from South Kolkata for IVF?',
                answer:
                    'Many of our <b>most successful cases are families from South Kolkata</b>. The quality of the IVF lab, the expertise of Dr. Ankita, and consistent results make the 35-45 minute journey worthwhile. We also minimise your travel with clustered appointments.',
            },
            {
                question: 'How do I reach the clinic from Jadavpur?',
                answer:
                    'The quickest route from Jadavpur is via <b>EM Bypass to MAA Flyover, then New Town</b>. By car, it takes about 35-40 minutes. Several bus routes also connect Jadavpur to New Town directly.',
            },
        ],
        mapEmbedPlaceholder: 'https://maps.google.com/?q=Maatritva+IVF+New+Town+Kolkata',
        keywords: ['IVF near South Kolkata', 'fertility clinic Gariahat', 'IVF centre Jadavpur'],
    },
    {
        slug: 'howrah',
        title: 'IVF Centre for Howrah Patients',
        metaTitle: 'IVF Centre Near Howrah | Fertility Clinic — Maatritva IVF',
        metaDescription:
            'Best IVF centre accessible from Howrah. Dr. Ankita Mandal at Maatritva IVF offers expert fertility treatment. Easy access via Nivedita Setu & Vidyasagar Setu.',
        heroHeadline: 'Expert IVF Care for Howrah Families',
        heroSubtext:
            'Cross the bridge to world-class fertility care. Maatritva IVF is easily accessible from Howrah, Shibpur, Liluah, and Belur.',
        areaDescription:
            'Howrah is Kolkata\'s twin city across the Hooghly river, with a large population that often seeks quality healthcare in Kolkata. Many families from Howrah, Shibpur, Liluah, Belur, and Santragachi travel to Kolkata for specialised medical treatment. Maatritva IVF is well-connected from Howrah via the Nivedita Setu (Second Hooghly Bridge) and EM Bypass, making the journey convenient and quick.',
        landmarks: [
            'Accessible via Nivedita Setu (2nd Hooghly Bridge)',
            'Connected through Vidyasagar Setu (2nd Hooghly Bridge)',
            'Close to Howrah Railway Station via bridge',
            'Easy drive from Shibpur and Liluah',
        ],
        directions: [
            { mode: 'By Car', detail: 'Via Nivedita Setu and EM Bypass to New Town — approximately 40-50 minutes depending on traffic.' },
            { mode: 'By Train + Metro', detail: 'Howrah to Sealdah/Esplanade, then Green Line metro to Karunamoyee, followed by auto to New Town.' },
            { mode: 'By Bus', detail: 'Direct bus services from Howrah bus stand to New Town/Salt Lake area.' },
        ],
        whyVisitUs: [
            'Many patients from Howrah are part of our successful IVF family',
            'Dr. Ankita Mandal — one of the most trusted fertility specialists in the region',
            'State-of-the-art laboratory not available at most Howrah clinics',
            'We cluster your appointments to minimise travel frequency',
        ],
        testimonial: {
            text: 'We came from Shibpur after hearing about Dr. Ankita from a relative. Despite the distance, the care and attention we received was extraordinary. Our baby boy arrived after just one IVF cycle.',
            name: 'Swati & Rajesh',
            area: 'Shibpur, Howrah',
        },
        faqs: [
            {
                question: 'How long does it take to reach Maatritva IVF from Howrah?',
                answer:
                    'The journey from Howrah to our New Town clinic takes approximately <b>40-50 minutes by car</b> via Nivedita Setu and EM Bypass. With upcoming metro extensions, travel will become even more convenient.',
            },
            {
                question: 'Can you minimise the number of clinic visits for Howrah patients?',
                answer:
                    'Absolutely. We understand the travel involved and <b>cluster your appointments, tests, and scans</b> whenever possible to reduce unnecessary trips. Many consultations can also be done via teleconsultation.',
            },
        ],
        mapEmbedPlaceholder: 'https://maps.google.com/?q=Maatritva+IVF+New+Town+Kolkata',
        keywords: ['IVF near Howrah', 'fertility clinic Howrah', 'IVF centre for Howrah patients', 'best IVF doctor near Howrah'],
    },
    {
        slug: 'north-kolkata',
        title: 'IVF Centre for North Kolkata',
        metaTitle: 'IVF Centre Near North Kolkata | Expert Fertility Care — Maatritva IVF',
        metaDescription:
            'Best IVF centre accessible from North Kolkata. Dr. Ankita Mandal at Maatritva IVF. Expert fertility care near Shyambazar, Ultadanga, and Baranagar.',
        heroHeadline: 'Fertility Clinic for North Kolkata Families',
        heroSubtext:
            'From Shyambazar to Baranagar, families across North Kolkata trust Maatritva IVF for compassionate and effective fertility treatment.',
        areaDescription:
            'North Kolkata — home to historic neighbourhoods like Shyambazar, Bagbazar, Ultadanga, Baranagar, and Belgharia — has a vibrant community that increasingly seeks modern fertility care. While many hospitals in North Kolkata offer general gynaecology services, specialised IVF treatment with advanced laboratory facilities is limited. Maatritva IVF fills this gap, providing world-class fertility care just a comfortable drive away.',
        landmarks: [
            'Easy access from Shyambazar and Bagbazar',
            'Connected from Ultadanga and Belgachia',
            'Short drive from Baranagar and Dunlop',
            'Metro connectivity via Green Line',
        ],
        directions: [
            { mode: 'By Metro', detail: 'Green Line from Shyambazar/Belgachia to Karunamoyee, then auto to New Town. Total journey: 40-50 minutes.' },
            { mode: 'By Car', detail: 'Via VIP Road/Airport connector to New Town — approximately 30-40 minutes from Shyambazar area.' },
            { mode: 'By Bus', detail: 'Buses from Baranagar and Ultadanga run to Salt Lake/New Town. Alight at New Town bus stand.' },
        ],
        whyVisitUs: [
            'Advanced IVF laboratory with latest technology',
            'Personalised treatment — Dr. Ankita treats every patient individually',
            'Growing community of successful parents from North Kolkata',
            'Flexible scheduling to work around your convenience',
        ],
        testimonial: {
            text: 'Coming from Baranagar, we were initially hesitant about the distance. But Dr. Ankita\'s reputation preceded her. Her warmth, expertise, and the team\'s dedication made it easy. We now have a beautiful daughter.',
            name: 'Tanusree & Arijit',
            area: 'Baranagar, North Kolkata',
        },
        faqs: [
            {
                question: 'Is Maatritva IVF easily reachable from North Kolkata?',
                answer:
                    'Yes. With the <b>Green Line metro and VIP Road connection</b>, reaching New Town from North Kolkata takes 30-50 minutes. Many of our patients come from Shyambazar, Baranagar, and Ultadanga regularly.',
            },
            {
                question: 'Why should I travel to New Town when there are hospitals in North Kolkata?',
                answer:
                    'While there are good hospitals in North Kolkata, <b>specialised IVF laboratories with advanced equipment</b> (time-lapse monitoring, vitrification systems) are rare. The quality of the lab directly impacts your success rates.',
            },
        ],
        mapEmbedPlaceholder: 'https://maps.google.com/?q=Maatritva+IVF+New+Town+Kolkata',
        keywords: ['IVF near North Kolkata', 'fertility clinic Shyambazar', 'IVF centre Baranagar', 'best IVF doctor North Kolkata'],
    },
    {
        slug: 'dum-dum-airport',
        title: 'IVF Centre Near Dum Dum & Airport',
        metaTitle: 'IVF Centre Near Dum Dum & Kolkata Airport — Maatritva IVF',
        metaDescription:
            'Best IVF centre near Dum Dum and Kolkata Airport. Dr. Ankita Mandal at Maatritva IVF. Convenient for local families and outstation patients flying in.',
        heroHeadline: 'IVF Centre Near Dum Dum & Kolkata Airport',
        heroSubtext:
            'Convenient for Dum Dum residents and patients flying into Kolkata for fertility treatment. World-class IVF care minutes from the airport.',
        areaDescription:
            'The Dum Dum and Kolkata Airport area is a major transit hub and residential zone. Maatritva IVF\'s location in New Town is just 15-20 minutes from Netaji Subhas Chandra Bose International Airport, making it incredibly convenient for outstation patients and medical tourists — including patients from Bangladesh, Northeast India, and other cities who fly in for treatment. For local residents of Dum Dum, Madhyamgram, and Barasat, it is equally accessible.',
        landmarks: [
            'Just 15-20 minutes from NSCBI Airport',
            'Close to Jessore Road and VIP Road',
            'Near Dum Dum Junction and Nagerbazar',
            'Easy access from Madhyamgram and Birati',
        ],
        directions: [
            { mode: 'By Car', detail: 'Via VIP Road/Airport connector direct to New Town — just 15-20 minutes. The fastest route to Maatritva IVF.' },
            { mode: 'By Metro', detail: 'Dum Dum metro station is on the Blue/Green Line interchange. Reach Karunamoyee in 20 minutes, then auto to New Town.' },
            { mode: 'From Airport', detail: 'Airport to New Town via VIP Road — 15 minutes by taxi or cab. We can arrange airport pickup for outstation patients.' },
        ],
        whyVisitUs: [
            'Closest premier IVF centre to Kolkata Airport',
            'Ideal for outstation patients flying in for treatment cycles',
            'Airport pickup and nearby hotel coordination available',
            'Quick commute for Dum Dum and Madhyamgram residents',
        ],
        testimonial: {
            text: 'We flew from Assam for IVF treatment and the proximity to the airport was a huge relief. Dr. Ankita\'s team even helped us find comfortable accommodation nearby. The experience was seamless from start to finish.',
            name: 'Pranjal & Barnali',
            area: 'Guwahati, Assam (visited via Kolkata Airport)',
        },
        faqs: [
            {
                question: 'How far is the clinic from Kolkata Airport?',
                answer:
                    'Maatritva IVF is just <b>15-20 minutes by car</b> from Netaji Subhas Chandra Bose International Airport via VIP Road connector. This makes us the most convenient IVF centre for patients flying into Kolkata.',
            },
            {
                question: 'Do you help outstation patients with accommodation?',
                answer:
                    'Yes. We can <b>recommend nearby hotels and serviced apartments</b> in New Town that offer comfortable stays during your treatment cycle. Our team coordinates logistics to make your visit as smooth as possible.',
            },
        ],
        mapEmbedPlaceholder: 'https://maps.google.com/?q=Maatritva+IVF+New+Town+Kolkata',
        keywords: ['IVF near Dum Dum Kolkata', 'IVF near Kolkata Airport', 'fertility clinic airport Kolkata', 'IVF for outstation patients Kolkata'],
    },
    {
        slug: 'barasat-north-24-parganas',
        title: 'IVF Centre for Barasat & North 24 Parganas',
        metaTitle: 'IVF Centre Near Barasat | North 24 Parganas — Maatritva IVF',
        metaDescription:
            'Best IVF centre for Barasat and North 24 Parganas patients. Dr. Ankita Mandal at Maatritva IVF, New Town. Expert fertility care close to your area.',
        heroHeadline: 'Trusted IVF Centre for Barasat & North 24 Parganas',
        heroSubtext:
            'Families from Barasat, Basirhat, Habra, and across North 24 Parganas choose Maatritva IVF for expert, accessible fertility care.',
        areaDescription:
            'Barasat and the wider North 24 Parganas district is home to a large population that previously had to travel to central Kolkata for specialised fertility treatment. Maatritva IVF\'s New Town location brings world-class IVF care much closer — just 20-30 minutes from Barasat via the Barasat-New Town connector road. Patients from Habra, Basirhat, Bongaon, and surrounding areas also benefit from this proximity.',
        landmarks: [
            'Connected via Barasat-New Town road (20-30 minutes)',
            'Near Rajarhat Gopalpur',
            'Easy access from Habra and Basirhat',
            'Well-connected from Bongaon via NH12',
        ],
        directions: [
            { mode: 'By Car', detail: 'Via Barasat-New Town connector road — approximately 20-30 minutes. Smooth, well-maintained road.' },
            { mode: 'By Bus', detail: 'Regular bus services from Barasat to New Town/Rajarhat bus terminus. Journey takes 30-40 minutes.' },
            { mode: 'From Habra/Basirhat', detail: 'Drive or bus to Barasat, then onward to New Town. Total journey: 45-60 minutes.' },
        ],
        whyVisitUs: [
            'Nearest advanced IVF centre for North 24 Parganas residents',
            'No need to navigate Kolkata city traffic',
            'Direct route from Barasat without entering the city centre',
            'Same world-class treatment as city-centre IVF hospitals',
        ],
        testimonial: {
            text: 'We live in Barasat and initially thought we would have to go to a big hospital in central Kolkata. Maatritva IVF in New Town was so close and so much better than we expected. Dr. Ankita treats you like family.',
            name: 'Papiya & Subrata',
            area: 'Barasat, North 24 Parganas',
        },
        faqs: [
            {
                question: 'Is Maatritva IVF a good option for Barasat patients?',
                answer:
                    'Absolutely. We are just <b>20-30 minutes from Barasat</b> via direct road — closer than most Kolkata city-centre hospitals. You avoid city traffic entirely. Many of our patients come from Barasat and the surrounding areas.',
            },
            {
                question: 'Do patients from smaller towns in North 24 Parganas visit your centre?',
                answer:
                    'Yes. We regularly treat patients from <b>Habra, Basirhat, Bongaon, and other towns</b> in North 24 Parganas. We schedule appointments to minimise travel days and offer teleconsultation for follow-ups.',
            },
        ],
        mapEmbedPlaceholder: 'https://maps.google.com/?q=Maatritva+IVF+New+Town+Kolkata',
        keywords: ['IVF near Barasat', 'fertility clinic North 24 Parganas', 'IVF centre Barasat Kolkata', 'IVF Habra Basirhat'],
    },
    {
        slug: 'bangladesh-ivf-support',
        title: 'IVF Support for Bangladesh Patients',
        metaTitle: 'IVF for Bangladesh Patients in Kolkata | Medical Tourism — Maatritva IVF',
        metaDescription:
            'Affordable, world-class IVF treatment in Kolkata for Bangladesh patients. Dr. Ankita Mandal at Maatritva IVF offers visa guidance, travel support, and compassionate fertility care.',
        heroHeadline: 'IVF in Kolkata for Bangladesh Patients — World-Class Care, Affordable Cost',
        heroSubtext:
            'Kolkata is the closest Indian metro to Bangladesh. Many Bangladeshi couples choose Maatritva IVF for its proximity, affordability, and expert medical care.',
        areaDescription:
            'Kolkata has long been a preferred healthcare destination for patients from Bangladesh due to its geographical proximity, cultural affinity, shared language (Bengali), and significantly lower treatment costs compared to Dhaka\'s private hospitals. Maatritva IVF, located in New Town just 15-20 minutes from Kolkata Airport, is ideally positioned to serve Bangladeshi couples seeking IVF treatment. We provide end-to-end support — from medical visa guidance to airport pickup, accommodation referrals, and treatment coordination — ensuring a smooth, stress-free experience.',
        landmarks: [
            '15-20 minutes from NSCBI Airport (Kolkata)',
            'Direct flights from Dhaka & Chittagong to Kolkata',
            'Petrapole-Benapole border crossing (3-4 hours by road)',
            'Bengali-speaking staff for comfortable communication',
        ],
        directions: [
            { mode: 'By Air', detail: 'Direct flights from Dhaka (Hazrat Shahjalal Airport) to Kolkata — just 1 hour flight time. Airport to clinic: 15-20 minutes.' },
            { mode: 'By Road', detail: 'Via Petrapole-Benapole border — approximately 3-4 hours from Dhaka by road. Our team can arrange border pickup.' },
            { mode: 'From Airport', detail: 'We arrange complimentary airport pickup for all Bangladesh patients. Hotel/serviced apartment recommendations provided in advance.' },
        ],
        whyVisitUs: [
            'Cost-effective: IVF in Kolkata is 30-50% less expensive than premium Dhaka centres',
            'Bengali-speaking doctors and staff — no language barrier',
            'Cultural familiarity — food, language, and environment feel like home',
            'Medical visa assistance and complete travel support',
            'Dr. Ankita Mandal — trusted by Bangladeshi patients for her expertise and compassion',
            'World-class IVF laboratory with international-standard equipment',
        ],
        testimonial: {
            text: 'We travelled from Dhaka after researching IVF options extensively. Dr. Ankita at Maatritva IVF was recommended by a friend. The entire experience — from visa help to treatment to our pregnancy news — was wonderful. We felt at home in Kolkata.',
            name: 'Fatima & Rashed',
            area: 'Dhaka, Bangladesh',
        },
        faqs: [
            {
                question: 'How do I get a medical visa for IVF treatment in India?',
                answer:
                    'We provide a <b>medical visa invitation letter</b> from our clinic, which is required for your visa application. Indian medical visas for Bangladeshi patients are typically processed within 5-7 working days. Our team guides you through the entire process.',
            },
            {
                question: 'How much does IVF cost in Kolkata compared to Dhaka?',
                answer:
                    'IVF treatment at Maatritva IVF typically costs <b>30-50% less</b> than premium IVF centres in Dhaka, with comparable or better success rates and laboratory standards. We provide transparent, fixed pricing with no hidden charges.',
            },
            {
                question: 'How long do I need to stay in Kolkata for an IVF cycle?',
                answer:
                    'A typical IVF cycle requires <b>approximately 15-20 days</b> in Kolkata — from initial consultation through egg retrieval and embryo transfer. We can arrange comfortable accommodation near the clinic for the duration.',
            },
            {
                question: 'Do you have Bengali-speaking staff?',
                answer:
                    'Yes. Dr. Ankita and the entire team are <b>fluent in Bengali</b>. You will feel completely comfortable communicating in your own language throughout your treatment journey.',
            },
        ],
        mapEmbedPlaceholder: 'https://maps.google.com/?q=Maatritva+IVF+New+Town+Kolkata',
        keywords: ['IVF for Bangladesh patients Kolkata', 'IVF medical tourism Kolkata', 'IVF cost Kolkata for Bangladeshi', 'fertility treatment Kolkata from Bangladesh'],
    },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
    return locationsData.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
    return locationsData.map((l) => l.slug);
}
