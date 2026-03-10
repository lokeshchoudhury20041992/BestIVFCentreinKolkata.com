'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
    index: number;
}

export default function ServiceCard({ title, description, href, icon, index }: ServiceCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={href} className="group block h-full">
                <div className="h-full gradient-card rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-rose-pale transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-deep/10 to-rose-pale flex items-center justify-center text-rose-deep mb-5 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-rose-deep transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-rose-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
