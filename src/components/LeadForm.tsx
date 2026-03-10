'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Send, User, Phone, CalendarDays } from 'lucide-react';

export default function LeadForm() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', date: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send data to an API
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setIsExpanded(false);
            setFormData({ name: '', phone: '', date: '' });
        }, 3000);
    };

    return (
        <>
            {/* Desktop floating form */}
            <div className="hidden lg:block fixed bottom-8 right-8 z-40" id="book">
                <AnimatePresence mode="wait">
                    {!isExpanded ? (
                        <motion.button
                            key="trigger"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setIsExpanded(true)}
                            className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-deep to-rose-light text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-shadow"
                        >
                            <Calendar className="w-7 h-7" />
                        </motion.button>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                            <div className="bg-gradient-to-r from-rose-deep to-rose-light p-4 flex items-center justify-between">
                                <div>
                                    <h3 className="font-heading font-bold text-white text-lg">Quick Booking</h3>
                                    <p className="text-white/80 text-xs">We&apos;ll call you to confirm</p>
                                </div>
                                <button onClick={() => setIsExpanded(false)} className="text-white/80 hover:text-white transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            {submitted ? (
                                <div className="p-6 text-center">
                                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-3xl">✓</span>
                                    </div>
                                    <p className="font-heading font-bold text-navy text-lg">Thank You!</p>
                                    <p className="text-sm text-gray-500 mt-1">We&apos;ll contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-4 space-y-3">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            required
                                            pattern="[0-9]{10}"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="date"
                                            required
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        Request Appointment
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile sticky footer */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 slide-up">
                <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
                    <div className="flex items-center gap-3 max-w-md mx-auto">
                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-rose-deep text-rose-deep font-semibold rounded-full text-sm hover:bg-rose-deep hover:text-white transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            Call
                        </a>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full text-sm shadow-md"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Mobile expanded form */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-white border-t border-gray-100 overflow-hidden"
                        >
                            {submitted ? (
                                <div className="p-6 text-center">
                                    <p className="font-heading font-bold text-navy text-lg">Thank You! ✓</p>
                                    <p className="text-sm text-gray-500 mt-1">We&apos;ll contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-4 space-y-3 max-w-md mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/30"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        required
                                        pattern="[0-9]{10}"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/30"
                                    />
                                    <input
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-deep/30"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-xl"
                                    >
                                        Request Appointment
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
