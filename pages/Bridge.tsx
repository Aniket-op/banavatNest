
import React from 'react';
import { ArrowRight, Link as LinkIcon, Briefcase, GraduationCap, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Bridge = () => {
  return (
    <div className="pb-24">
      <header className="bg-zinc-50 pt-24 pb-20 border-b border-gray-100 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 mb-8 leading-tight tracking-tighter">
              Academia-Industry <span className="text-[#84CC16]">Bridge.</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              We connect theoretical knowledge with practical deployment, creating a structured ecosystem for students, faculty, and industry partners.
            </p>
          </div>
        </div>
      </header>

      {/* Model Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#84CC16] p-12 rounded-[3rem] relative shadow-2xl text-left"
             >
                <div className="absolute top-8 right-8 text-zinc-900 opacity-20">
                  <LinkIcon size={120} />
                </div>
                <h2 className="text-4xl font-black text-[#5D3A1A] mb-6">Collaboration Model</h2>
                <p className="text-[#5D3A1A] text-lg font-medium leading-relaxed mb-8">
                  Our framework connects stakeholders through well-defined roles and outcomes. We adopt a problem-driven approach where industry challenges are mapped to student projects.
                </p>
                <div className="space-y-4">
                  {['Joint Supervision', 'Milestone-based Projects', 'Technical Mentoring', 'TRL Alignment'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 bg-white/30 p-4 rounded-2xl border border-white/40">
                      <div className="w-2 h-2 rounded-full bg-[#5D3A1A]"></div>
                      <span className="font-bold text-[#5D3A1A]">{item}</span>
                    </div>
                  ))}
                </div>
             </motion.div>

             <div className="text-left">
                <h3 className="text-4xl font-black text-zinc-900 mb-10 tracking-tight">Empowering Stakeholders</h3>
                <div className="space-y-12">
                   <div className="flex gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-[1.25rem] flex items-center justify-center shadow-inner">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-zinc-900 mb-2">Opportunities for Students</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed">
                          Research internships, innovation challenges, and postgraduate prototype development aligned with industry needs (UG / PG / PhD).
                        </p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-purple-50 text-purple-600 rounded-[1.25rem] flex items-center justify-center shadow-inner">
                        <Briefcase className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-zinc-900 mb-2">Faculty & Researcher Engagement</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed">
                          Central roles as domain experts and PIs. Leading interdisciplinary teams and contributing to grant proposals and pilot deployments.
                        </p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="flex-shrink-0 w-14 h-14 bg-zinc-900 text-[#84CC16] rounded-[1.25rem] flex items-center justify-center shadow-inner">
                        <Building className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-zinc-900 mb-2">Industry Partnerships (PoCs)</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed">
                          Demonstrating technical feasibility through rapid prototyping, academic validation, and access to skilled talent.
                        </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-black text-zinc-900 mb-8 tracking-tight">Start Your Collaborative Journey</h2>
           <p className="text-gray-500 mb-12 text-xl font-medium">Whether you are a student seeking research exposure or an industry partner with a complex problem, we are here to bridge the gap.</p>
           <Link to="/contact" className="bg-[#5D3A1A] text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform inline-flex items-center shadow-xl shadow-zinc-900/10">
             Connect With Us <ArrowRight className="ml-3 w-6 h-6" />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Bridge;
