import React from 'react';
import { motion } from 'framer-motion';
import { CircleDot } from 'lucide-react';

const Philosophy = () => {
    const banavatValues = [
        { letter: 'B', title: 'Building with Purpose', desc: 'Focusing on purposeful creation to address meaningful challenges.' },
        { letter: 'A', title: 'Analytical Thinking', desc: 'Rigorous analysis, critical reasoning, and evidence-based decision-making.' },
        { letter: 'N', title: 'Nurturing Curiosity', desc: 'Encouraging exploration, questioning, and continuous learning.' },
        { letter: 'A', title: 'Adaptability', desc: 'Staying flexible and responsive to new ideas and emerging technologies.' },
        { letter: 'V', title: 'Validation', desc: 'Refining ideas through systematic experimentation and iterative improvement.' },
        { letter: 'A', title: 'Accountability', desc: 'Integrity, responsibility, and ethical conduct are central.' },
        { letter: 'T', title: 'Translation', desc: 'Translating research outcomes into practical, scalable solutions.' },
    ];

    const nestValues = [
        { letter: 'N', title: 'Nurturing Ideas', desc: 'Supportive environment where ideas are encouraged and allowed to mature.' },
        { letter: 'E', title: 'Experimentation', desc: 'Learning through experimentation and evidence-based validation.' },
        { letter: 'S', title: 'Supportive Innovation', desc: 'Fostering collaboration across disciplines for shared problem-solving.' },
        { letter: 'T', title: 'Together', desc: 'Working together to deliver meaningful and lasting impact.' },
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors pb-24">
            <header className="bg-white dark:bg-zinc-900/50 pt-24 pb-20 border-b border-gray-100 dark:border-zinc-800 grid-bg mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter leading-tight">
                            Philosophy <span className="text-[#84CC16]">& Values.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
                            A unified philosophy where ideas are built with purpose and nurtured with care.
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-left">
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-4 flex items-center">
                        BANAVAT <span className="text-gray-400 mx-4 lowercase text-lg font-medium">how we create</span>
                    </h3>
                    <div className="h-1.5 w-24 bg-[#84CC16] rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {banavatValues.map((v, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-100 dark:border-zinc-800 shadow-sm text-left hover:shadow-xl transition-all"
                        >
                            <span className="text-4xl font-black text-[#84CC16] block mb-4">{v.letter}</span>
                            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg mb-3 leading-tight">{v.title}</h4>
                            <p className="text-gray-500 dark:text-zinc-400 text-sm font-medium leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mb-20 text-left">
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-4 flex items-center">
                        NEST <span className="text-gray-400 mx-4 lowercase text-lg font-medium">where ideas grow</span>
                    </h3>
                    <div className="h-1.5 w-24 bg-[#5D3A1A] dark:bg-zinc-100 rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {nestValues.map((v, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-gray-100 dark:border-zinc-800 shadow-sm text-left hover:shadow-xl transition-all"
                        >
                            <span className="text-4xl font-black text-[#5D3A1A] dark:text-zinc-100 block mb-4">{v.letter}</span>
                            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg mb-3 leading-tight">{v.title}</h4>
                            <p className="text-gray-500 dark:text-zinc-400 text-sm font-medium leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
