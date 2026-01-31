
import React from 'react';

interface LegalProps {
  title: string;
  content: React.ReactNode;
}

const Legal: React.FC<LegalProps> = ({ title, content }) => {
  return (
    <div className="py-24 bg-white min-h-screen dark:bg-[#18181B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-12 dark:text-[#84CC16] ">{title}</h1>
        <div className="prose prose-zinc lg:prose-xl text-gray-600 leading-relaxed space-y-8 dark:text-white ">
          {content}
        </div>
      </div>
    </div>
  );
};

export const DisclaimerPage = () => (
  <Legal
    title="Disclaimer"
    content={
      <>
        <p>All information provided on this website is for informational purposes only. While every effort is made to ensure that the information presented is current and accurate, BanavatNest makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or suitability of the information.</p>
        <p>This website may contain information and links provided by various internal or external sources. BanavatNest does not independently verify, monitor, or guarantee the authenticity of such information and does not endorse, control, or assume responsibility for the content of any external websites or linked resources. Any reliance placed on the information available through this website is strictly at the user’s own risk.</p>
      </>
    }
  />
);

export const PrivacyPolicyPage = () => (
  <Legal
    title="Privacy Policy"
    content={
      <>
        <p>BanavatNest Private Limited (“BanavatNest”, “we”, “our”, “us”) respects the privacy of all users, collaborators, and stakeholders. This Privacy Policy describes how information shared with us is handled.</p>
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white ">1. Information We May Receive</h3>
          <p>We may receive information that you voluntarily provide, including problem statements, ideas, documents, contact details, and other materials submitted through our website or collaboration channels.</p>
          
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white ">2. How We Use Information</h3>
          <p>Information shared is used solely for research discussion, problem analysis, experimentation, collaborative innovation, feasibility assessment, and related communication.</p>
          
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white ">3. Sharing and Disclosure</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>We do not sell submitted information to third parties.</li>
            <li>We do not disclose submitted information externally without prior consent, except where required by law.</li>
            <li>We may share limited information with participating team members (students, scholars, faculty) on a need-to-know basis.</li>
          </ul>
        </div>
      </>
    }
  />
);

export const TermsOfUsePage = () => (
  <Legal
    title="Terms of Use"
    content={
      <>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 dark:text-white">1. Purpose of the Platform</h3>
            <p>BanavatNest operates as a research and innovation platform. Engagements are exploratory in nature and intended to support research-led problem solving and experimentation.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 dark:text-white">2. Originality of Submissions</h3>
            <p>Users confirm that any ideas or materials shared on this platform are original to the best of their knowledge, or that they have lawful permission to share them.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3 dark:text-white">3. Intellectual Property (IP)</h3>
            <p>Ownership, licensing, and usage rights related to submitted ideas and research outputs shall be governed by mutually agreed terms or separate written agreements. No transfer of IP is implied by submission alone.</p>
          </div>
        </div>
      </>
    }
  />
);
