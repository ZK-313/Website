import { motion } from "framer-motion";

const education = [
  {
    degree: "Hons. BA Computer Science",
    university: "York University",
    location: "Toronto, ON",
    period: "2023 - 2027",
    description: "Focused on software engineering, algorithms, and data structures. Completed coursework in Java development, database systems, and team collaboration.",
    coursework: [
      "Data Structures and Algorithms",
      "Software Engineering",
      "Database Systems",
      "Java, C, & Assembly Development",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
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
            Education
          </motion.h2>

          <div className="relative py-4">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-10 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-yellow-400/50"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 border-4 border-[#0c0c0c] shadow-lg shadow-purple-500/50 z-10 transform -translate-x-1/2"
                  ></motion.div>
                  
                  <div className="bg-gray-900/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl">
                    <div className="flex flex-row items-start justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg md:text-xl text-purple-400 font-semibold mb-1">
                          {edu.university}
                        </p>
                        <p className="text-gray-400 text-sm md:text-base">
                          {edu.location}
                        </p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="flex-shrink-0"
                      >
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-400/20 text-gray-200 rounded-full border border-purple-500/30 text-sm md:text-base font-medium whitespace-nowrap">
                          {edu.period}
                        </span>
                      </motion.div>
                    </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-3">
                    Relevant Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <motion.span
                        key={courseIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + index * 0.1 + courseIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 text-xs md:text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

