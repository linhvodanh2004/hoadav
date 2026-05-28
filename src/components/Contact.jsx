import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-brutal-white text-brutal-black relative overflow-hidden border-b-4 border-brutal-black font-sans">

      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="font-brutal text-[20vw] leading-none whitespace-nowrap select-none">CONTACT</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-brutal text-8xl md:text-[8rem] text-brutal-black tracking-tighter drop-shadow-[5px_5px_0_#d25e36] leading-none mb-12 uppercase select-none"
        >
          LET'S TALK
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <ContactCard 
            icon={<Phone size={28} />} 
            title="PHONE" 
            detail="0979 780 531" 
            delay={0}
            bgClass="bg-brutal-white"
          />
          <ContactCard 
            icon={<Mail size={28} />} 
            title="EMAIL" 
            detail="vuongdieuhoa291@gmail.com" 
            delay={0.1}
            bgClass="bg-accent-yellow"
          />
          <ContactCard 
            icon={<MapPin size={28} />} 
            title="LOCATION" 
            detail="Ha Noi, Vietnam" 
            delay={0.2}
            bgClass="bg-accent-pink"
          />
          <ContactCard 
            icon={<Calendar size={28} />} 
            title="DOB" 
            detail="29/01/2004" 
            delay={0.3}
            bgClass="bg-brutal-beige"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-8 border-t-2 border-brutal-black/20 w-full flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-bold text-brutal-black/60"
        >
          <p>© 2026 VUONG DIEU HOA. ALL RIGHTS RESERVED.</p>
          <p className="font-script text-4xl md:text-5xl text-brutal-orange mt-4 md:mt-0 rotate-[-4deg]">
            Thank you for your attention
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, detail, delay, bgClass }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`${bgClass} text-brutal-black p-6 border-4 border-brutal-black rounded-xl brutal-shadow-hover flex flex-col items-center justify-center text-center`}
    >
      <div className="bg-brutal-orange text-brutal-white p-3 rounded-full border-2 border-brutal-black mb-4 brutal-shadow">
        {icon}
      </div>
      <h4 className="font-brutal text-3xl mb-2 tracking-wide">{title}</h4>
      <p className="font-sans font-bold text-sm break-all">{detail}</p>
    </motion.div>
  )
}

