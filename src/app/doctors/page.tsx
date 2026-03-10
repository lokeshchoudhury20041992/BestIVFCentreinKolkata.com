'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coreDoctors, embryologists, counsellors, empanelledSonologists } from '@/lib/doctors-data';
import {
    Award,
    ChevronDown,
    ChevronUp,
    Stethoscope,
    Users,
    Heart,
    Microscope,
    Brain,
    Star,
    BadgeCheck,
    Sparkles,
} from 'lucide-react';

/* ─── Expandable About for Core Doctors ──────────────────────────────── */

import { DoctorData } from '@/lib/doctors-data';

function ExpandableAbout({ doctor, isLeadCard }: { doctor: DoctorData; isLeadCard: boolean }) {
    const [expanded, setExpanded] = useState(false);
    const hasExtended = !!doctor.aboutExtended;

    return (
        <div className="mb-6" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content={doctor.name} />
            <meta itemProp="jobTitle" content={doctor.designation} />
            <p
                className={`leading-relaxed ${isLeadCard ? 'text-white/85' : 'text-gray-600'}`}
                itemProp="description"
            >
                {doctor.about}
            </p>

            {hasExtended && (
                <>
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                {doctor.aboutExtended!.split('\n\n').map((para, idx) => (
                                    <p
                                        key={idx}
                                        className={`leading-relaxed mt-4 ${isLeadCard ? 'text-white/80' : 'text-gray-600'}`}
                                    >
                                        {para}
                                    </p>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setExpanded(!expanded)}
                        className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${isLeadCard
                                ? 'text-gold-light hover:text-white'
                                : 'text-rose-deep hover:text-navy'
                            }`}
                    >
                        {expanded ? 'Read Less' : 'Read More About ' + doctor.name.split(' ').slice(1).join(' ')}
                        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                </>
            )}
        </div>
    );
}

/* ─── Expandable About Card for Sonologists ──────────────────────────────── */

function SonologistCard({
    sonologist,
}: {
    sonologist: (typeof empanelledSonologists)[0];
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sonologist.rank * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-white/20 shadow-lg"
        >
            {/* Image / Avatar Placeholder */}
            <div className="relative h-56 bg-gradient-to-br from-navy/80 via-rose-deep/60 to-gold/40 flex items-center justify-center overflow-hidden">
                {/* Decorative ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border-2 border-white/10 animate-pulse-slow" />
                </div>
                <div className="relative w-28 h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 shadow-xl">
                    <span className="font-heading text-4xl font-bold text-white">
                        {sonologist.name.split(' ').pop()?.charAt(0)}
                    </span>
                </div>
                {/* Rank badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-gold/90 backdrop-blur-sm rounded-full">
                    <Star className="w-3.5 h-3.5 text-white fill-white" />
                    <span className="text-xs font-bold text-white">Top {sonologist.rank}</span>
                </div>
            </div>

            {/* Frosted Glass Content */}
            <div className="relative bg-white/60 backdrop-blur-xl p-6 border-t border-white/30">
                {/* Name & Degrees */}
                <h3 className="font-heading text-lg font-bold text-navy mb-1">{sonologist.name}</h3>
                <p className="text-xs text-rose-deep font-medium mb-3 leading-relaxed">{sonologist.degrees}</p>

                {/* Specialisations chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {sonologist.specialisations.slice(0, 3).map((s) => (
                        <span
                            key={s}
                            className="px-2.5 py-1 bg-navy/5 border border-navy/10 rounded-full text-[11px] font-medium text-navy/70"
                        >
                            {s}
                        </span>
                    ))}
                </div>

                {/* Expand trigger */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 text-sm font-semibold text-rose-deep hover:text-navy transition-colors w-full"
                >
                    {expanded ? 'Hide Details' : 'Read About'}
                    {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="text-sm text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                                {sonologist.about}
                            </p>
                            {sonologist.specialisations.length > 3 && (
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {sonologist.specialisations.slice(3).map((s) => (
                                        <span
                                            key={s}
                                            className="px-2.5 py-1 bg-navy/5 border border-navy/10 rounded-full text-[11px] font-medium text-navy/70"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

/* ─── Main Page ────────────────────────────────────────────────────────────── */

export default function DoctorsPage() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-navy via-rose-deep/80 to-navy py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute w-96 h-96 bg-gold rounded-full blur-3xl -top-48 -right-48" />
                    <div className="absolute w-64 h-64 bg-rose-light rounded-full blur-3xl bottom-0 left-0" />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                        <Users className="w-4 h-4 text-gold" />
                        <span className="text-sm text-white/90 font-medium">Our Team</span>
                    </div>
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl">
                        Meet the Experts Behind Every Success Story
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                        A multidisciplinary team of fertility specialists, embryologists, counsellors, and
                        diagnostic experts — working together to give you the best possible chance at
                        parenthood.
                    </p>
                </div>
            </section>

            {/* ── Core Doctors ──────────────────────────────────────────────── */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2.5 bg-rose-pale rounded-xl">
                            <Stethoscope className="w-6 h-6 text-rose-deep" />
                        </div>
                        <div>
                            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy">
                                Core Medical Team
                            </h2>
                            <p className="text-sm text-gray-500 mt-0.5">Led by Dr. Ankita Mandal, Founder Director</p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {coreDoctors.map((doctor, i) => (
                            <motion.div
                                key={doctor.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`rounded-3xl overflow-hidden border border-gray-100 shadow-md ${i === 0
                                    ? 'bg-gradient-to-r from-navy to-rose-deep/90 text-white'
                                    : 'bg-white'
                                    }`}
                            >
                                <div className="p-6 lg:p-10">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                                        {/* Avatar */}
                                        <div
                                            className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 font-heading text-2xl font-bold ${i === 0
                                                ? 'bg-white/20 text-white border border-white/30'
                                                : 'bg-gradient-to-br from-rose-deep to-rose-light text-white'
                                                }`}
                                        >
                                            {doctor.name.split(' ').slice(1).map((n) => n[0]).join('')}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-heading text-xl lg:text-2xl font-bold">
                                                    {doctor.name}
                                                </h3>
                                                {i === 0 && (
                                                    <span className="px-2.5 py-0.5 bg-gold/90 text-white text-xs font-bold rounded-full">
                                                        Founder
                                                    </span>
                                                )}
                                            </div>
                                            <p
                                                className={`text-sm font-medium mb-1 ${i === 0 ? 'text-gold-light' : 'text-rose-deep'
                                                    }`}
                                            >
                                                {doctor.degrees}
                                            </p>
                                            <p
                                                className={`text-sm ${i === 0 ? 'text-white/70' : 'text-gray-500'
                                                    }`}
                                            >
                                                {doctor.designation} · {doctor.experience} Experience
                                            </p>
                                        </div>
                                    </div>

                                    {/* About — Expandable */}
                                    <ExpandableAbout doctor={doctor} isLeadCard={i === 0} />

                                    {/* Specialisations */}
                                    <div className="mb-6">
                                        <p
                                            className={`text-xs font-semibold uppercase tracking-wider mb-3 ${i === 0 ? 'text-white/60' : 'text-gray-400'
                                                }`}
                                        >
                                            Specialisations
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {doctor.specialisations.map((spec) => (
                                                <span
                                                    key={spec}
                                                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${i === 0
                                                        ? 'bg-white/10 text-white/90 border border-white/20'
                                                        : 'bg-rose-pale/50 text-navy border border-rose-pale'
                                                        }`}
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <div>
                                        <p
                                            className={`text-xs font-semibold uppercase tracking-wider mb-3 ${i === 0 ? 'text-white/60' : 'text-gray-400'
                                                }`}
                                        >
                                            Key Achievements
                                        </p>
                                        <ul className="space-y-2">
                                            {doctor.achievements.map((ach) => (
                                                <li key={ach} className="flex items-start gap-2.5">
                                                    <Award
                                                        className={`w-4 h-4 shrink-0 mt-0.5 ${i === 0 ? 'text-gold' : 'text-sage'
                                                            }`}
                                                    />
                                                    <span
                                                        className={`text-sm ${i === 0 ? 'text-white/80' : 'text-gray-600'
                                                            }`}
                                                    >
                                                        {ach}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Embryologists ─────────────────────────────────────────────── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2.5 bg-green-50 rounded-xl">
                            <Microscope className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy">
                                Embryologists
                            </h2>
                            <p className="text-sm text-gray-500 mt-0.5">
                                The lab experts behind every successful fertilisation
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {embryologists.map((emb) => (
                            <motion.div
                                key={emb.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-green-50/50 to-cream rounded-2xl border border-green-100 p-6 lg:p-8"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                                        <Microscope className="w-6 h-6 text-green-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-navy">{emb.name}</h3>
                                        <p className="text-xs text-green-700 font-medium mb-0.5">{emb.degrees}</p>
                                        <p className="text-sm text-gray-500">
                                            {emb.designation} · {emb.experience} Experience
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">{emb.about}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Counsellors ──────────────────────────────────────────────── */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2.5 bg-purple-50 rounded-xl">
                            <Brain className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy">
                                Counsellors
                            </h2>
                            <p className="text-sm text-gray-500 mt-0.5">
                                Over a decade of compassionate emotional support
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {counsellors.map((coun) => (
                            <motion.div
                                key={coun.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-purple-100 p-6 lg:p-8 shadow-sm"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0">
                                        <Heart className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-lg font-bold text-navy">{coun.name}</h3>
                                        <p className="text-xs text-purple-600 font-medium mb-0.5">{coun.degrees}</p>
                                        <p className="text-sm text-gray-500">
                                            {coun.designation} · {coun.experience} Experience
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">{coun.about}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Empanelled Sonologists ────────────────────────────────────── */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-cream relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute w-80 h-80 bg-rose-deep rounded-full blur-3xl top-20 -right-40" />
                    <div className="absolute w-60 h-60 bg-navy rounded-full blur-3xl bottom-20 -left-30" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-4 border border-gold/20">
                            <BadgeCheck className="w-4 h-4 text-gold" />
                            <span className="text-sm font-medium text-gold">Empanelled Specialists</span>
                        </div>
                        <h2 className="font-heading text-2xl lg:text-4xl font-bold text-navy mb-4">
                            Kolkata&apos;s Most Renowned Sonologists
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Maatritva IVF has empanelled 6 of the top 10 USG doctors in Kolkata — ensuring world-class
                            diagnostic imaging for every patient.
                        </p>
                        <div className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-full">
                            <Sparkles className="w-4 h-4 text-gold" />
                            Top 6 out of Kolkata&apos;s Top 10 USG Specialists
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {empanelledSonologists.map((son) => (
                            <SonologistCard key={son.name} sonologist={son} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────── */}
            <section className="py-16 bg-navy text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">
                        Our multidisciplinary team is here to support you at every step. Book a consultation with
                        Dr. Ankita Mandal today.
                    </p>
                    <a
                        href="tel:+919876543210"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-gold text-white font-heading font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Book Consultation
                    </a>
                </div>
            </section>
        </>
    );
}
