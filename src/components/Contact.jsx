import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-8 md:px-16 bg-brutal-white text-brutal-black relative overflow-hidden border-b-8 border-brutal-black">

      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="font-brutal text-[20vw] leading-none whitespace-nowrap">CONTACT</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-brutal text-7xl md:text-[8rem] text-brutal-black tracking-tighter drop-shadow-[6px_6px_0_#FF4500] leading-none mb-12"
        >
          LET'S TALK
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <ContactCard icon={<Phone size={32} />} title="PHONE" detail="0979 780 531" delay={0} />
          <ContactCard icon={<Mail size={32} />} title="EMAIL" detail="vuongdieuhoa291@gmail.com" delay={0.1} />
          <ContactCard icon={<MapPin size={32} />} title="LOCATION" detail="Quoc Oai, Ha Noi" delay={0.2} />
          <ContactCard icon={<Calendar size={32} />} title="DOB" detail="29/01/2004" delay={0.3} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-8 border-t-4 border-brutal-black/20 w-full font-sans font-bold text-brutal-black/50 flex flex-col md:flex-row justify-between items-center"
        >
          <p>© 2026 VUONG DIEU HOA.</p>
          <p className="font-script text-4xl text-brutal-orange mt-4 md:mt-0 rotate-[-5deg]">Thank you for your attention</p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, detail, delay }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-brutal-white text-brutal-black p-6 border-4 border-brutal-black flex flex-col items-center justify-center text-center brutal-shadow-hover brutal-transition"
    >
      <div className="bg-brutal-orange p-4 rounded-full border-4 border-brutal-black mb-4">
        {icon}
      </div>
      <h4 className="font-brutal text-2xl mb-2">{title}</h4>
      <p className="font-sans font-bold text-lg break-all">{detail}</p>
    </motion.div>
  )
}
