'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
}

export default function FAQSection({
    faqs,
    title = 'Dr. Ankita Answers: Common Concerns',
}: {
    faqs: FAQ[];
    title?: string;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-pale rounded-full mb-4">
                        <MessageCircle className="w-4 h-4 text-rose-deep" />
                        <span className="text-sm font-medium text-rose-deep">FAQ</span>
                    </div>
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy">
                        {title}
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                            >
                                <span className="font-heading font-semibold text-navy text-base lg:text-lg leading-snug">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="shrink-0 mt-1"
                                >
                                    <ChevronDown className="w-5 h-5 text-rose-deep" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="px-6 pb-5 text-gray-600 leading-relaxed text-sm lg:text-base border-t border-gray-50 pt-4"
                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
