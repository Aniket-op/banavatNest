import React from 'react';
import { ArrowRight, Link as LinkIcon, Briefcase, GraduationCap, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Bridge = () => {
  return (
    <div className="pb-24 dark:bg-[#09090b] transition-colors duration-300">
      <header className="bg-zinc-50 dark:bg-zinc-900/40 pt-32 pb-20 border-b border-gray-100 dark:border-zinc-800 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h1 className="text-6xl md:text-8xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-8 leading-tight tracking-tighter">
              The <span className="text-[#84CC16]">Bridge.</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
              Connecting academic rigor with industrial relevance. We translate high-level research into deployable solutions.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white dark:bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#84CC16] p-10 rounded-[2.5rem] relative shadow-2xl text-left"
             >
                <div className="absolute top-8 right-8 text-zinc-900 opacity-5">
                  <LinkIcon size={100} />
                </div>
                <h2 className="text-3xl font-black text-[#5D3A1A] mb-4 uppercase">Collaboration Model</h2>
                <p className="text-[#5D3A1A] text-base font-medium leading-relaxed mb-8 opacity-90">
                  Mapping industry challenges to high-potential student projects under expert faculty supervision.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Joint Supervision', 'POC Development', 'Domain Mentoring', 'IP Alignment'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 bg-white/20 p-3.5 rounded-xl border border-white/30 backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D3A1A]"></div>
                      <span className="font-bold text-sm text-[#5D3A1A]">{item}</span>
                    </div>
                  ))}
                </div>
             </motion.div>

             <div className="text-left">
                <h3 className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-10 tracking-tight uppercase">Stakeholder Roles</h3>
                <div className="space-y-10">
                   {[
                     { icon: <GraduationCap />, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600", title: "Students", text: "Research internships and postgraduate prototype development." },
                     { icon: <Briefcase />, color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600", title: "Faculty", text: "Domain expertise and mentorship for industrial challenges." },
                     { icon: <Building />, color: "bg-zinc-100 dark:bg-zinc-800 text-[#84CC16]", title: "Industry", text: "Direct access to technical feasibility and skilled talent." }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-5 group">
                        <div className={`shrink-0 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center transition-transform group-hover:scale-105`}>
                          {/* Fix: use any for ReactElement props to allow className on cloneElement */}
                          {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{item.text}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">Ready to Collaborate?</h2>
           <p className="text-gray-500 dark:text-zinc-400 mb-10 text-lg font-medium">Whether you're a student seeking impact or a company seeking solutions, let's talk.</p>
           <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
             <Link to="/contact" className="bg-[#5D3A1A] dark:bg-zinc-100 text-white dark:text-zinc-900 px-10 py-4 rounded-full font-black text-lg transition-all inline-flex items-center shadow-lg">
               Connect Now <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Bridge;