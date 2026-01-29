
import React from 'react';
import { ArrowRight, Brain, Shield, Zap, Microscope, GraduationCap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import FluidCursor from '../components/FluidCursor';

const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50C20 50 40 40 60 40C80 40 80 60 60 80C40 100 20 50 20 50Z" fill="#84CC16" fillOpacity="0.4" />
    <path d="M20 50C20 50 50 60 70 40" stroke="#84CC16" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DomainCard = ({ item, idx }: { item: any, idx: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
      className={`
        group relative rounded-[3rem] p-10 transition-all duration-500 
        ${item.dark ? "bg-[#18181B] text-white" : "bg-white text-zinc-900"}
        border ${item.dark ? "border-zinc-800" : "border-gray-100"}
        shadow-sm hover:shadow-2xl overflow-hidden h-72 flex flex-col justify-between
      `}
    >
      <div
        className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700
          bg-gradient-to-br ${item.accent}`}
      />
      
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

      <div className="relative z-10 text-left">
        <div className={`
          w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-2xl font-bold shadow-xl relative overflow-hidden mb-8
          bg-gradient-to-br ${item.accent} transition-transform group-hover:rotate-6
        `}>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 text-white drop-shadow-md">{item.icon}</span>
        </div>

        <h3 className="text-2xl font-black tracking-tight">{item.title}</h3>
        <p className={`text-base font-medium mt-2 leading-relaxed ${item.dark ? "text-white/60" : "text-gray-400"}`}>
          {item.desc}
        </p>
      </div>

      <div className={`absolute bottom-0 left-0 w-full h-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-r ${item.accent}`} />
    </motion.div>
  );
};

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  const domains = [
    {
      title: "AI & ML",
      desc: "Artificial Intelligence, Machine Learning & Data Science",
      icon: <Brain className="w-8 h-8" />,
      accent: "from-blue-600 to-cyan-400",
    },
    {
      title: "Cybersecurity",
      desc: "Cybersecurity, Internet of Things & Blockchain",
      icon: <Shield className="w-8 h-8" />,
      accent: "from-[#84CC16] to-emerald-400",
    },
    {
      title: "Smart Systems",
      desc: "Healthcare & Sustainability focus areas",
      icon: <Microscope className="w-8 h-8" />,
      accent: "from-purple-600 to-pink-400",
    },
    {
      title: "Agriculture",
      desc: "Smart Farming and Precision Agriculture",
      icon: <Zap className="w-8 h-8" />,
      accent: "from-[#84CC16] to-[#5D3A1A]",
      dark: true,
    },
  ];

  return (
    <div className="relative">
      {/* Home Screen Fluid Cursor Effect */}
      <FluidCursor />

      {/* Hero Section */}
      <section className="relative overflow-hidden grid-bg pt-16 pb-24 md:pt-28 md:pb-40">
        {/* Decorative Attached Leaves */}
        <Leaf className="absolute top-[25%] left-[5%] rotate-[-30deg] opacity-20 hidden lg:block" />
        <Leaf className="absolute top-[40%] right-[8%] rotate-[45deg] opacity-20 hidden lg:block" />
        
        <motion.div 
          style={{ y: y1 }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-[#84CC16]/5 blur-[140px] rounded-full"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-lime-50 border border-lime-100/50 mb-10 shadow-sm"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#84CC16] animate-pulse"></span>
            <span className="text-[10px] font-black text-[#65A30D] uppercase tracking-[0.2em]">Research-Led Innovation Ecosystem</span>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 tracking-tighter leading-[0.95] mb-10"
              >
                Build with <span className="text-gray-300">Purpose.</span> <br/>
                Nurture to <span className="text-[#84CC16]">Impact.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed mb-12 max-w-2xl"
              >
                BanavatNest transforms curiosity into practical, scalable, and impactful solutions through systematic investigation.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              >
                <Link to="/services" className="bg-[#5D3A1A] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#4B2C13] transition-all shadow-2xl shadow-zinc-900/10 flex items-center justify-center hover:scale-[1.05] active:scale-95 group">
                  What We Do <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/bridge" className="border-2 border-zinc-900 bg-white text-zinc-900 px-10 py-5 rounded-full font-black text-lg hover:bg-zinc-900 hover:text-white transition-all flex items-center justify-center hover:scale-[1.05] active:scale-95">
                  Our Bridge
                </Link>
              </motion.div>
            </div>

            <motion.div 
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {domains.map((item, idx) => (
                <DomainCard key={idx} item={item} idx={idx} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - PDF Content */}
      <section className="py-32 bg-zinc-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">Creation and <span className="text-[#84CC16]">Nurturing.</span></h2>
              <div className="w-20 h-1 bg-[#84CC16] mb-8" />
              <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                BanavatNest represents a unified philosophy where ideas are thoughtfully built and carefully grown into impactful innovations.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-zinc-800 p-12 rounded-[4rem] border border-zinc-700/50 text-left"
               >
                 <div className="text-[#84CC16] font-black text-sm uppercase tracking-widest mb-6">Our Mission</div>
                 <p className="text-xl font-bold text-white leading-snug">To create and nurture ideas through research and experimental development, shaping curiosity-driven concepts into innovative, practical, and scalable solutions.</p>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="bg-[#84CC16] p-12 rounded-[4rem] text-left"
               >
                 <div className="text-[#5D3A1A] font-black text-sm uppercase tracking-widest mb-6">Our Vision</div>
                 <p className="text-xl font-bold text-zinc-900 leading-snug">To become a research-driven innovation ecosystem that nurtures ideas from curiosity to impact through continuous experimentation and learning.</p>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Preview */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 tracking-tighter">Bridging the Gap.</h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Acting as a dynamic bridge between academia, industry, and society to address real-world challenges through co-creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <GraduationCap className="w-10 h-10 text-[#84CC16]" />, title: "Students", desc: "Project-based learning and early exposure to real-world industrial challenges.", bg: "bg-white" },
              { icon: <Microscope className="w-10 h-10 text-blue-600" />, title: "Faculty", desc: "Mentors and domain experts guiding projects with academic rigor.", bg: "bg-white" },
              { icon: <Building2 className="w-10 h-10 text-zinc-800" />, title: "Industry", desc: "Innovation-driven solutions providing technical feasibility and prototyping.", bg: "bg-white" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, scale: 1.02 }}
                viewport={{ once: true }}
                className={`p-14 rounded-[4rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-left group ${item.bg}`}
              >
                <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">{item.title}</h3>
                <p className="text-lg text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
