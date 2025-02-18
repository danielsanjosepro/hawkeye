"use client";
import * as framerMotion from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero Section */}
      <framerMotion.motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center text-center p-8"
      >
        <framerMotion.motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-6xl font-bold mb-6 text-[#FFDF65]"
        >
          HAWKEYE
        </framerMotion.motion.h1>
        <framerMotion.motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-white mb-8"
        >
          Your eyes in the urban skies.
        </framerMotion.motion.p>
        <framerMotion.motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl h-[400px] bg-black/40 border border-[#FFDF65]/20 rounded-lg flex items-center justify-center mb-12"
        >
          <p className="text-white/60">Video Placeholder</p>
        </framerMotion.motion.div>
      </framerMotion.motion.section>

      {/* Features Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-8">
          <framerMotion.motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 hover:bg-black/60 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#FFDF65]">Superior Information</h3>
              <p className="text-white">Battles are won with superior information. Fusing drone vision and AI to create dynamic scene understanding.</p>
            </div>
            <div className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 hover:bg-black/60 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#FFDF65]">3D Reconstruction</h3>
              <p className="text-white">Multiple drones jointly reconstruct a 3D model of the battlefield in real-time.</p>
            </div>
            <div className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 hover:bg-black/60 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#FFDF65]">Depth-Enabled</h3>
              <p className="text-white">Depth-enabled reconstruction techniques enable fast responses in critical situations.</p>
            </div>
            <div className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 hover:bg-black/60 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-[#FFDF65]">Real-time Detection</h3>
              <p className="text-white">Real-time soldier and object detection enhance scene understanding.</p>
            </div>
          </framerMotion.motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#FFDF65]">Built for Europe. With hope.</h2>
          <framerMotion.motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[1, 2, 3, 4].map((member) => (
              <a
                key={member}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <framerMotion.motion.div
                  whileHover={{ y: -5 }}
                  className="aspect-square bg-gray-800/50 border border-[#FFDF65]/20 rounded-lg overflow-hidden hover:bg-gray-800/80 transition-all duration-300"
                >
                  <div className="w-full h-full flex items-center justify-center text-gray-300">
                    Team Member {member}
                  </div>
                </framerMotion.motion.div>
              </a>
            ))}
          </framerMotion.motion.div>
        </div>
      </section>

    </div>
  );
}
