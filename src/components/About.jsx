// export default function About() {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center px-8 py-16 bg-[#3d3d3d]"
//     >
//       {/* Panel with background over stars */}
//       <div className="bg-[#0c0c0c]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-2xl text-center">
//         <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mb-6">
//           About Me
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed">
//           I am a passionate developer with an interest in building cool and
//           interactive web applications. This section contains placeholder text
//           describing me, but you can replace it with your own story.
//         </p>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-4 sm:px-8 py-16"
    >
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#0c0c0c]/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800/50 max-w-3xl text-center space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mb-8"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed space-y-4"
          >
            <span className="block mb-4">
              I am a passionate developer with an interest in building cool and
              interactive web applications. 
            </span>
            <span className="block text-gray-400">
              This section contains placeholder text
              describing me, but you can replace it with your own story.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
