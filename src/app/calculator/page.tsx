'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, ArrowLeft, Send, RotateCcw, Heart, AlertTriangle } from 'lucide-react';

interface Question {
    id: string;
    question: string;
    type: 'select' | 'number';
    options?: { label: string; value: number }[];
    min?: number;
    max?: number;
    unit?: string;
}

const questions: Question[] = [
    {
        id: 'age',
        question: 'What is your age?',
        type: 'number',
        min: 18,
        max: 50,
        unit: 'years',
    },
    {
        id: 'trying',
        question: 'How long have you been trying to conceive?',
        type: 'select',
        options: [
            { label: 'Less than 6 months', value: 10 },
            { label: '6-12 months', value: 7 },
            { label: '1-2 years', value: 5 },
            { label: '2-3 years', value: 3 },
            { label: 'More than 3 years', value: 1 },
        ],
    },
    {
        id: 'periods',
        question: 'How regular are your menstrual cycles?',
        type: 'select',
        options: [
            { label: 'Very regular (26-32 days)', value: 10 },
            { label: 'Slightly irregular', value: 7 },
            { label: 'Very irregular', value: 4 },
            { label: 'Absent periods', value: 2 },
        ],
    },
    {
        id: 'amh',
        question: 'Do you know your AMH level?',
        type: 'select',
        options: [
            { label: 'Above 2.0 ng/mL', value: 10 },
            { label: '1.0 - 2.0 ng/mL', value: 7 },
            { label: '0.5 - 1.0 ng/mL', value: 4 },
            { label: 'Below 0.5 ng/mL', value: 2 },
            { label: 'I don\'t know', value: 6 },
        ],
    },
    {
        id: 'previous',
        question: 'Have you undergone any previous fertility treatments?',
        type: 'select',
        options: [
            { label: 'No previous treatment', value: 8 },
            { label: 'Ovulation induction only', value: 7 },
            { label: 'IUI (1-3 cycles)', value: 5 },
            { label: 'IVF (previously)', value: 4 },
            { label: 'Multiple failed IVF cycles', value: 2 },
        ],
    },
    {
        id: 'lifestyle',
        question: 'How would you describe your overall lifestyle?',
        type: 'select',
        options: [
            { label: 'Active, balanced diet, non-smoker', value: 10 },
            { label: 'Moderately active, occasional stress', value: 7 },
            { label: 'Sedentary, high stress, irregular meals', value: 4 },
            { label: 'Smoker or significant alcohol use', value: 2 },
        ],
    },
];

function getScore(answers: Record<string, number>): number {
    const ageScore = answers.age
        ? answers.age <= 30
            ? 10
            : answers.age <= 35
                ? 8
                : answers.age <= 38
                    ? 6
                    : answers.age <= 42
                        ? 4
                        : 2
        : 5;

    const otherScores = Object.entries(answers)
        .filter(([key]) => key !== 'age')
        .map(([, val]) => val);

    const total = [ageScore, ...otherScores].reduce((acc, v) => acc + v, 0);
    const max = (otherScores.length + 1) * 10;
    return Math.round((total / max) * 100);
}

function getRecommendation(score: number) {
    if (score >= 75) {
        return {
            level: 'Encouraging',
            color: 'text-green-600',
            bg: 'bg-green-50',
            border: 'border-green-200',
            message:
                'Your fertility indicators look encouraging. Many patients with a similar profile conceive with simple interventions like timed intercourse or IUI. A consultation with Dr. Ankita can help confirm the best approach.',
        };
    }
    if (score >= 50) {
        return {
            level: 'Moderate',
            color: 'text-gold',
            bg: 'bg-amber-50',
            border: 'border-amber-200',
            message:
                'Some factors suggest you may benefit from a thorough fertility evaluation. Treatments like IUI or IVF may be appropriate depending on your specific diagnosis. We recommend an early consultation with Dr. Ankita.',
        };
    }
    return {
        level: 'Needs Attention',
        color: 'text-rose-deep',
        bg: 'bg-rose-pale',
        border: 'border-rose-deep/20',
        message:
            'Multiple factors indicate that early specialist attention is important. The good news is that advanced treatments like IVF and ICSI have helped many patients in similar situations. Dr. Ankita would like to hear your story — please book a consultation.',
    };
}

