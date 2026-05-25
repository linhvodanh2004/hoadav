import { motion } from 'framer-motion';

export default function EducationSkills() {
  return (
    <section className="py-24 px-8 md:px-16 bg-brutal-orange text-brutal-black border-b-8 border-brutal-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Column */}
        <div>
          <h2 className="font-brutal text-7xl md:text-9xl mb-12 text-brutal-white drop-shadow-[5px_5px_0_rgba(10,10,10,1)] leading-none">EDUCATION</h2>
          
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 border-4 border-brutal-black bg-brutal-white p-8 brutal-shadow"
          >
            <h3 className="font-brutal text-4xl text-brutal-black">DIPLOMATIC ACADEMY OF VIETNAM</h3>
            <h4 className="font-sans font-black text-xl uppercase mt-2 text-brutal-orange">English Linguistics for International Relations</h4>
            <div className="mt-4 flex flex-wrap gap-4 font-sans font-bold">
              <span className="bg-brutal-black text-brutal-white px-3 py-1">2022 - 2026</span>
              <span className="border-2 border-brutal-black px-3 py-1">GPA: 3.2/4</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-4 border-brutal-black bg-brutal-white p-8 brutal-shadow"
          >
            <h3 className="font-brutal text-4xl text-brutal-black">MINH KHAI HIGH SCHOOL</h3>
            <div className="mt-4 flex flex-wrap gap-4 font-sans font-bold">
              <span className="bg-brutal-black text-brutal-white px-3 py-1">2019 - 2022</span>
            </div>
            <ul className="mt-4 font-sans text-lg list-none space-y-2 font-semibold">
               <li className="flex items-center"><span className="text-brutal-orange mr-2">■</span> Final grade: 9.1/10 (top 1%)</li>
               <li className="flex items-center"><span className="text-brutal-orange mr-2">■</span> English grade: 9.8/10</li>
            </ul>
          </motion.div>
        </div>

        {/* Skills Column */}
        <div>
          <h2 className="font-brutal text-7xl md:text-9xl mb-12 text-brutal-white drop-shadow-[5px_5px_0_rgba(10,10,10,1)] leading-none text-left lg:text-right">EXPERTISE</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               className="bg-brutal-black text-brutal-white p-6 border-4 border-brutal-black brutal-shadow-hover brutal-transition"
            >
              <h4 className="font-brutal text-3xl mb-4 text-brutal-orange">SKILLS</h4>
              <ul className="font-sans text-lg space-y-2 font-bold">
                <li>Presentation</li>
                <li>Organization & Planning</li>
                <li>Teamwork</li>
                <li>Editing (Ps, Canva, Capcut)</li>
              </ul>
            </motion.div>

            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-brutal-white text-brutal-black p-6 border-4 border-brutal-black brutal-shadow-hover brutal-transition"
            >
              <h4 className="font-brutal text-3xl mb-4 text-brutal-orange">LANGUAGES</h4>
              <ul className="font-sans text-lg space-y-2 font-bold">
                <li>Vietnamese <span className="font-normal text-sm bg-brutal-black text-brutal-white px-2 py-0.5 ml-2">Native</span></li>
                <li>English <span className="font-normal text-sm bg-brutal-black text-brutal-white px-2 py-0.5 ml-2">Advanced</span></li>
                <li>French <span className="font-normal text-sm bg-brutal-black text-brutal-white px-2 py-0.5 ml-2">Basic</span></li>
              </ul>
            </motion.div>

            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="sm:col-span-2 bg-brutal-black text-brutal-white p-6 border-4 border-brutal-black flex flex-col items-center justify-center text-center brutal-shadow-hover brutal-transition rotate-1 hover:rotate-0 mt-4"
            >
              <h4 className="font-brutal text-4xl text-brutal-orange">CERTIFICATE</h4>
              <p className="font-sans text-5xl font-black mt-2 tracking-tighter">IELTS 6.5</p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
