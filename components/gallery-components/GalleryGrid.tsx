"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Define interface and data directly in the component
export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const galleryImageData: GalleryItem[] = [
  // ... (your image data remains unchanged)
  {
    id: 1,
    title: "AFI Tower",
    category: "High-Rise",
    imageUrl: "/expertise-images/AfiTower.PNG",
  },
  {
    id: 2,
    title: "Capital Grand Heights",
    category: "Residential",
    imageUrl: "/CapitalHeights.PNG",
  },
  {
    id: 3,
    title: "Saif Mall & Residency",
    category: "Mixed-Use",
    imageUrl: "/expertise-images/saifMall.png",
  },
  {
    id: 4,
    title: "Burj Rabbani",
    category: "Mixed-Use",
    imageUrl: "/expertise-images/burj-rabbani.jpg",
  },
  {
    id: 5,
    title: "La Vita Malam Jabba",
    category: "Hospitality",
    imageUrl: "/expertise-images/MalamJabbaLavita.PNG",
  },
  {
    id: 6,
    title: "Diamond Mall",
    category: "Commercial",
    imageUrl: "/DiamondMall.PNG",
  },
  {
    id: 7,
    title: "Town Residency",
    category: "Residential",
    imageUrl: "/expertise-images/TownHeights.png",
  },

  // --- AI IMAGES ---
  {
    id: 9,
    title: "Islamabad C Mall",
    category: "Mixed-Use",
    imageUrl: "/expertise-images/LetC.png",
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- 1. NEW SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-oswald">
            OUR PORTFOLIO
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight font-oswald mt-4">
            PROJECT GALLERY
          </h2>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-inter mt-6">
            A showcase of our diverse capabilities, from towering high-rises to
            intricate interiors. Each project reflects our commitment to
            engineering and architectural excellence.
          </p>
        </motion.div>
        {/* --- END OF NEW HEADER --- */}

        {/* This is the Masonry Grid. */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {galleryImageData.map((item) => (
            <motion.div
              key={item.id}
              className="mb-6 break-inside-avoid relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(item)}
              layoutId={`card-${item.id}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                <h3 className="font-oswald text-xl font-bold text-white uppercase">
                  {item.title}
                </h3>
                <p className="font-inter text-orange-400 text-sm">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* This is the Lightbox Modal. */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <X size={32} />
              </motion.button>

              {/* Image */}
              <motion.div
                className="relative"
                layoutId={`card-${selectedImage.id}`}
              >
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-auto h-auto max-w-full max-h-[75vh] rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Title and Category - Bottom Centered */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-oswald text-3xl font-bold text-white uppercase mb-2">
                  {selectedImage.title}
                </h3>
                <p className="font-inter text-orange-400 text-lg border border-orange-400 px-4 py-1 rounded-full inline-block">
                  {selectedImage.category}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
