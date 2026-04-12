import { motion } from "framer-motion";

const languages = [
  "Java",
  "Python",
  "C#",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "C++",
  "RISC-V Assembly",
  "Verilog",
  "Rust",
  "C",
  "MATLAB",
];

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
          className="bg-[#0c0c0c]/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800/50 max-w-4xl w-full space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mb-8 text-center"
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-300 leading-relaxed space-y-4 text-left"
          >
            <p>
              Hello! 👋 <br></br> <br></br>I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">Zulfiqar Khan</span>, a software engineer with a focus on <span className="text-pink-400 font-semibold">backend development</span> and <span className="text-pink-400 font-semibold">embedded software</span>. I have professional experience building and maintaining enterprise-level APIs using <span className="text-purple-400">Spring Boot</span> and <span className="text-purple-400">ASP.NET</span>, and I care deeply about writing systems that are clean, efficient, and built to scale.
            </p>
            <p>
              Outside of work, I am independently studying <span className="text-pink-400 font-semibold">guidance systems</span> and <span className="text-pink-400 font-semibold">avionics</span> which are areas that sit at the intersection of software, control theory, and aerospace. I find the engineering challenges in defence and aerospace very interesting, particularly the reliability and precision demands that those systems require.
            </p>
            <p>
              I am also picking up <span className="text-purple-400">MATLAB</span> to support my study of guidance systems and control theory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-center mb-6">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {languages.map((lang, index) => (
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 text-sm md:text-base bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-400/20 text-gray-200 rounded-full border border-purple-500/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 font-medium"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
