import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className=" bg-[#1a1a1a]/80 backdrop-blur-md border border-gray-700/50 text-black shadow-lg px-8 py-3 rounded-full flex gap-8 justify-center items-center w-[33vw] min-w-[300px]">
            {["about", "projects", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-50}
                className="cursor-pointer text-lg font-semibold text-gray-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-yellow-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}