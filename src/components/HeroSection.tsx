'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone, Award, Heart, Baby } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-hero opacity-95" />
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Floating decorative elements */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-20 right-10 w-32 h-32 rounded-full bg-gold/10 blur-xl hidden lg:block"
            />
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-32 left-10 w-40 h-40 rounded-full bg-rose-light/10 blur-xl hidden lg:block"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
                        >
                            <Award className="w-4 h-4 text-gold" />
                            <span className="text-sm text-white/90 font-medium">Kolkata&apos;s Trusted Fertility Centre</span>
                        </motion.div>

                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Your Journey to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold">
                                Parenthood
                            </span>{' '}
                            Starts Here
                        </h1>

                        <p className="text-lg sm:text-xl text-white/80 mb-4 leading-relaxed max-w-xl">
                            Dr. Ankita Mandal and the Maatritva IVF team bring 15+ years of expertise, advanced
                            technology, and genuine compassion to every family&apos;s fertility journey.
                        </p>

                        <p className="text-sm text-white/60 mb-8 flex items-center gap-2">
                            <Heart className="w-4 h-4 text-rose-light" />
                            15,000+ families trusted us with their dream of parenthood
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#book"
                                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy font-heading font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                <Calendar className="w-5 h-5 text-rose-deep group-hover:scale-110 transition-transform" />
                                Book Consultation
                            </Link>
                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-heading font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now
                            </a>
                        </div>
                    </motion.div>

                    {/* Right side - Doctor card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            {/* Doctor info card */}
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-rose-pale to-gold-light mb-6 flex items-center justify-center">
                                    <Baby className="w-20 h-20 text-rose-deep" />
                                </div>
                                <h2 className="font-heading text-2xl font-bold text-white text-center mb-2">
                                    Dr. Ankita Mandal
                                </h2>
                                <p className="text-white/70 text-center text-sm mb-4">
                                    MBBS, MS (OBG), Fellowship in Reproductive Medicine
                                </p>
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <p className="text-2xl font-bold text-gold">15+</p>
                                        <p className="text-xs text-white/60">Years Exp.</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gold">15K+</p>
                                        <p className="text-xs text-white/60">Families</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gold">High</p>
                                        <p className="text-xs text-white/60">Success</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2"
                            >
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <span className="text-green-600 text-lg">✓</span>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-navy">NMC Certified</p>
                                    <p className="text-[10px] text-gray-500">Verified Specialist</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L48 110C96 100 192 80 288 73.3C384 67 480 73 576 76.7C672 80 768 80 864 73.3C960 67 1056 53 1152 50C1248 47 1344 53 1392 56.7L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="var(--color-cream)" />
                </svg>
            </div>
        </section>
    );
}
