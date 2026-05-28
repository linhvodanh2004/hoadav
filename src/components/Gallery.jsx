import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ZoomIn, X, Volume2, VolumeX } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'hosting', label: '🎤 MC & Hosting' },
  { id: 'corporate', label: '💼 Corporate (FPT)' },
  { id: 'campus', label: '🎓 DAV Campus' },
  { id: 'education', label: '📝 Education & Classes' }
];

const GALLERY_ITEMS = [
  // MC / Hosting
  {
    id: 1,
    type: 'video',
    src: '/vuongdieuhoa_assets/7875554960738.mp4',
    title: 'Communication Project',
    category: 'hosting',
    desc: 'Event Host for the red-themed student speaker championship gala.',
    aspect: 'video-tall'
  },
  {
    id: 2,
    type: 'video',
    src: '/vuongdieuhoa_assets/7875554871737.mp4',
    title: 'FPT Event',
    category: 'hosting',
    desc: 'Bilingual presenter for high-energy neon youth festival stage.',
    aspect: 'video-tall'
  },
  {
    id: 3,
    type: 'video',
    src: '/vuongdieuhoa_assets/7875554983982.mp4',
    title: 'MC',
    category: 'hosting',
    desc: 'Field host and narrator visiting heavy industry machinery press factory.',
    aspect: 'video-wide'
  },
  {
    id: 4,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554759922_658f893fd0a5667186e54240104c12b5.jpg',
    title: 'MC',
    category: 'hosting',
    desc: 'Public speaking presentation with microphone at campus auditoriums.',
    aspect: 'square'
  },
  {
    id: 5,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554820641_ede5e687416a5d5004e90e97beda7fe9.jpg',
    title: 'Media Recording Shoot',
    category: 'hosting',
    desc: 'Studio filming session for bilingual advertising campaign projects.',
    aspect: 'square'
  },
  {
    id: 6,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554820645_950891ef5f4f951e8b1a8f50be8d40cd.jpg',
    title: 'BTS Camera Monitor',
    category: 'hosting',
    desc: 'Behind the scenes camera monitor view during the speaking segment.',
    aspect: 'square'
  },

  // Corporate FPT
  {
    id: 7,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554717546_ce480a797ab748488e04c66422d3bd08.jpg',
    title: 'FPT Software Headquarters',
    category: 'corporate',
    desc: 'Delegation visit and office activities at FPT Software Campus.',
    aspect: 'tall'
  },
  // {
  //   id: 8,
  //   type: 'image',
  //   src: '/vuongdieuhoa_assets/z7875554763165_7431db0add995b47a7bd929a339757ea.jpg',
  //   title: 'Corporate Reception Pose',
  //   category: 'corporate',
  //   desc: 'FPT Software office welcome reception lobby.',
  //   aspect: 'tall'
  // },
  {
    id: 9,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554729506_802e17ddd78395f93a1f5f4e829bb921.jpg',
    title: 'Corporate Presentation Screen',
    category: 'corporate',
    desc: 'Hosting and delivering presentation segments on corporate stages.',
    aspect: 'square'
  },
  {
    id: 10,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554766690_068ac3c76bd6c976c2b168efa935e0f9.jpg',
    title: 'Roundtable Collaboration',
    category: 'corporate',
    desc: 'Active boardroom delegation meeting and presentation reviews.',
    aspect: 'wide'
  },
  {
    id: 11,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554766691_a93b37af40b15ef904a4a0da0cb3babb.jpg',
    title: 'Event Supporting',
    category: 'corporate',
    desc: 'Group meeting and collaborative sessions at FPT office spaces.',
    aspect: 'wide'
  },
  {
    id: 12,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554770657_a902db78b4d6ce674c001ae4ffd45bf2.jpg',
    title: 'FPT Software Team banner',
    category: 'corporate',
    desc: 'Corporate event and collaborative milestones.',
    aspect: 'wide'
  },
  // {
  //   id: 13,
  //   type: 'image',
  //   src: '/vuongdieuhoa_assets/z7875554791948_3b737bee3b80ff120a9c2966d69242c7.jpg',
  //   title: 'FPT Office Landmark',
  //   category: 'corporate',
  //   desc: 'Professional delegation activities under FPT banner.',
  //   aspect: 'wide'
  // },
  {
    id: 14,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554848820_6548df6ff3e94d4dc578280662673e29.jpg',
    title: 'Boardroom Summit',
    category: 'corporate',
    desc: 'Diplomatic delegation and corporate roundtable discussions.',
    aspect: 'wide'
  },

  // DAV Campus
  {
    id: 15,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554718651_b1cd8d45e4f5aed113427e2d965cc1ed.jpg',
    title: 'Diplomatic Academy of Vietnam',
    category: 'campus',
    desc: 'Diplomatic Academy of Vietnam gate stone landmark.',
    aspect: 'wide'
  },
  {
    id: 16,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554839045_8ded8ec45f4f233d009bb977d12083a4.jpg',
    title: 'ASEAN Square DAV',
    category: 'campus',
    desc: 'Landmark square flagpoles inside the DAV school campus.',
    aspect: 'square'
  },
  {
    id: 17,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875555125316_7d2b0364c9c1300a7c2d659979b9bb19.jpg',
    title: 'Ministry of Foreign Affairs',
    category: 'campus',
    desc: 'Delegation visit at the Vietnamese Ministry of Foreign Affairs (Bộ Ngoại Giao).',
    aspect: 'tall'
  },
  {
    id: 18,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554839044_2f155995515ebccdab20805487a24bae.jpg',
    title: 'Event Performance',
    category: 'campus',
    desc: 'Academic military training assemblies at school.',
    aspect: 'square'
  },
  {
    id: 19,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554861781_309092e7e1aacf682f7e69814c85ca51.jpg',
    title: 'Ministry of Foreign Affairs',
    category: 'campus',
    desc: 'Delegation visit at the Vietnamese Ministry of Foreign Affairs (Bộ Ngoại Giao).',
    aspect: 'tall'
  },

  // Education & Classroom
  {
    id: 20,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554766689_763c631c8cf1e95e67ab686c7850cc68.jpg',
    title: 'AMES English Center Advertisement',
    category: 'education',
    desc: 'Promotional teacher feature spotlight at AMES English Center.',
    aspect: 'square'
  },
  {
    id: 21,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554820643_b9afca2bef612f0d91e3936dc17dc343.jpg',
    title: 'TEACHING',
    category: 'education',
    desc: 'Collaborative student lesson planning and whiteboard teaching practices.',
    aspect: 'square'
  },
  {
    id: 22,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554794093_2011bcd8d86abf84034953ead0da1b8c.jpg',
    title: 'PARLIMENT HOUSE',
    category: 'education',
    desc: 'Active ESL classrooms and training lessons for larger assemblies.',
    aspect: 'wide'
  },
  {
    id: 23,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554794096_6fcbe1f1c597015c85019976139e3505.jpg',
    title: 'PARLIMENT HOUSE',
    category: 'education',
    desc: 'Active teaching demonstrations with high student interaction levels.',
    aspect: 'wide'
  },
  {
    id: 24,
    type: 'image',
    src: '/vuongdieuhoa_assets/z7875554804322_c2276328e33a75f15d8f9c31a44e3a81.jpg',
    title: 'INTERVIEWING',
    category: 'education',
    desc: 'Presenting active curriculum maps and ESL syllabus frameworks.',
    aspect: 'square'
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
            <p className="text-brutal-orange font-bold uppercase tracking-wider text-sm">
              🎬 Multimedia Showcase • 24 Curated Records
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {CATEGORIES.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`font-sans font-bold text-xs uppercase px-4 py-2 border-2 border-brutal-black transition-all ${activeFilter === tab.id
                  ? 'bg-brutal-orange text-brutal-white brutal-shadow-hover translate-x-[-2px] translate-y-[-2px]'
                  : 'bg-brutal-white text-brutal-black hover:bg-brutal-beige'
                  }`}
              >
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
                  />
                )}
              </div>

              {/* Media Info details */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between bg-brutal-white border-t-4 md:border-t-0 md:border-l-4 border-brutal-black">
                <div>
                  <span className="bg-brutal-orange text-brutal-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border border-brutal-black mb-4 inline-block">
                    {selectedMedia.category.toUpperCase()}
                  </span>
                  <h3 className="font-brutal text-4xl mb-4 leading-none uppercase">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed text-brutal-dark/80">
                    {selectedMedia.desc}
                  </p>
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
          <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded border border-brutal-black/20 bg-brutal-beige">
            {item.type}
          </span>
        </div>
        <p className="text-xs font-semibold text-brutal-dark/70 mt-1.5 line-clamp-2">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
