import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen bg-brutal-orange text-brutal-black relative flex flex-col justify-between border-b-4 border-brutal-black font-sans overflow-hidden">

      {/* 3-Column Top Header Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-brutal-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-brutal-black font-bold uppercase tracking-wider text-xs md:text-sm text-center md:text-left bg-brutal-white/40 z-10">
        <div className="p-4 md:p-6 flex items-center justify-center md:justify-start">
          <span>VUONG DIEU HOA • IELTS TUTOR</span>
        </div>
        <div className="p-4 md:p-6 flex items-center justify-center">
          <span>DIPLOMATIC ACADEMY OF VIETNAM</span>
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-center text-center md:text-right text-[11px] md:text-xs leading-tight">
          <div>PHONE: 0979 780 531</div>
          <div>EMAIL: VUONGDIEUHOA291@GMAIL.COM</div>
          <div>LOCATION: HA NOI, VIETNAM</div>
        </div>
      </div>

      {/* Center Stage: Split layout with Text & Looping Video */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 md:px-12 py-10 relative z-10">

        {/* Left Column: Bold Titles */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-0"
          >
            <h2 className="font-brutal text-7xl md:text-9xl leading-[0.8] tracking-tighter uppercase text-brutal-black select-none">
              WELCOME TO
            </h2>
            <h2 className="font-brutal text-7xl md:text-9xl leading-[0.8] tracking-tighter uppercase text-brutal-white drop-shadow-[5px_5px_0_#000] select-none">
              MY PORTFOLIO
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 inline-block bg-brutal-white text-brutal-black font-bold text-sm uppercase py-2 px-4 border-2 border-brutal-black brutal-shadow max-w-max"
          >
            DIGITAL MEDIA • LANGUAGE
          </motion.div>
        </div>

        {/* Right Column: Framed image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.8, rotate: 3, opacity: 0 }}
            animate={{ scale: 1, rotate: -1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="w-full max-w-sm bg-brutal-white p-4 border-4 border-brutal-black brutal-shadow rounded-2xl relative"
          >
            <div className="aspect-[9/16] md:aspect-[3/4] bg-brutal-dark overflow-hidden border-2 border-brutal-black rounded-lg relative">
              <img
                src="/vuongdieuhoa_assets/z7875554717545_646e59e1d07f5ed696a0b6cbe5ee67cf.jpg"
                alt="Vuong Dieu Hoa Portrait"
                className="w-full h-full object-cover transition-all duration-500"
                draggable="false"
              />
            </div>

            <div className="mt-3 flex justify-between items-center text-xs font-bold uppercase text-brutal-black/70">
              <span>PORTRAIT_DAV.JPG</span>
              <span>2026</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Footer Title */}
      <div className="border-t-4 border-brutal-black overflow-hidden py-4 bg-brutal-black">
        <motion.div
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-brutal text-[14vw] leading-[0.8] tracking-tighter uppercase text-brutal-orange m-0 select-none">
            SHOWCASE
          </h1>
        </motion.div>
      </div>

    </section>
  );
}


