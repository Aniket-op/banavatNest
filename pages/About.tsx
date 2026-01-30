import React from 'react';
import { Quote, CircleDot, UserCircle2 } from 'lucide-react';

const About = () => {
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
    <div className="pb-24 dark:bg-[#09090b] transition-colors">
      {/* Header */}
      <header className="bg-zinc-50 dark:bg-zinc-900/50 pt-24 pb-20 border-b border-gray-100 dark:border-zinc-800 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter leading-tight">
              About <span className="text-[#84CC16]">Us.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
              BanavatNest is a research-led innovation ecosystem where ideas are built with purpose and nurtured with care.
            </p>
          </div>
        </div>
      </header>

      {/* Name Meaning */}
      <section className="py-24 bg-white dark:bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="bg-[#5D3A1A] dark:bg-zinc-900 text-white p-12 rounded-[3rem] relative overflow-hidden shadow-2xl border dark:border-zinc-800">
              <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5" />
              <h2 className="text-3xl font-black mb-8">Our Name</h2>
              <div className="space-y-6 text-gray-200 dark:text-zinc-400">
                <p className="text-lg">
                  <strong className="text-[#84CC16] text-xl block mb-2">Banavat:</strong> 
                  Signifies making, crafting, building, and creating. It conveys the spirit of active construction and purposeful formation.
                </p>
                <p className="text-lg">
                  <strong className="text-[#84CC16] text-xl block mb-2">Nest:</strong> 
                  Symbolizes a safe and nurturing space where ideas are developed, protected, and allowed to grow before taking flight.
                </p>
              </div>
            </div>
            <div className="pt-4 text-left">
              <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">Our Philosophy</h2>
              <p className="text-xl text-gray-600 dark:text-zinc-400 mb-8 leading-relaxed">
                BanavatNest represents a unified philosophy of creation and nurturing. The name brings together two complementary value systems that define how we create and where ideas grow.
              </p>
              <div className="flex items-center space-x-3 text-[#84CC16] font-black text-2xl tracking-widest uppercase">
                <span>BANAVAT</span>
                <CircleDot className="w-5 h-5" />
                <span>NEST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Details */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-left">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-4">BANAVAT — How We Create</h3>
            <div className="h-1.5 w-24 bg-[#84CC16] rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {banavatValues.map((v, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-sm text-left">
                <span className="text-4xl font-black text-[#84CC16] block mb-4">{v.letter}</span>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg mb-3 leading-tight">{v.title}</h4>
                <p className="text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mb-20 text-left">
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-4">NEST — Where Ideas Grow</h3>
            <div className="h-1.5 w-24 bg-[#5D3A1A] dark:bg-zinc-100 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nestValues.map((v, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 shadow-sm text-left">
                <span className="text-4xl font-black text-[#5D3A1A] dark:text-zinc-100 block mb-4">{v.letter}</span>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg mb-3 leading-tight">{v.title}</h4>
                <p className="text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-24 bg-white dark:bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-20">
            <h2 className="text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-6 tracking-tighter">Board of Directors</h2>
            <p className="text-xl text-gray-500 dark:text-zinc-400 font-medium max-w-2xl">Strategic leadership ensuring alignment between academic excellence and industry needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Dr. Sukhdev Singh Card */}
            <div className="bg-white dark:bg-zinc-900/50 rounded-[4rem] p-12 border border-zinc-100 dark:border-zinc-800 relative text-left transition-all duration-300 hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] dark:hover:border-lime-500/30">
               <div className="w-20 h-20 bg-[#84CC16] rounded-3xl flex items-center justify-center shadow-lg mb-8">
                 <UserCircle2 className="w-12 h-12 text-zinc-900" />
               </div>
               <h3 className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">Dr. Sukhdev Singh</h3>
               <p className="text-[#84CC16] font-bold text-lg mb-8 uppercase tracking-widest">Director | PhD (IIT Patna)</p>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6 font-medium">
                 Experienced academic and researcher with over 8 years in higher education. Holds strong expertise in statistical modeling, estimation, and data-driven problem solving.
               </p>
               <ul className="space-y-3 text-zinc-500 dark:text-zinc-500 font-bold">
                 <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> Author of 20+ research publications</li>
                 <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> CSIR Junior and Senior Research Fellow</li>
                 <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> Expert in Research Planning & Partnerships</li>
               </ul>
            </div>

            {/* Dr. Sangita Roy Card - Fixed for Theme Responsiveness and Glow */}
            <div className="bg-white dark:bg-zinc-900/50 rounded-[4rem] p-12 border border-zinc-100 dark:border-zinc-800 relative text-left transition-all duration-300 shadow-2xl hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] dark:hover:border-lime-500/30 overflow-hidden">
               <div className="w-20 h-20 bg-[#84CC16]/20 dark:bg-white/10 rounded-3xl flex items-center justify-center shadow-lg mb-8">
                 <UserCircle2 className="w-12 h-12 text-[#84CC16]" />
               </div>
               <h3 className="text-3xl font-black mb-2 text-zinc-900 dark:text-zinc-100">Dr. Sangita Roy</h3>
               <p className="text-[#84CC16] font-bold text-lg mb-8 uppercase tracking-widest">Director | PhD (IIT Patna)</p>
               <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6 font-medium">
                 Accomplished academic with expertise in Computer Science, Cybersecurity, and Blockchain. Currently Assistant Professor at Thapar Institute.
               </p>
               <ul className="space-y-3 text-zinc-500 dark:text-zinc-500 font-bold">
                 <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> PhD from IIT Patna</li>
                 <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> Former Senior Scientist at IIT Bombay</li>
                 <li className="flex items-center"><CircleDot className="w-4 h-4 mr-3 text-[#84CC16]" /> Postdoc at Tel Aviv University, Israel</li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;