export default function FertilityCalculatorPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [showResult, setShowResult] = useState(false);
    const [leadForm, setLeadForm] = useState({ name: '', phone: '' });
    const [leadSubmitted, setLeadSubmitted] = useState(false);

    const handleAnswer = (questionId: string, value: number) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep((s) => s + 1), 300);
        } else {
            setTimeout(() => setShowResult(true), 300);
        }
    };

    const handleNumberSubmit = (questionId: string, value: string) => {
        const num = parseInt(value);
        if (!isNaN(num)) {
            handleAnswer(questionId, num);
        }
    };

    const reset = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResult(false);
        setLeadSubmitted(false);
        setLeadForm({ name: '', phone: '' });
    };

    const score = showResult ? getScore(answers) : 0;
    const recommendation = showResult ? getRecommendation(score) : null;
    const progress = ((currentStep + 1) / questions.length) * 100;

    return (
        <>
            <section className="min-h-[80vh] py-16 lg:py-24 bg-cream">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-pale rounded-full mb-4">
                            <Calculator className="w-4 h-4 text-rose-deep" />
                            <span className="text-sm font-medium text-rose-deep">Free Assessment</span>
                        </div>
                        <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">
                            Fertility Score Calculator
                        </h1>
                        <p className="text-gray-600 max-w-lg mx-auto">
                            Answer 6 simple questions to get a personalised fertility assessment and recommendation.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
                        {!showResult ? (
                            <>
                                {/* Progress Bar */}
                                <div className="h-1.5 bg-gray-100">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-rose-deep to-gold"
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                <div className="p-6 lg:p-10">
                                    <p className="text-xs text-gray-400 font-medium mb-4">
                                        Question {currentStep + 1} of {questions.length}
                                    </p>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <h2 className="font-heading text-xl lg:text-2xl font-bold text-navy mb-8">
                                                {questions[currentStep].question}
                                            </h2>

                                            {questions[currentStep].type === 'select' ? (
                                                <div className="space-y-3">
                                                    {questions[currentStep].options?.map((option) => (
                                                        <button
                                                            key={option.label}
                                                            onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                                                            className="w-full text-left px-5 py-4 border border-gray-200 rounded-xl hover:border-rose-deep hover:bg-rose-pale/20 transition-all text-gray-700 font-medium text-sm"
                                                        >
                                                            {option.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            ) : (
                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        const formData = new FormData(e.currentTarget);
                                                        handleNumberSubmit(
                                                            questions[currentStep].id,
                                                            formData.get('value') as string
                                                        );
                                                    }}
                                                    className="flex gap-3"
                                                >
                                                    <input
                                                        name="value"
                                                        type="number"
                                                        min={questions[currentStep].min}
                                                        max={questions[currentStep].max}
                                                        required
                                                        placeholder={`Enter your age (${questions[currentStep].min}-${questions[currentStep].max})`}
                                                        className="flex-1 px-5 py-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-rose-deep/30 focus:border-rose-deep"
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="px-6 py-4 bg-rose-deep text-white rounded-xl hover:bg-rose-light transition-colors"
                                                    >
                                                        <ArrowRight className="w-5 h-5" />
                                                    </button>
                                                </form>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>

                                    {currentStep > 0 && (
                                        <button
                                            onClick={() => setCurrentStep((s) => s - 1)}
                                            className="mt-6 flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4" /> Previous
                                        </button>
                                    )}
                                </div>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-6 lg:p-10"
                            >
                                {/* Score */}
                                <div className="text-center mb-8">
                                    <div className="w-32 h-32 mx-auto rounded-full border-4 border-rose-deep flex items-center justify-center mb-4 relative">
                                        <span className="font-heading text-4xl font-bold text-navy">{score}</span>
                                        <span className="absolute -bottom-2 bg-white px-2 text-xs text-gray-500">/100</span>
                                    </div>
                                    <h2 className="font-heading text-2xl font-bold text-navy mb-1">Your Fertility Score</h2>
                                    <p className={`font-heading font-bold text-lg ${recommendation?.color}`}>{recommendation?.level}</p>
                                </div>

                                {/* Recommendation */}
                                <div className={`rounded-2xl p-6 ${recommendation?.bg} border ${recommendation?.border} mb-8`}>
                                    <p className="text-gray-700 leading-relaxed">{recommendation?.message}</p>
                                </div>

                                {/* Disclaimer */}
                                <div className="flex items-start gap-3 bg-amber-50 rounded-xl p-4 mb-8 border border-amber-200">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <p className="text-xs text-amber-700">
                                        <strong>Disclaimer:</strong> This calculator provides a general indication only and is not
                                        a medical diagnosis. Individual results vary based on many factors. Please consult Dr. Ankita
                                        Mandal for a thorough, personalised fertility evaluation.
                                    </p>
                                </div>

                                {/* Lead Capture */}
                                {!leadSubmitted ? (
                                    <div className="bg-navy rounded-2xl p-6 text-white">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Heart className="w-5 h-5 text-rose-light" />
                                            <h3 className="font-heading font-bold text-lg">Get a Personalised Consultation</h3>
                                        </div>
                                        <p className="text-white/70 text-sm mb-4">
                                            Share your details and Dr. Ankita&apos;s team will reach out to discuss your results.
                                        </p>
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                setLeadSubmitted(true);
                                            }}
                                            className="space-y-3"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                required
                                                value={leadForm.name}
                                                onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                required
                                                pattern="[0-9]{10}"
                                                value={leadForm.phone}
                                                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full py-3 bg-gradient-to-r from-rose-deep to-gold text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                                            >
                                                <Send className="w-4 h-4" />
                                                Request Callback
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-200">
                                        <p className="font-heading font-bold text-green-700 text-lg mb-1">Thank You!</p>
                                        <p className="text-sm text-green-600">
                                            Our team will contact you within 24 hours to discuss your fertility assessment.
                                        </p>
                                    </div>
                                )}

                                <button
                                    onClick={reset}
                                    className="mt-6 flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors mx-auto"
                                >
                                    <RotateCcw className="w-4 h-4" /> Take Again
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
