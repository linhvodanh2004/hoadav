import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brutal-orange text-brutal-black relative overflow-hidden p-8 border-b-8 border-brutal-black">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[url('/architecture.png')] bg-cover bg-center mix-blend-multiply opacity-30"></div>

      <div className="z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="font-brutal text-8xl md:text-[14rem] leading-[0.8] tracking-tighter uppercase text-brutal-white drop-shadow-[10px_10px_0_rgba(10,10,10,1)]">
            Vuong
            <br /> Dieu Hoa
          </h1>
          <motion.span 
            initial={{ rotate: -5, scale: 0 }}
            animate={{ rotate: -10, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="font-script text-6xl md:text-9xl text-brutal-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-20 pointer-events-none"
          >
            English Teacher
          </motion.span>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1 }}
           className="mt-20 border-4 border-brutal-black bg-brutal-white text-brutal-black font-sans font-bold text-xl md:text-2xl uppercase py-4 px-8 brutal-shadow"
        >
          Inspiring Confidence. Mastering Language.
        </motion.div>
      </div>
    </section>
  )
}
