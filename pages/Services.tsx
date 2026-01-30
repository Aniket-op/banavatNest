import React from 'react';
import { Microscope, Code2, Users2, Zap, BrainCircuit, GlobeLock, Cpu, Tractor } from 'lucide-react';
import { motion } from 'framer-motion';

const FocusCard: React.FC<{ area: any; idx: number }> = ({ area, idx }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
    transition={{ duration: 0.25, delay: idx * 0.05 }}
    className={`bg-white dark:bg-zinc-900/50 p-10 rounded-[2.5rem] border border-gray-100 dark:border-zinc-800 transition-all duration-200 group flex flex-col items-start h-full text-left shadow-sm hover:shadow-xl`}
  >
    <div className={`w-16 h-16 ${area.bgColor} dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
      {area.icon}
    </div>
    <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-4 tracking-tighter">{area.title}</h3>
    <p className="text-base text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{area.desc}</p>
  </motion.div>
);

const Services = () => {
  const focusAreas = [
    {
      title: 'Research & Development',
      desc: 'Addressing real-world problems through systematic investigation, analytical modeling, and experimental validation.',
      icon: <Microscope className="w-7 h-7 text-blue-500" />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Product Prototyping',
      desc: 'Integrating design, engineering, and testing to translate ideas into functional, industrial-grade prototypes.',
      icon: <Code2 className="w-7 h-7 text-[#84CC16]" />,
      bgColor: 'bg-lime-50'
    },
    {
      title: 'Academia Collaboration',
      desc: 'Enabling student-driven projects and faculty-led innovation to ensure high-impact knowledge transfer.',
      icon: <Users2 className="w-7 h-7 text-purple-500" />,
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Tech Transfer',
      desc: 'Transforming research outputs into deployable technologies through IP development and POC validation.',
      icon: <Zap className="w-7 h-7 text-amber-500" />,
      bgColor: 'bg-amber-50'
    }
  ];

  const domains = [
    {
      title: 'AI, ML & Data Science',
      desc: 'Intelligent algorithms for prediction and optimization across engineering and health sectors.',
      icon: <BrainCircuit className="w-6 h-6" />,
      iconGradient: "from-blue-600 to-cyan-400"
    },
    {
      title: 'Cybersecurity & IoT',
      desc: 'Secure and decentralized systems for connected environments and trustless networks.',
      icon: <GlobeLock className="w-6 h-6" />,
      iconGradient: "from-[#84CC16] to-emerald-400"
    },
    {
      title: 'Smart Systems',
      desc: 'Integrating sensing and automation for resource-efficient technologies.',
      icon: <Cpu className="w-6 h-6" />,
      iconGradient: "from-purple-600 to-pink-400"
    },
    {
      title: 'Precision Agriculture',
      desc: 'Advanced data analytics and IoT monitoring to enhance farming productivity.',
      icon: <Tractor className="w-6 h-6" />,
      iconGradient: "from-[#84CC16] to-[#5D3A1A]"
    }
  ];

  return (
    <div className="pb-32 dark:bg-[#09090b] transition-colors duration-300">
      <header className="bg-white dark:bg-zinc-900/20 pt-32 pb-20 border-b border-gray-100 dark:border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#84CC16]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter"
          >
            What We <span className="text-gray-200 dark:text-zinc-800">Do.</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-400 dark:text-zinc-400 font-medium max-w-3xl leading-relaxed">
            From experimental development to market-ready prototypes, we provide the technical foundation for innovation.
          </p>
        </div>
      </header>

      <section className="py-24 grid-bg dark:bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-left">
            <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-4 tracking-tighter uppercase">Focus Areas</h2>
            <div className="h-1.5 w-24 bg-[#84CC16] rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => (
              <FocusCard key={idx} area={area} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-black border-y border-gray-100 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-16 tracking-tighter uppercase text-left">Key Domains</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {domains.map((domain, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-zinc-900/50 p-8 rounded-[2rem] border border-gray-100 dark:border-zinc-800 text-left group transition-all shadow-sm hover:shadow-lg"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${domain.iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-sm`}>
                  <div className="text-white">{domain.icon}</div>
                </div>
                <h4 className="text-xl font-black text-zinc-900 dark:text-white mb-3 tracking-tight">{domain.title}</h4>
                <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; export default Services;