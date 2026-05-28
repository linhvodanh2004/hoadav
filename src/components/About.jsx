import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  const experiences = [
    { role: "Social Media Intern", org: "FPT Software", years: "07/2025 - 03/2026" },
    { role: "English Teacher", org: "AMES English", years: "02/2025 - 12/2025" },
    { role: "English Teacher", org: "Tung Tran English", years: "06/2024 - 01/2025" },
    { role: "English Assistant & Tester", org: "APTIS EASY Center", years: "12/2023 - 09/2025" }
  ];

  const degrees = [
    { name: "Bachelor in English Linguistics", org: "Diplomatic Academy of VN (GPA 3.4)", years: "2022-2026" },
    { name: "High School Degree", org: "Minh Khai HS", years: "2019-2022" }
  ];

  const capabilities = [
    "IELTS & Academic Prep",
    "Video Production & Editing",
    "Event Organizing",
    "Digital Content Writing"
  ];

  const languages = [
    { name: "Vietnamese", level: "Native" },
    { name: "English", level: "Advanced (IELTS 7.5)" },
    { name: "French", level: "Basic Communication" }
  ];

  // Carousel portraits list
  const portraits = [
    {
      src: "/vuongdieuhoa_assets/z7875554717545_646e59e1d07f5ed696a0b6cbe5ee67cf.jpg",
      caption: "DAV Academy Portrait"
    },
    {
      src: "/vuongdieuhoa_assets/z7875554718652_d18c0c23aba40962a0f8748c811c46dc.jpg",
      caption: "DAV Uniform Heart Gesture"
    },
    {
      src: "/vuongdieuhoa_assets/z7875554734391_a5678e0b92cfcde76202cae30433da52.jpg",
      caption: "Concert Stage Selfie"
    },
    {
      src: "/vuongdieuhoa_assets/z7875554850202_caf7a817bebfc1285b4a35af7b97b2f4.jpg",
      caption: "DAV Campus Walk"
    }
  ];

  const [activePhoto, setActivePhoto] = useState(0);

  // Auto scroll carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % portraits.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-brutal-beige text-brutal-black relative border-b-4 border-brutal-black font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Biography and Sub-Grid */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="font-brutal text-8xl text-brutal-black tracking-tight leading-none mb-6 select-none"
            >
              PROFILE
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-bold leading-relaxed mb-6 text-brutal-dark"
            >
              As an English Linguistics major at the{" "}
              <a
                href="https://dav.edu.vn"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-brutal-orange decoration-4 underline-offset-4 hover:text-brutal-orange transition-colors"
              >
                Diplomatic Academy of Vietnam
              </a>
              , I am a bilingual communicator passionate about event hosting, media production, and language tutoring.
              Whether emceeing campus galas, coordinating FPT Software's cultural workshops, or tutoring English learners,
              I combine linguistic expertise with a vibrant stage presence.
            </motion.p>

            {/* Quick Contact Badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <span className="bg-brutal-white border-2 border-brutal-black font-bold text-xs py-1.5 px-3 rounded-full brutal-shadow">
                📧 VUONGDIEUHOA291@GMAIL.COM
              </span>
              <span className="bg-brutal-white border-2 border-brutal-black font-bold text-xs py-1.5 px-3 rounded-full brutal-shadow">
                📞 0979 780 531
              </span>
              <span className="bg-brutal-white border-2 border-brutal-black font-bold text-xs py-1.5 px-3 rounded-full brutal-shadow">
                📍 HA NOI, VIETNAM
              </span>
            </motion.div>
          </div>

          <hr className="border-t-2 border-brutal-black/30 my-6" />

          {/* Sub-grid of detailed info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs md:text-sm pt-4">

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="font-brutal text-2xl text-brutal-orange uppercase select-none">Experience</h3>
              <div className="space-y-3 font-sans font-bold">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-brutal-black/20 pl-3">
                    <p className="text-brutal-black">{exp.role}</p>
                    <p className="text-xs text-brutal-dark/70 font-semibold">{exp.org} | {exp.years}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Degrees */}
            <div className="space-y-4">
              <h3 className="font-brutal text-2xl text-brutal-orange uppercase select-none">Academic</h3>
              <div className="space-y-3 font-sans font-bold">
                {degrees.map((deg, idx) => (
                  <div key={idx} className="border-l-2 border-brutal-black/20 pl-3">
                    <p className="text-brutal-black">{deg.name}</p>
                    <p className="text-xs text-brutal-dark/70 font-semibold">{deg.org} | {deg.years}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="space-y-4">
              <h3 className="font-brutal text-2xl text-brutal-orange uppercase select-none">Services</h3>
              <ul className="space-y-2 font-bold font-sans">
                {capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brutal-orange rounded-full"></span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h3 className="font-brutal text-2xl text-brutal-orange uppercase select-none">Languages</h3>
              <div className="space-y-3 font-sans font-bold">
                {languages.map((lang, idx) => (
                  <div key={idx} className="border-l-2 border-brutal-black/20 pl-3">
                    <p className="text-brutal-black">{lang.name}</p>
                    <p className="text-xs text-brutal-orange font-semibold">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Polaroid Carousel & Rotating Badge */}
        <div className="lg:col-span-5 flex justify-center relative pt-8 lg:pt-0">

          {/* Polaroid Frame */}
          <motion.div
            initial={{ rotate: -2, scale: 0.95 }}
            whileInView={{ rotate: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-sm bg-brutal-white p-4 pb-12 border-4 border-brutal-black brutal-shadow rounded-sm relative z-10"
          >
            {/* Slide Show Container */}
            <div className="aspect-[4/5] bg-brutal-dark overflow-hidden border-2 border-brutal-black relative mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePhoto}
                  src={portraits[activePhoto].src}
                  alt={portraits[activePhoto].caption}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Slide dots */}
              <div className="absolute bottom-3 right-3 z-20 flex gap-1 bg-black/60 px-2 py-1 rounded">
                {portraits.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === activePhoto ? 'bg-brutal-orange w-4' : 'bg-brutal-white/60'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Captions / Cursive overlay */}
            <div className="text-center font-bold uppercase tracking-wider text-xs text-brutal-black/80">
              {portraits[activePhoto].caption}
            </div>

            {/* Overlaid script greeting */}
            <div className="absolute top-[-25px] left-[-20px] z-20 pointer-events-none">
              <span className="font-script text-5xl text-brutal-orange font-bold drop-shadow-[2px_2px_0_#fff] rotate-[-8deg] block whitespace-nowrap">
                Nice to meet you!
              </span>
            </div>
          </motion.div>

          {/* Rotating Circular badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute bottom-[-30px] right-[-20px] w-32 h-32 z-20 hidden md:block select-none pointer-events-none"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <circle cx="50" cy="50" r="37" className="fill-accent-green stroke-2 stroke-brutal-black" />
              {/* Central star */}
              <path d="M50 38 L53 45 L61 45 L55 50 L57 58 L50 53 L43 58 L45 50 L39 45 L47 45 Z" className="fill-accent-yellow stroke-1 stroke-brutal-black" />
              <text className="font-sans font-bold text-[8px] uppercase tracking-wider fill-brutal-white">
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  • BILINGUAL MC • IELTS 7.5 TUTOR • MEDIA PRODUCER
                </textPath>
              </text>
            </svg>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
