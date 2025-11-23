import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Scotiabank",
    location: "Toronto, ON",
    period: "Fall 2025",
    description: "Helped develop and maintain backend APIs for web applications in spring boot. Created production level endpoints and services for the application. Also implemented Python scripts to automate processes.",
    responsibilities: [
      "Developed RESTful APIs using Spring Boot and Java",
      "Implemented Python scripts to automate many process to save the organization money",
      "Optimized data collection and processing using websockets",
      "Optimized dependency management in gradle",
      "Collaborated with many managers and engineers to deliver helpful and useful processes",
    ],
    technologies: ["Java", "Spring Boot", "Python", "WebSockets", "SQL", "Docker"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-900/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg md:text-xl text-purple-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm md:text-base">
                      {exp.location}
                    </p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="mt-4 md:mt-0"
                  >
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-400/20 text-gray-200 rounded-full border border-purple-500/30 text-sm md:text-base font-medium">
                      {exp.period}
                    </span>
                  </motion.div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.1 + respIndex * 0.05,
                        }}
                        className="text-gray-300 text-sm md:text-base flex items-start"
                      >
                        <span className="text-purple-400 mr-2 mt-1">▸</span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-200 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.6 + index * 0.1 + techIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-xs md:text-sm bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

