import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const services = [
    { href: '/services/ivf-treatment', label: 'IVF Treatment' },
    { href: '/services/iui-treatment', label: 'IUI Treatment' },
    { href: '/services/icsi-treatment', label: 'ICSI Treatment' },
    { href: '/services/laparoscopic-surgery', label: 'Laparoscopic Surgery' },
    { href: '/services/high-risk-pregnancy', label: 'High-Risk Pregnancy' },
    { href: '/services/egg-freezing', label: 'Egg Freezing' },
    { href: '/services/male-infertility-treatment', label: 'Male Infertility' },
    { href: '/services/donor-egg-ivf', label: 'Donor Egg IVF' },
];

const locations = [
    { href: '/locations/salt-lake', label: 'Salt Lake' },
    { href: '/locations/new-town', label: 'New Town' },
    { href: '/locations/south-kolkata', label: 'South Kolkata' },
    { href: '/locations/howrah', label: 'Howrah' },
    { href: '/locations/north-kolkata', label: 'North Kolkata' },
    { href: '/locations/dum-dum-airport', label: 'Dum Dum & Airport' },
    { href: '/locations/barasat-north-24-parganas', label: 'Barasat & N24P' },
    { href: '/locations/bangladesh-ivf-support', label: 'Bangladesh IVF' },
];

const quickLinks = [
    { href: '/ivf-cost-kolkata', label: 'IVF Cost' },
    { href: '/calculator', label: 'Fertility Score Calculator' },
    { href: '/best-ivf-specialist-in-kolkata', label: 'Best IVF Specialist' },
    { href: '/doctors/dr-ankita-mandal', label: 'Dr. Ankita Mandal' },
    { href: '/conditions/pcos-treatment', label: 'PCOS Treatment' },
    { href: '/conditions/low-amh-treatment', label: 'Low AMH Treatment' },
    { href: '/conditions/male-infertility', label: 'Male Infertility' },
    { href: '/blog', label: 'Blog' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
];

export default function Footer() {
    return (
        <footer className="bg-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-deep to-gold flex items-center justify-center">
                                <span className="text-white font-heading font-bold text-lg">M</span>
                            </div>
                            <div>
                                <p className="font-heading font-bold text-lg">Maatritva IVF</p>
                                <p className="text-xs text-white/60">Dr. Ankita Mandal</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed mb-6">
                            Kolkata&apos;s trusted fertility and IVF centre. Advanced reproductive
                            care with compassion, transparency, and high clinical success rates.
                        </p>
                        <div className="space-y-3">
                            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors">
                                <Phone className="w-4 h-4" /> +91-XXXXXXXXXX
                            </a>
                            <a href="mailto:info@bestivfcentreinkolkata.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-colors">
                                <Mail className="w-4 h-4" /> info@bestivfcentreinkolkata.com
                            </a>
                            <p className="flex items-start gap-2 text-sm text-white/70">
                                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> New Town, Rajarhat, Kolkata — 700156
                            </p>
                            <p className="flex items-center gap-2 text-sm text-white/70">
                                <Clock className="w-4 h-4" /> Mon–Sat: 9:00 AM – 8:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
                        <ul className="space-y-2.5">
                            {services.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Locations</h3>
                        <ul className="space-y-2.5">
                            {locations.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="font-heading font-bold text-lg mt-8 mb-4">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Map Placeholder */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Find Us</h3>
                        <div className="w-full h-48 bg-navy-light rounded-xl border border-white/10 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                                <p className="text-xs text-white/50">Google Map</p>
                                <p className="text-xs text-white/50">New Town, Kolkata</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-white/50 text-center md:text-left">
                            © {new Date().getFullYear()} Maatritva IVF — Dr. Ankita Mandal. All rights reserved.
                        </p>
                        <p className="text-xs text-white/50 text-center md:text-right max-w-xl">
                            <em>
                                Disclaimer: This website is for informational purposes only. Results may vary based on individual
                                health conditions. Consult your doctor before making healthcare decisions.
                            </em>
                        </p>
                        <p className="text-xs text-white/40 flex items-center gap-1">
                            Made with <Heart className="w-3 h-3 text-rose-deep" /> by <a href="https://wa.me/917059256456" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/70 transition-colors">Lokesh Choudhury</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
