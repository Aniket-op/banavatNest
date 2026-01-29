
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pb-24">
      <header className="bg-white pt-24 pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 mb-8 tracking-tight">
            Contact <span className="text-lime-500">Us.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            Get in touch with our research team to explore collaboration opportunities or learn more about our ongoing projects.
          </p>
        </div>
      </header>

      <section className="py-24 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
               <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h3 className="text-2xl font-bold mb-8">Reach Out Directly</h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                       <div className="p-4 bg-lime-50 text-lime-600 rounded-2xl">
                          <Mail />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Email</p>
                          <p className="text-xl font-bold text-zinc-900">banavatnest@gmail.com</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                          <Phone />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Phone</p>
                          <p className="text-xl font-bold text-zinc-900">+91 99340 44777</p>
                          <p className="text-zinc-900">+91 80023 96506</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="p-4 bg-zinc-100 text-zinc-900 rounded-2xl">
                          <MapPin />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Registered Address</p>
                          <p className="text-lg font-bold text-zinc-900 leading-snug">
                            C/O Utsab Roy,<br/>
                            Vill–Bajitpur, Gobindpurbajitpur,<br/>
                            Sutahata, East Midnapore,<br/>
                            West Bengal, India – 721645
                          </p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-zinc-900 p-10 md:p-16 rounded-[3rem] text-white">
               <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                        <input type="text" className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-lime-400" placeholder="John Doe" />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                        <input type="email" className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-lime-400" placeholder="john@example.com" />
                     </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
                    <select className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-lime-400 appearance-none">
                       <option>Research Collaboration</option>
                       <option>Student Internship</option>
                       <option>Industry Partnership</option>
                       <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-lime-400" placeholder="How can we help?"></textarea>
                  </div>
                  <button className="w-full bg-lime-400 text-zinc-900 font-bold py-5 rounded-2xl flex items-center justify-center hover:bg-lime-300 transition-all">
                    Send Message <Send className="ml-3 w-5 h-5" />
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
