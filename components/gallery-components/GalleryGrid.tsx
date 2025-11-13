"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

// Define interface and data directly in the component
export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const galleryImageData: GalleryItem[] = [
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
    imageUrl: "/expertise-images/Heights.png",
  },
  {
    id: 9,
    title: "Islamabad C Mall",
    category: "Mixed-Use",
    imageUrl: "/expertise-images/LetC.png",
  },
];

// --- PREMIUM FAN-SHOWCASE COMPONENT ---
const FannedShowcase = () => {
  const showcaseImages = galleryImageData.slice(0, 5);

  // Fixed TypeScript variants using Framer Motion's built-in Variants type
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i: number) => {
      const transforms = [
        { x: -100, rotate: -15 },
        { x: -50, rotate: -10 },
        { x: 0, rotate: 0 },
        { x: 50, rotate: 10 },
        { x: 100, rotate: 15 },
      ];

      const zIndex = i === 2 ? 10 : 5 - Math.abs(i - 2);

      return {
        opacity: 1,
        y: 0,
        x: `${transforms[i].x}%`,
        rotate: transforms[i].rotate,
        zIndex: zIndex,
        filter: i === 2 ? "grayscale(0%)" : "grayscale(100%)",
        transition: {
          duration: 0.8,
          delay: i * 0.1,
          ease: "easeOut" as const,
        },
      };
    },
  };

  return (
    <div className="space-y-16">
      {/* INTRO TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h3 className="font-oswald text-3xl md:text-4xl font-bold text-gray-900 uppercase mb-6">
          Where <span className="text-orange-500">Excellence</span> Meets
          Innovation
        </h3>
        <p className="font-inter text-lg text-gray-600 leading-relaxed">
          Every structure we create embodies our commitment to architectural
          precision, engineering{" "}
          <span className="text-orange-500">excellence</span>, and sustainable
          design principles that stand the test of time.
        </p>
      </motion.div>

      {/* FANNED SHOWCASE */}
      <motion.div
        className="relative h-64 md:h-96 w-full flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {showcaseImages.map((item, i) => (
          <motion.div
            key={item.id}
            className="absolute w-48 h-64 md:w-64 md:h-80 shadow-2xl overflow-hidden"
            variants={cardVariants}
            custom={i}
            style={{
              transformOrigin: "center bottom",
            }}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
              priority={i === 2}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs lg:text-sm font-bold text-orange-500 tracking-widest uppercase font-oswald">
            OUR <span className="text-orange-500">PORTFOLIO</span>
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight font-oswald mt-4">
            PROJECT GALLERY
          </h2>
        </motion.div>

        {/* FANNED SHOWCASE WITH TEXT SECTIONS */}
        <FannedShowcase />

        {/* FULL PORTFOLIO SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-12"
        >
          <h3 className="font-oswald text-2xl md:text-3xl font-bold text-gray-900 uppercase">
            Explore Our Complete{" "}
            <span className="text-orange-500">Portfolio</span>
          </h3>
          <p className="font-inter text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our diverse range of projects showcasing architectural{" "}
            <span className="text-orange-500">excellence</span>
            across commercial, residential, and mixed-use developments.
          </p>
        </motion.div>

        {/* MASONRY GRID */}
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
              className="mb-6 break-inside-avoid relative overflow-hidden shadow-lg cursor-pointer group"
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

      {/* MODAL */}
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
                  className="w-auto h-auto max-w-full max-h-[75vh] shadow-2xl"
                />
              </motion.div>

              {/* Image Info */}
              <div className="mt-6 text-center">
                <h3 className="font-oswald text-3xl font-bold text-white uppercase mb-2">
                  {selectedImage.title}
                </h3>
                <p className="font-inter text-orange-400 text-lg border border-orange-400 px-4 py-1 inline-block">
                  {selectedImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
