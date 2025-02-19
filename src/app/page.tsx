"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { MdMilitaryTech, MdLocationSearching } from 'react-icons/md';
import { FaBuilding, FaHandHoldingMedical } from 'react-icons/fa';
import { FeatureCard } from '@/components/FeatureCard';

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
    role: "Robotics & AI Engineer",
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
    role: "AI & Product Engineer",
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

const features = [
  {
    title: "Superior Information",
    description: "Battles are won with superior information. Fusing drone vision and AI to create dynamic scene understanding."
  },
  {
    title: "Real-Time Analysis",
    description: "Instant detection and classification of objects, vehicles, and personnel in the field of operation."
  },
  {
    title: "Tactical Advantage",
    description: "Gain the upper hand with comprehensive situational awareness and predictive threat assessment."
  },
  {
    title: "Command Integration",
    description: "Seamlessly integrate with existing command and control systems for coordinated response."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Title Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-black w-full py-20"
      >
        <div className="w-full max-w-6xl mx-auto text-center px-8">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-8xl md:text-8xl font-bold mb-6 text-[#FFDF65]"
          >
            HAWKEYE
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-2xl md:text-3xl text-white mb-8"
          >
            Your eyes in the urban skies.
          </motion.p>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full aspect-video mb-24 overflow-hidden"
      >
        {/* Video Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-black/10 z-2"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain bg-black"
          >
            <source src={getImagePath("/videos/demo_video.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 2 }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-8 h-12 border-2 border-[#FFDF65] rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-[#FFDF65] rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-2 bg-gradient-to-b from-black/60 to-black/40">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-gradient-to-b from-black/60 to-black/40">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {useCases.map((useCase, index) => (
              <FeatureCard
                key={useCase.id}
                title={useCase.title}
                description={useCase.description}
                icon={useCase.icon}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-[#FFDF65]">
              Built for Europe. With hope.
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
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
