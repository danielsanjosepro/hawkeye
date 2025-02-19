"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { MdMilitaryTech, MdLocationSearching } from 'react-icons/md';
import { FaBuilding, FaHandHoldingMedical } from 'react-icons/fa';

const getImagePath = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    return `/hawkeye${path}`;
  }
  return path;
};

const teamMembers = [
  {
    id: 1,
    name: "Juan Carlos Climent",
    role: "AI Engineer",
    image: getImagePath("/images/team/juanqui.jpeg"),
    linkedin: "https://www.linkedin.com/in/juan-carlos-climent-pardo/",
    github: "https://github.com/jc-cp", 
    twitter: "https://x.com/jcliment55"
  },
  {
    id: 2,
    name: "Xabier Irizar",
    role: "Robotics & AI Engineer",
    image: getImagePath("/images/team/xabi.jpeg"),
    linkedin: "https://www.linkedin.com/in/xabier-irizar/",
    github: "https://github.com/xabirizar9",
    twitter: "https://x.com/projectxabi"
  },
  {
    id: 3,
    name: "Daniel San José",
    role: "Robotics Engineer",
    image: getImagePath("/images/team/dani.jpeg"),
    linkedin: "https://www.linkedin.com/in/daniel-san-jos%C3%A9-pro-0683441a5/",
    github: "https://github.com/danielsanjosepro"
  },
  {
    id: 4,
    name: "Alvaro Ritter",
    role: "AI Engineer",
    image: getImagePath("/images/team/alvaro.jpeg"),
    linkedin: "https://www.linkedin.com/in/alvaro-ritter/",
    github: "https://github.com/alvaroritter"
  }
  // Add more team members following the same structure
];

const useCases = [
  {
    id: 1,
    title: "Live Battlefield Monitoring",
    description: "Real-time situational awareness with AI-powered threat detection and tactical analysis for immediate decision support.",
    icon: MdMilitaryTech,
    color: "from-red-500/20 to-transparent"
  },
  {
    id: 2,
    title: "Reconnaissance Missions",
    description: "Advanced terrain mapping and enemy position tracking with minimal risk to personnel through autonomous drone operations.",
    icon: MdLocationSearching,
    color: "from-blue-500/20 to-transparent"
  },
  {
    id: 3,
    title: "Infrastructure Assessment",
    description: "Rapid evaluation of critical infrastructure damage using 3D reconstruction and structural analysis algorithms.",
    icon: FaBuilding,
    color: "from-green-500/20 to-transparent"
  },
  {
    id: 4,
    title: "Search & Rescue Operations",
    description: "Enhanced search capabilities with thermal imaging and AI-assisted victim detection in disaster scenarios.",
    icon: FaHandHoldingMedical,
    color: "from-yellow-500/20 to-transparent"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center text-center p-8"
      >
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-6xl font-bold mb-6 text-[#FFDF65]"
        >
          HAWKEYE
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-white mb-8"
        >
          Your eyes in the urban skies.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ maxWidth: "var(--frame-size, 70rem)" }}
          className="w-full aspect-[16/9] bg-black/40 border border-[#FFDF65]/20 rounded-lg flex items-center justify-center mb-6 overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          >
            <source src={getImagePath("/videos/demo_video.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="pt-6 pb-12 bg-black/40">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 223, 101, 0.9)",
                transition: { duration: 0.2 }
              }}
              className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 group"
            >
              <h3 className="text-xl font-bold mb-4 text-[#FFDF65] transition-colors duration-200 group-hover:text-black">
                Superior Information
              </h3>
              <p className="text-white transition-colors duration-200 group-hover:text-black">
                Battles are won with superior information. Fusing drone vision and AI to create dynamic scene understanding.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 223, 101, 0.9)",
                transition: { duration: 0.2 }
              }}
              className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 group"
            >
              <h3 className="text-xl font-bold mb-4 text-[#FFDF65] transition-colors duration-200 group-hover:text-black">
                3D Reconstruction
              </h3>
              <p className="text-white transition-colors duration-200 group-hover:text-black">
                Multiple drones jointly reconstruct a 3D model of the battlefield in real-time.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 223, 101, 0.9)",
                transition: { duration: 0.2 }
              }}
              className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 group"
            >
              <h3 className="text-xl font-bold mb-4 text-[#FFDF65] transition-colors duration-200 group-hover:text-black">
                Depth-Enabled
              </h3>
              <p className="text-white transition-colors duration-200 group-hover:text-black">
                Depth-enabled reconstruction and detection techniques enable fast responses in critical situations.
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 223, 101, 0.9)",
                transition: { duration: 0.2 }
              }}
              className="bg-black/80 rounded-lg p-8 border border-[#FFDF65]/20 group"
            >
              <h3 className="text-xl font-bold mb-4 text-[#FFDF65] transition-colors duration-200 group-hover:text-black">
                Real-time Detection
              </h3>
              <p className="text-white transition-colors duration-200 group-hover:text-black">
                Real-time soldier and object detection enhance scene understanding.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#FFDF65]">
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              HAWKEYE adapts to various critical scenarios,
              providing essential intelligence for multiple operations directly to your command center.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {useCases.map((useCase) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: useCase.id * 0.1 }}
              >
                <div className={`
                  relative p-8 rounded-2xl border border-[#FFDF65]/20 
                  overflow-hidden group hover:border-[#FFDF65]/40 
                  transition-all duration-300
                `}>
                  {/* Gradient Background */}
                  <div className={`
                    absolute top-0 left-0 w-full h-full 
                    bg-gradient-to-br ${useCase.color} opacity-20 
                    group-hover:opacity-30 transition-opacity duration-300
                  `} />

                  {/* Content */}
                  <div className="relative z-10">
                    <useCase.icon className="text-[#FFDF65] w-12 h-12 mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Interactive Elements */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#FFDF65]/20"
                    whileHover={{ scaleX: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#FFDF65]">
            Built for Europe. With hope.
          </h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="aspect-[4/5] bg-gray-800/50 border border-[#FFDF65]/20 rounded-lg overflow-hidden hover:bg-gray-800/80 transition-all duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-6">
                      <h3 className="text-xl font-semibold text-[#FFDF65] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-base text-gray-300 mb-3">{member.role}</p>
                      <div className="flex gap-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-[#FFDF65] transition-colors"
                        >
                          <FaLinkedin size={24} />
                        </a>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-[#FFDF65] transition-colors"
                        >
                          <FaGithub size={24} />
                        </a>
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#FFDF65] transition-colors"
                          >
                            <FaXTwitter size={24} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
