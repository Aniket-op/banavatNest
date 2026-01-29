
import React from 'react';
import { Microscope, Code2, Users2, Zap, BrainCircuit, GlobeLock, Cpu, Tractor } from 'lucide-react';
import { motion } from 'framer-motion';

const FocusCard = ({ area, idx }: { area: any, idx: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10, scale: 1.01 }}
    viewport={{ once: true }}
    className={`bg-white p-14 rounded-[4rem] border border-gray-100/80 transition-all duration-500 group cursor-default flex flex-col items-start h-full text-left`}
  >
    <div className={`w-24 h-24 ${area.bgColor} rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-inner relative overflow-hidden`}>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10">{area.icon}</span>
    </div>
    <h3 className="text-4xl font-black text-zinc-900 mb-6 tracking-tighter leading-tight">{area.title}</h3>
    <p className="text-xl text-gray-500 font-medium leading-relaxed">{area.desc}</p>
  </motion.div>
);

const Services = () => {
  const focusAreas = [
    {
      title: 'Research & Development',
      desc: 'Addressing real-world problems through systematic investigation, analytical modeling, and experimental validation. Developing scalable, application-oriented solutions.',
      icon: <Microscope className="w-10 h-10 text-blue-500" />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Product Prototyping',
      desc: 'Integrating design, engineering, and testing to translate ideas into functional prototypes, validating feasibility and performance for large-scale deployment.',
      icon: <Code2 className="w-10 h-10 text-[#84CC16]" />,
      bgColor: 'bg-lime-50'
    },
    {
      title: 'Industry–Academia Collaboration',
      desc: 'Enabling student-driven projects and faculty-led innovation to ensure knowledge transfer and skill development through industry-relevant outcomes.',
      icon: <Users2 className="w-10 h-10 text-purple-500" />,
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Innovation & Tech Transfer',
      desc: 'Transforming research outputs into deployable technologies including IP development, proof-of-concept validation, and facilitating technology transfer.',
      icon: <Zap className="w-10 h-10 text-amber-500" />,
      bgColor: 'bg-amber-50'
    }
  ];

  const domains = [
    {
      title: 'AI, ML & Data Science',
      desc: 'Developing intelligent algorithms for prediction, optimization, and decision support across complex engineering and healthcare problems.',
      icon: <BrainCircuit className="w-7 h-7" />,
      accent: "from-blue-600 to-cyan-400"
    },
    {
      title: 'Cybersecurity, IoT & Blockchain',
      desc: 'Designing secure, scalable, and trustworthy systems for connected environments, focusing on network security and decentralized applications.',
      icon: <GlobeLock className="w-7 h-7" />,
      accent: "from-[#84CC16] to-emerald-400"
    },
    {
      title: 'Smart Systems & Healthcare',
      desc: 'Sustainable systems integrating sensing, analytics, and automation for resource-efficient technologies and improved quality of life.',
      icon: <Cpu className="w-7 h-7" />,
      accent: "from-purple-600 to-pink-400"
    },
    {
      title: 'Agriculture & Smart Farming',
      desc: 'Applying advanced data analytics and IoT-based monitoring to enhance productivity and promote precision farming practices.',
      icon: <Tractor className="w-7 h-7" />,
      accent: "from-[#84CC16] to-[#5D3A1A]"
    }
  ];

  return (
    <div className="pb-32">
      {/* Premium Header */}
      <header className="bg-white pt-28 pb-24 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#84CC16]/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black text-zinc-900 mb-10 tracking-tighter leading-none"
          >
            What We <span className="text-gray-300">Do.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-gray-400 font-medium max-w-4xl leading-relaxed"
          >
            Shaping curiosity-driven concepts into innovative, practical, and scalable solutions through systematic investigation.
          </motion.p>
        </div>
      </header>

      {/* Focus Areas - PDF Content */}
      <section className="py-32 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 text-left">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tighter uppercase">Our Focus Areas</h2>
              <div className="h-2 w-32 bg-[#84CC16] rounded-full" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {focusAreas.map((area, idx) => (
              <FocusCard key={idx} area={area} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Domains - PDF Content */}
      <section className="py-32 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-24 text-left">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase"
            >
              Domains We Work In
            </motion.h2>
            <p className="text-zinc-400 text-2xl font-medium max-w-3xl leading-relaxed">
              Applying advanced technological expertise to address technological, industrial, and societal challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -15, borderColor: '#84CC16' }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/40 p-12 rounded-[4rem] border border-zinc-700/50 hover:bg-zinc-800 transition-all duration-500 cursor-default group flex flex-col items-start text-left"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${domain.accent} rounded-[1.75rem] flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-transform`}>
                  <div className="text-white drop-shadow-md">{domain.icon}</div>
                </div>
                <h4 className="text-3xl font-black mb-6 tracking-tight leading-none">{domain.title}</h4>
                <p className="text-lg text-zinc-400 font-medium leading-relaxed">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
