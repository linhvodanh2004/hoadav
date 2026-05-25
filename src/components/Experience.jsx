import { motion } from 'framer-motion';

const experiences = [
  {
    title: "SOCIAL INTERN",
    company: "FPT SOFTWARE",
    date: "Jul 2025 - Now",
    desc: ["Translate news and editorial content between English and Vietnamese.", "Research and compile news, monitor trends, and produce bilingual posts & reels on technology topics.", "Conduct interviews with outstanding employees across the company nationwide."]
  },
  {
    title: "ENGLISH TEACHER",
    company: "TUNG TRAN ENGLISH CENTER",
    date: "Aug 2024 - Aug 2025",
    desc: ["Teaching communication & grammar for kids (primary & secondary students).", "Designing and organizing lesson plans that align with the curriculum and educational standards.", "On-time course completion rate: 100%."]
  },
  {
    title: "ENGLISH ASSISTANT & TESTER",
    company: "APTIS EASY CENTER",
    date: "Jun 2024 - Now",
    desc: ["Reviewing student-submitted responses in speaking and writing tasks.", "Recording personalized feedback video for each student, highlighting strengths and weaknesses for improvement.", "Meeting to conduct End-of-Course Assessment for each students."]
  },
  {
    title: "FREELANCER (DESIGN)",
    company: "POD MARKET EU",
    date: "Aug 2023 - Dec 2023",
    desc: ["Proficient in Photoshop.", "Searching relative images, fonts in high resolution.", "Designing finished products based on clients' demands."]
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-8 md:px-16 bg-brutal-white text-brutal-black border-b-8 border-brutal-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-brutal text-7xl md:text-[10rem] mb-16 text-brutal-black tracking-tighter drop-shadow-[6px_6px_0_#FF4500] leading-none">WORK<br/>EXPERIENCE</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i%2) * 0.2 }}
              className="border-4 border-brutal-black bg-brutal-white p-6 md:p-10 brutal-shadow-hover brutal-transition flex flex-col justify-between"
            >
              <div>
                <h3 className="font-brutal text-5xl md:text-6xl text-brutal-orange tracking-tight leading-none">{exp.company}</h3>
                <h4 className="font-sans font-black text-2xl md:text-3xl uppercase mt-4">{exp.title}</h4>
                <p className="font-sans font-bold text-lg mb-6 bg-brutal-black text-brutal-white inline-block px-4 py-2 mt-4">{exp.date}</p>
                <ul className="list-none font-sans text-lg space-y-3">
                  {exp.desc.map((d, j) => (
                    <li key={j} className="leading-tight flex items-start">
                      <span className="text-brutal-orange font-bold mr-2">→</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
