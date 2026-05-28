import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Award, GraduationCap, CheckCircle, Eye, X } from 'lucide-react';

export default function Credentials() {
  const [showCertModal, setShowCertModal] = useState(false);

  const ieltsScores = [
    { label: 'LISTENING', score: '8.0' },
    { label: 'READING', score: '9.0' },
    { label: 'WRITING', score: '7.5' },
    { label: 'SPEAKING', score: '6.0' }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-brutal-beige text-brutal-black relative border-b-4 border-brutal-black font-sans">

      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="font-brutal text-[25vw] leading-none whitespace-nowrap select-none">RECORDS</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <div className="mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-brutal text-8xl text-brutal-black tracking-tight leading-none uppercase select-none mb-4"
          >
            CREDENTIALS
          </motion.h2>
          <p className="text-brutal-orange font-bold uppercase tracking-wider text-sm flex items-center gap-1.5">
            <svg className="w-4 h-4 text-brutal-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            Academic milestones & career documents
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Academic & IELTS Scores */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">

            {/* IELTS Scorecard */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-brutal-white p-6 border-4 border-brutal-black brutal-shadow rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-brutal-orange" size={28} />
                <h3 className="font-brutal text-3xl leading-none uppercase">IELTS Academic Scorecard</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {ieltsScores.map((item, idx) => (
                  <div key={idx} className="bg-brutal-beige border-2 border-brutal-black p-4 rounded-xl text-center">
                    <div className="text-[10px] font-bold text-brutal-black/60 tracking-wider">{item.label}</div>
                    <div className="font-brutal text-3xl text-brutal-black mt-1">{item.score}</div>
                  </div>
                ))}
              </div>

              <div className="bg-brutal-orange text-brutal-white border-2 border-brutal-black p-4 rounded-xl flex justify-between items-center brutal-shadow">
                <span className="font-bold text-xs uppercase tracking-wider">Overall Band Score:</span>
                <span className="font-brutal text-3xl">7.5 OVERALL</span>
              </div>

              <button
                onClick={() => setShowCertModal(true)}
                className="w-full bg-brutal-white hover:bg-brutal-beige text-brutal-black border-2 border-brutal-black py-2.5 px-4 font-bold text-xs uppercase text-center rounded-xl brutal-shadow-hover flex items-center justify-center gap-2 mt-4 transition-all"
              >
                <Eye size={16} />
                View Official IELTS Certificate
              </button>
            </motion.div>

            {/* University Degrees & Proctors */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brutal-white p-6 border-4 border-brutal-black brutal-shadow rounded-2xl flex-grow flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-brutal-orange" size={28} />
                <h3 className="font-brutal text-3xl leading-none uppercase">Academic History</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-accent-yellow p-2 rounded border-2 border-brutal-black shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-brutal-black">Bachelor in English Linguistics for International Relations</h4>
                    <p className="text-xs font-semibold text-brutal-dark/70">Diplomatic Academy of Vietnam (DAV) • GPA 3.4/4.0 • 2022 - 2026</p>
                    <p className="text-xs font-medium text-brutal-dark/75 mt-1">Focus on translation theory, global affairs communication, and educational pedagogy.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-accent-pink p-2 rounded border-2 border-brutal-black shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-brutal-black">IELTS Writing - Teacher Training Program</h4>
                    <p className="text-xs font-semibold text-brutal-dark/70">Provided by IDP • 2026</p>
                    <p className="text-xs font-medium text-brutal-dark/75 mt-1">Professional training on assessment criteria, teaching methodology, and student evaluation guidelines.</p>
                  </div>
                </div>


              </div>

              <div className="mt-6 pt-4 border-t border-brutal-black/20 text-xs font-bold text-brutal-black/60 uppercase">
                Status: Completed Academic Session 2026
              </div>
            </motion.div>

          </div>

          {/* Right Column: CV PDF Download Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full bg-brutal-white p-6 border-4 border-brutal-black brutal-shadow rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-6 text-brutal-orange">
                  <FileText size={28} />
                  <h3 className="font-brutal text-3xl leading-none uppercase">Curriculum Vitae</h3>
                </div>

                {/* Real CV Document Preview */}
                <a
                  href="/vuongdieuhoa_assets/CV English (Hướng nghiệp).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block border-2 border-brutal-black rounded-xl aspect-[3/4] overflow-hidden mb-6 relative group brutal-shadow-hover transition-all bg-brutal-dark"
                >
                  <img
                    src="/vuongdieuhoa_assets/vuongdieuhoa_cv_preview.png"
                    alt="Vuong Dieu Hoa Curriculum Vitae Preview"
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    draggable="false"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-brutal-orange text-brutal-white font-bold text-xs uppercase py-2 px-4 border-2 border-brutal-black brutal-shadow">
                      View CV in full ↗
                    </span>
                  </div>
                </a>

                <p className="text-xs font-bold leading-relaxed text-brutal-dark/70 mb-6">
                  Check my professional background, complete work projects history, and academic profile. Available in English.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="/vuongdieuhoa_assets/CV English (Hướng nghiệp).pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brutal-white hover:bg-brutal-beige text-brutal-black border-2 border-brutal-black py-3 px-4 font-bold text-xs uppercase text-center rounded-xl brutal-shadow-hover flex items-center justify-center gap-2"
                >
                  <FileText size={16} />
                  View CV in browser ↗
                </a>

                <a
                  href="/vuongdieuhoa_assets/CV English (Hướng nghiệp).pdf"
                  download="Vuong Dieu Hoa - CV English.pdf"
                  className="bg-brutal-orange hover:bg-brutal-orange/95 text-brutal-white border-2 border-brutal-black py-3 px-4 font-bold text-xs uppercase text-center rounded-xl brutal-shadow-hover flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download English CV (PDF) ↓
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>

      {/* IELTS Certificate Lightbox Modal */}
      <AnimatePresence>
        {showCertModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brutal-white text-brutal-black border-4 border-brutal-black brutal-shadow rounded-2xl overflow-hidden w-full max-w-3xl relative flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowCertModal(false)}
                className="absolute top-4 right-4 z-30 bg-brutal-orange text-brutal-white border-2 border-brutal-black p-2 rounded-full hover:scale-115 transition-transform brutal-shadow"
              >
                <X size={20} />
              </button>

              {/* Title Header */}
              <div className="p-6 border-b-4 border-brutal-black bg-brutal-beige">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brutal-orange text-brutal-white px-2 py-0.5 rounded border border-brutal-black">VERIFIED RECORD</span>
                <h3 className="font-brutal text-3xl leading-none uppercase mt-2">IELTS Test Report Form (TRF)</h3>
              </div>

              {/* Certificate Image Frame */}
              <div className="bg-brutal-dark p-4 flex items-center justify-center overflow-auto max-h-[70vh]">
                <img
                  src="/vuongdieuhoa_assets/vuongdieuhoa_ielts_cert.jpg"
                  alt="Official IELTS 7.5 Certificate"
                  className="max-w-full h-auto object-contain rounded-lg border border-brutal-black/20"
                  draggable="false"
                />
              </div>

              {/* Info Footer */}
              <div className="p-4 bg-brutal-white border-t-2 border-brutal-black flex flex-col sm:flex-row justify-between items-center text-xs font-bold text-brutal-black/60 uppercase gap-2">
                <div>Candidate: VUONG DIEU HOA</div>
                <div>Test Date: 2024 • IDP VIETNAM</div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
