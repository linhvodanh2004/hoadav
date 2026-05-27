import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const docs = [
  {
    title: "RESUME / CV",
    desc: "View my latest detailed CV on Canva",
    link: "https://www.canva.com/design/DAHK3ndQZcQ/pyCLbyYQ-f8hLHM8SClhFg/view"
  },
  {
    title: "IELTS CERTIFICATE",
    desc: "View my official IELTS test results",
    image: "/ielts_cerfication.png" // Updated to use the image
  },
  {
    title: "BACHELOR'S DEGREE",
    desc: "Diplomatic Academy of Vietnam",
    link: "#"
  }
];

export default function Documents() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 px-8 md:px-16 bg-brutal-black text-brutal-white border-b-8 border-brutal-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-brutal text-7xl md:text-[10rem] mb-16 text-brutal-orange tracking-tighter drop-shadow-[6px_6px_0_#f4f4f0] leading-none text-center">
          DOCUMENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {docs.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.2 }}
            >
              {doc.link ? (
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-4 border-brutal-black bg-brutal-white text-brutal-black p-8 brutal-shadow-hover brutal-transition h-full flex flex-col justify-between group cursor-pointer hover:bg-brutal-black hover:text-brutal-white hover:border-brutal-orange"
                >
                  <CardContent doc={doc} />
                </a>
              ) : (
                <div
                  onClick={() => setSelectedImage(doc.image)}
                  className="block border-4 border-brutal-black bg-brutal-white text-brutal-black p-8 brutal-shadow-hover brutal-transition h-full flex flex-col justify-between group cursor-pointer hover:bg-brutal-black hover:text-brutal-white hover:border-brutal-orange"
                >
                  <CardContent doc={doc} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-12 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white font-brutal text-2xl hover:text-brutal-orange transition-colors"
              >
                CLOSE [X]
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain border-4 border-white brutal-shadow-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Helper component for card content to avoid duplication
function CardContent({ doc }) {
  return (
    <>
      <div>
        <h3 className="font-brutal text-4xl md:text-5xl uppercase mb-4 group-hover:text-brutal-orange brutal-transition">{doc.title}</h3>
        <p className="font-sans text-lg md:text-xl font-medium">{doc.desc}</p>
      </div>
      <div className="mt-8 flex justify-end">
        <span className="font-sans font-bold text-4xl group-hover:translate-x-2 group-hover:text-brutal-orange brutal-transition">→</span>
      </div>
    </>
  );
}
