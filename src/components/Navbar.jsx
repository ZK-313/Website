import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Navbar({ show }) {
  const [showResumeModal, setShowResumeModal] = useState(false);
  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          key="navbar"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-gray-700/30 shadow-2xl shadow-purple-500/10 px-6 md:px-10 py-3 rounded-full flex gap-6 md:gap-10 justify-center items-center w-fit min-w-[280px]">
            {["about", "projects", "contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="cursor-pointer text-sm md:text-base font-medium text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-yellow-400 transition-all duration-300 relative group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-4 py-2 text-sm md:text-base font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-black rounded-full hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
              >
                Resume
              </button>
            </motion.div>
          </div>
        </motion.nav>
      )}
      <ResumeModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} />
    </AnimatePresence>
  );
}