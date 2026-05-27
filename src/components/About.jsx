import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-8 md:px-16 bg-brutal-black text-brutal-white border-b-8 border-brutal-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h2 className="font-brutal text-8xl md:text-[10rem] mb-8 text-brutal-orange drop-shadow-[6px_6px_0_rgba(244,244,240,1)] leading-none">ABOUT<br />ME</h2>
          <p className="font-sans text-xl md:text-2xl leading-relaxed max-w-2xl text-brutal-white/90">
            Majoring in English Linguistics from the Diplomatic Academy of Vietnam, I am passionate about teaching and guiding students in mastering the English language.
          </p>
          <br />
          <p className="font-sans text-xl md:text-2xl leading-relaxed max-w-2xl text-brutal-white/90">
            My academic training has strengthened my understanding of linguistics, communication, and cultural context, which I apply to create engaging and effective learning experiences. Eager to inspire confidence and curiosity in learners, I bring strong language skills, adaptability, and a commitment to helping students achieve their full potential.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="border-8 border-brutal-orange p-4 bg-brutal-black md:rotate-3 brutal-transition hover:rotate-0"
        >
          <img src="/vuongdieuhoa_model_pose.png" alt="Vuong Dieu Hoa" className="w-full h-auto grayscale contrast-150 object-cover aspect-[3/4]" />
        </motion.div>
      </div>
    </section>
  )
}
