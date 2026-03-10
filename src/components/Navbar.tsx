'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services/ivf-treatment', label: 'IVF' },
    { href: '/services/iui-treatment', label: 'IUI' },
    { href: '/services/icsi-treatment', label: 'ICSI' },
    { href: '/services/laparoscopic-surgery', label: 'Laparoscopy' },
    { href: '/ivf-cost-kolkata', label: 'IVF Cost' },
    { href: '/conditions/pcos-treatment', label: 'Conditions' },
    { href: '/doctors', label: 'Our Doctors' },
    { href: '/blog', label: 'Blog' },
    { href: '/calculator', label: 'Fertility Score' },
];

const serviceDropdown = [
    { href: '/services/ivf-treatment', label: 'IVF Treatment' },
    { href: '/services/iui-treatment', label: 'IUI Treatment' },
    { href: '/services/icsi-treatment', label: 'ICSI Treatment' },
    { href: '/services/laparoscopic-surgery', label: 'Laparoscopic Surgery' },
    { href: '/services/high-risk-pregnancy', label: 'High-Risk Pregnancy' },
    { href: '/services/egg-freezing', label: 'Egg Freezing' },
    { href: '/services/male-infertility-treatment', label: 'Male Infertility' },
    { href: '/services/donor-egg-ivf', label: 'Donor Egg IVF' },
    { href: '/services/hysteroscopy', label: 'Hysteroscopy' },
    { href: '/services/blastocyst-transfer', label: 'Blastocyst Transfer' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-deep to-gold flex items-center justify-center">
                            <span className="text-white font-heading font-bold text-lg">M</span>
                        </div>
                        <div className="hidden sm:block">
                            <p className="font-heading font-bold text-navy text-sm lg:text-base leading-tight">
                                Dr. Ankita Mandal
                            </p>
                            <p className="text-xs text-rose-deep font-medium">Maatritva IVF</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        <Link href="/" className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                        >
                            <button className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50 flex items-center gap-1">
                                Services
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <AnimatePresence>
                                {showServices && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                                    >
                                        {serviceDropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block px-4 py-3 text-sm text-navy hover:bg-rose-pale/50 hover:text-rose-deep transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/ivf-cost-kolkata" className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50">
                            IVF Cost
                        </Link>
                        <Link href="/conditions/pcos-treatment" className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50">
                            Conditions
                        </Link>
                        <Link href="/doctors" className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50">
                            Our Doctors
                        </Link>
                        <Link href="/calculator" className="px-3 py-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors rounded-lg hover:bg-rose-pale/50">
                            Fertility Score
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-sm font-medium text-navy hover:text-rose-deep transition-colors">
                            <Phone className="w-4 h-4" />
                            Call Now
                        </a>
                        <Link
                            href="#book"
                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-deep to-rose-light text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-rose-pale/50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6 text-navy" /> : <Menu className="w-6 h-6 text-navy" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-navy hover:text-rose-deep hover:bg-rose-pale/30 rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-3 border-t border-gray-100 space-y-2">
                                <a
                                    href="tel:+91XXXXXXXXXX"
                                    className="flex items-center justify-center gap-2 px-4 py-3 text-navy font-medium border border-navy/20 rounded-full hover:bg-navy hover:text-white transition-all"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Now
                                </a>
                                <Link
                                    href="#book"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-md"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
