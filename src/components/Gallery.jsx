import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ZoomIn, X, Volume2, VolumeX } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'communications', label: 'Communications Projects' },
  { id: 'academic', label: 'Academic Experiences' },
  { id: 'teaching', label: 'Teaching Experiences' }
];

const getCategoryLabel = (catId) => {
  const category = CATEGORIES.find(c => c.id === catId);
  return category ? category.label : catId;
};

const GALLERY_ITEMS = [
  // MC / Hosting / Corporate -> COMMUNICATIONS PROJECTS
  {
    id: 1,
    type: 'video',
    src: '/vuongdieuhoa_assets/7875554960738.mp4',
    title: 'Media Publication',
    category: 'communications',
    desc: "A political journal about Donald Trump's comeback to the US presidency in 2016 and its connection to Vietnam.",
    link: 'https://drive.google.com/file/d/1Q6qnOcL7BrUKfO86OmAhCH3tK7UoE_iC/view?usp=sharing',
    aspect: 'video-tall'
  },
  {
    id: 2,
    type: 'video',
    src: '/vuongdieuhoa_assets/7875554871737.mp4',
    title: 'FPT Event',
    category: 'communications',
    desc: 'Scriptwriting and event support for FPT Software Corporation.',
    aspect: 'video-tall'
  },
  {
    id: 3,
    type: 'video',
    src: '/vuongdieuhoa_assets/7875554983982.mp4',
    title: 'Project Presenter',
    category: 'academic',
    desc: 'Writing the script, directed, and provided voiceovers for the short historical documentary.',
    aspect: 'video-wide'
  },
  {
    id: 4,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554759922_658f893fd0a5667186e54240104c12b5.jpg',
    title: 'Event Host',
    category: 'academic',
    desc: 'Hosting a get-together between lecturers and students of the English Language major.',
    aspect: 'square'
  },
  {
    id: 5,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554820641_ede5e687416a5d5004e90e97beda7fe9.jpg',
    title: 'Media Recording Shoot',
    category: 'communications',
    desc: 'Studio filming session for bilingual advertising campaign projects.',
    aspect: 'square'
  },
  {
    id: 6,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554820645_950891ef5f4f951e8b1a8f50be8d40cd.jpg',
    title: 'Create Corporate Promotional Videos',
    category: 'communications',
    desc: 'The process of producing external communication videos for FPT Software Corporation.',
    aspect: 'square'
  },

  // Corporate FPT -> COMMUNICATIONS PROJECTS / ACADEMIC EXPERIENCES
  {
    id: 7,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554717546_ce480a797ab748488e04c66422d3bd08.jpg',
    title: 'Commercial Photoshoot Support',
    category: 'communications',
    desc: 'Supporting the process of promoting the image of outstanding employees of FPT Software Corporation.',
    aspect: 'tall'
  },
  {
    id: 9,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554729506_802e17ddd78395f93a1f5f4e829bb921.jpg',
    title: 'FPT Event',
    category: 'communications',
    desc: 'Scriptwriting and event support for FPT Software Corporation.',
    aspect: 'square'
  },
  {
    id: 10,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554766690_068ac3c76bd6c976c2b168efa935e0f9.jpg',
    title: 'Create Corporate Promotional Videos',
    category: 'communications',
    desc: 'The process of producing external communication videos for FPT Software Corporation.',
    aspect: 'wide'
  },
  {
    id: 11,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554766691_a93b37af40b15ef904a4a0da0cb3babb.jpg',
    title: 'Event Marketing',
    category: 'communications',
    desc: 'Providing media support for the event through social media platforms.',
    aspect: 'wide'
  },
  {
    id: 12,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554770657_a902db78b4d6ce674c001ae4ffd45bf2.jpg',
    title: 'Event Marketing',
    category: 'communications',
    desc: 'Providing media support for the event through social media platforms.',
    aspect: 'wide'
  },
  {
    id: 14,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554848820_6548df6ff3e94d4dc578280662673e29.jpg',
    title: 'National Assembly Visit',
    category: 'academic',
    desc: 'An academic trip to the Parliament House with my specialized class at the Diplomatic Academy, visiting and learning about the agencies and activities there.',
    aspect: 'wide'
  },

  // DAV Campus -> ACADEMIC EXPERIENCES
  {
    id: 15,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554718651_b1cd8d45e4f5aed113427e2d965cc1ed.jpg',
    title: 'Diplomatic Academy of Vietnam',
    category: 'academic',
    desc: 'Diplomatic Academy of Vietnam gate stone landmark.',
    aspect: 'wide'
  },
  {
    id: 16,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554839045_8ded8ec45f4f233d009bb977d12083a4.jpg',
    title: 'ASEAN Square DAV',
    category: 'academic',
    desc: 'Landmark square flagpoles inside the DAV school campus.',
    aspect: 'square'
  },
  {
    id: 17,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875555125316_7d2b0364c9c1300a7c2d659979b9bb19.jpg',
    title: 'Student Ambassador of the DAV',
    category: 'academic',
    desc: 'One of the student representatives of the Diplomatic Academy in 2022.',
    aspect: 'tall'
  },
  {
    id: 18,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554839044_2f155995515ebccdab20805487a24bae.jpg',
    title: 'Event Performer',
    category: 'academic',
    desc: 'Event performing with a delegation from the Diplomatic Academy upon completing military training.',
    aspect: 'square'
  },
  {
    id: 19,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554861781_309092e7e1aacf682f7e69814c85ca51.jpg',
    title: 'Ministry of Foreign Affairs Visit',
    category: 'academic',
    desc: 'Delegation visit at the Vietnamese Ministry of Foreign Affairs (Bộ Ngoại Giao).',
    aspect: 'tall'
  },

  // Education & Classroom -> TEACHING EXPERIENCES
  {
    id: 20,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554766689_763c631c8cf1e95e67ab686c7850cc68.jpg',
    title: 'AMES English Center Advertisement',
    category: 'teaching',
    desc: 'Promotional teacher feature spotlight at AMES English Center.',
    aspect: 'square'
  },
  {
    id: 21,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554820643_b9afca2bef612f0d91e3936dc17dc343.jpg',
    title: 'TEACHING',
    category: 'teaching',
    desc: 'Collaborative student lesson planning and whiteboard teaching practices.',
    aspect: 'square'
  },
  {
    id: 22,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554794093_2011bcd8d86abf84034953ead0da1b8c.jpg',
    title: 'National Assembly Visit',
    category: 'academic',
    desc: 'An academic trip to the Parliament House with my specialized class at the Diplomatic.',
    aspect: 'wide'
  },
  {
    id: 23,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554794096_6fcbe1f1c597015c85019976139e3505.jpg',
    title: 'National Assembly Visit',
    category: 'academic',
    desc: 'An academic trip to the Parliament House with my specialized class at the Diplomatic.',
    aspect: 'wide'
  },
  {
    id: 24,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554804322_c2276328e33a75f15d8f9c31a44e3a81.jpg',
    title: 'Employee Spotlight Interviews',
    category: 'communications',
    desc: 'Writing scripts, developing concepts, and interviewing key employees to support internal communication within FPT Software Corporation.',
    aspect: 'square'
  },
  {
    id: 25,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7876528911925_d13f9306fc632952f8dee1831ce3d71b.jpg',
    title: 'Employee Spotlight Interviews',
    category: 'communications',
    desc: 'Writing scripts, developing concepts, and interviewing key employees to support internal communication within FPT Software Corporation.',
    aspect: 'wide'
  },
  {
    id: 26,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7876528911954_53704de4a88ed32734b01f05a95702ba.jpg',
    title: 'Employee Spotlight Interviews',
    category: 'communications',
    desc: 'Writing scripts, developing concepts, and interviewing key employees to support internal communication within FPT Software Corporation.',
    aspect: 'wide'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const modalVideoRef = useRef(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-brutal-white text-brutal-black relative overflow-hidden border-b-4 border-brutal-black font-sans">

      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h2 className="font-brutal text-[25vw] leading-none whitespace-nowrap select-none">CREATIVE</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="font-brutal text-8xl text-brutal-black tracking-tight leading-none uppercase select-none mb-4"
            >
              GALLERY
            </motion.h2>
            <p className="text-brutal-orange font-bold uppercase tracking-wider text-sm flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brutal-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
              Multimedia Showcase • {GALLERY_ITEMS.length} Curated Records
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`font-sans font-bold text-xs uppercase px-4 py-2 border-2 border-brutal-black transition-all flex items-center gap-1.5 ${activeFilter === tab.id
                  ? 'bg-brutal-orange text-brutal-white brutal-shadow-hover translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-brutal-white text-brutal-black hover:bg-brutal-beige'
                  }`}
              >
                {/* Custom SVGs for categories */}
                {tab.id === 'communications' && (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 18H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h9" />
                    <path d="M12 6l7-3v16l-7-3" />
                    <path d="M19 10a3 3 0 0 1 0 4" />
                  </svg>
                )}
                {tab.id === 'academic' && (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                )}
                {tab.id === 'teaching' && (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <div key={item.id} className="break-inside-avoid mb-6">
                <GalleryCard
                  item={item}
                  onSelect={() => setSelectedMedia(item)}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox / Theater Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brutal-white text-brutal-black border-4 border-brutal-black brutal-shadow rounded-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-30 bg-brutal-orange text-brutal-white border-2 border-brutal-black p-2 rounded-full hover:scale-115 transition-transform brutal-shadow"
              >
                <X size={20} />
              </button>

              {/* Media Viewport */}
              <div className="md:w-3/5 bg-black flex items-center justify-center relative aspect-video md:aspect-auto md:min-h-[500px]">
                {selectedMedia.type === 'video' ? (
                  <>
                    <video
                      ref={modalVideoRef}
                      src={selectedMedia.src}
                      autoPlay
                      controls
                      muted={isMuted}
                      className="w-full h-full object-contain max-h-[600px]"
                    />
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="absolute bottom-4 left-4 bg-black/70 text-white p-2 rounded-full border border-white/20 hover:bg-black"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                  </>
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain max-h-[600px]"
                    draggable="false"
                  />
                )}
              </div>

              {/* Media Info details */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between bg-brutal-white border-t-4 md:border-t-0 md:border-l-4 border-brutal-black">
                <div>
                  <span className="bg-brutal-orange text-brutal-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border border-brutal-black mb-4 inline-block">
                    {getCategoryLabel(selectedMedia.category)}
                  </span>
                  <h3 className="font-brutal text-4xl mb-4 leading-none uppercase">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed text-brutal-dark/80">
                    {selectedMedia.desc}
                  </p>
                  {selectedMedia.link && (
                    <a
                      href={selectedMedia.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 bg-brutal-orange text-brutal-white border-2 border-brutal-black px-4 py-2.5 font-sans font-bold text-xs uppercase brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all w-fit"
                    >
                      <span>Read Publication</span>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-brutal-black/20 text-xs font-bold text-brutal-black/60 uppercase">
                  <div>Media Type: {selectedMedia.type}</div>
                  <div className="mt-1">Source: vuongdieuhoa_assets</div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

function GalleryCard({ item, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  // Play muted on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Set card classes based on aspect ratios for dynamic masonry look
  let cardClass = "bg-brutal-white border-4 border-brutal-black brutal-shadow-hover rounded-xl overflow-hidden cursor-pointer relative brutal-transition group flex flex-col w-full h-auto";

  const getAspectClass = (aspect) => {
    switch (aspect) {
      case 'video-tall':
      case 'tall':
        return 'aspect-[9/16]';
      case 'video-wide':
      case 'wide':
        return 'aspect-video';
      case 'square':
      default:
        return 'aspect-square';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className={cardClass}
    >
      <div className="relative overflow-hidden w-full flex-grow bg-brutal-dark">
        {item.type === 'video' ? (
          <div className={`w-full relative ${getAspectClass(item.aspect)}`}>
            <video
              ref={videoRef}
              src={item.src}
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
              <span className="bg-brutal-orange text-brutal-white border-2 border-brutal-black p-3.5 rounded-full brutal-shadow group-hover:scale-110 transition-transform">
                <Play size={20} fill="currentColor" />
              </span>
            </div>
          </div>
        ) : (
          <div className={`w-full relative overflow-hidden ${getAspectClass(item.aspect)}`}>
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              draggable="false"
            />
            {/* Hover overlay with zoom */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-brutal-orange text-brutal-white border-2 border-brutal-black p-3 rounded-full brutal-shadow">
                <ZoomIn size={18} />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Card text footer */}
      <div className="p-4 border-t-2 border-brutal-black bg-brutal-white">
        <div className="flex justify-between items-start">
          <h4 className="font-brutal text-xl leading-none uppercase tracking-wide group-hover:text-brutal-orange transition-colors">
            {item.title}
          </h4>
          <div className="flex items-center gap-1.5">
            {item.link && (
              <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border border-brutal-orange/30 bg-brutal-orange/10 text-brutal-orange flex items-center gap-0.5">
                Link
              </span>
            )}
            <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded border border-brutal-black/20 bg-brutal-beige">
              {item.type}
            </span>
          </div>
        </div>
        <p className="text-xs font-semibold text-brutal-dark/70 mt-1.5 line-clamp-2">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
