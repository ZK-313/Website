// import { useState } from "react";

// const projects = [
//   {
//     name: "Blackjack",
//     description: "A simple blackjack game made in Python utilizing the tkinter library for GUI, and Pillow (PIL) to handle images. The game has a special ruleset which can be found in the 'rules' window which outlines how bets will be returned.",
//     image: "https://via.placeholder.com/400x250",
//   },
//   {
//     name: "Todo-List CLI / App",
//     description: "A simple Java command line interface to simulate a todo list. Allows users to add and remove tasks, along with mark them as done and incomplete. All commands can be found by typing 'todo -h' in the terminal. There is also a frontend app for Windows users who choose to use it, made using HTML, css, and javascript, all powered by ElectronJS.",
//     image: "https://via.placeholder.com/400x250",
//   },
//   {
//     name: "C# Social Media Platform",
//     description: "An Object Oriented social media platform written in C#. This is an ongoing project, and currently implements user logins, posts, comments, replies, and notifications. In the future, I want to expand this project to include a frontend as a website.",
//     image: "https://via.placeholder.com/400x250",
//   },
//   {
//     name: "Wordle Copy",
//     description: "A fully functional copy of wordle written in p5.js JavaScript. The app uses a list of five letter words, selects one at random, and allows you to guess words, giving feedback as to how correct each guess was.",
//     image: "https://via.placeholder.com/400x250",
//   },
// ];

// export default function Projects() {
//   const [selected, setSelected] = useState(projects[0]);

//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center px-8 py-16"
//     >
//       <div className="bg-[#0c0c0c]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-full">
//         <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mb-10 text-center">
//           Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="flex flex-col gap-4">
//             {projects.map((proj) => (
//               <button
//                 key={proj.name}
//                 onClick={() => setSelected(proj)}
//                 className={`p-3 rounded-lg text-left transition ${
//                   selected.name === proj.name
//                     ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-black"
//                     : "bg-gray-800/80 hover:bg-gray-700/80 text-gray-200"
//                 }`}
//               >
//                 {proj.name}
//               </button>
//             ))}
//           </div>
//           <div className="bg-gray-900/80 p-6 rounded-lg">
//             <img
//               src={selected.image}
//               alt={selected.name}
//               className="mb-4 rounded"
//             />
//             <h3 className="text-2xl font-semibold mb-2">{selected.name}</h3>
//             <p className="text-gray-300">{selected.description}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Blackjack",
    description: "A simple blackjack game made in Python utilizing the tkinter library for GUI, and Pillow (PIL) to handle images. The game has a special ruleset which can be found in the 'rules' window which outlines how bets will be returned.",
    image: "",
    tech: ["Python", "Tkinter", "Pillow"],
    githubUrl: "https://github.com/zulfiqarkhan/blackjack",
  },
  {
    name: "Todo-List CLI / App",
    description: "A simple Java command line interface to simulate a todo list. Allows users to add and remove tasks, along with mark them as done and incomplete. All commands can be found by typing 'todo -h' in the terminal. There is also a frontend app for Windows users who choose to use it, made using HTML, css, and javascript, all powered by ElectronJS.",
    image: "",
    tech: ["Java", "ElectronJS", "JavaScript"],
    githubUrl: "",
  },
  {
    name: "C# Social Media Platform",
    description: "An Object Oriented social media platform written in C#. This is an ongoing project, and currently implements user logins, posts, comments, replies, and notifications. In the future, I want to expand this project to include a frontend as a website.",
    image: "",
    tech: ["C#", ".NET"],
    githubUrl: "",
  },
  {
    name: "Wordle Copy",
    description: "A fully functional copy of wordle written in p5.js JavaScript. The app uses a list of five letter words, selects one at random, and allows you to guess words, giving feedback as to how correct each guess was.",
    image: "",
    embedUrl: "https://editor.p5js.org/zulfiqar.khan/full/aJ55kQu72",
    tech: ["JavaScript", "p5.js"],
    githubUrl: "",
  },
  {
    name: "Val Stocks",
    description: "A Spring Boot app that creates a stock market simulation where stocks are the performances of Valorant players. Uses a complex algorithm to define stock values based on performances. The site also implements a rest API to access and manipulate stock data.",
    image: "",
    tech: ["Java", "Spring Boot", "MySQL", "API Calls"],
    githubUrl: "https://val.zulfiqar.xyz/",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="relative min-h-screen px-4 sm:px-8 py-16"
    >
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[#0c0c0c]/90 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-800/50 w-full max-w-6xl"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mb-8 md:mb-12 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <div className="flex flex-col gap-3 md:gap-4">
              {projects.map((proj, index) => (
                <motion.button
                  key={proj.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelected(proj)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden ${
                    selected.name === proj.name
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-black shadow-lg shadow-purple-500/30 scale-105"
                      : "bg-gray-800/60 hover:bg-gray-700/80 text-gray-200 border border-gray-700/50 hover:border-gray-600/50"
                  }`}
                >
                  <span className="relative z-10 font-semibold text-base md:text-lg">
                    {proj.name}
                  </span>
                  {selected.name === proj.name && (
                    <motion.div
                      layoutId="selectedProject"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {selected.name}
                  </h3>
                  {selected.githubUrl && (
                    <a
                      href={selected.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`External link for ${selected.name}`}
                      className="text-gray-300 hover:text-white transition"
                      title={selected.githubUrl.includes("github.com") ? "View on GitHub" : "Open link"}
                    >
                      {selected.githubUrl.includes("github.com") ? (
                        // GitHub mark
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.4 7.868 10.918.576.106.786-.246.786-.552 0-.272-.01-.993-.016-1.95-3.2.695-3.876-1.543-3.876-1.543-.524-1.332-1.28-1.687-1.28-1.687-1.046-.716.08-.701.08-.701 1.158.082 1.768 1.189 1.768 1.189 1.03 1.766 2.704 1.256 3.364.96.106-.747.402-1.256.73-1.545-2.554-.291-5.237-1.277-5.237-5.68 0-1.255.448-2.282 1.184-3.086-.119-.29-.513-1.462.112-3.046 0 0 .966-.309 3.168 1.18.918-.255 1.9-.382 2.878-.387.978.005 1.96.132 2.88.387 2.2-1.49 3.165-1.18 3.165-1.18.625 1.584.232 2.756.114 3.046.737.804 1.182 1.83 1.182 3.086 0 4.414-2.688 5.386-5.252 5.672.41.354.776 1.053.776 2.125 0 1.534-.014 2.772-.014 3.148 0 .31.206.664.792.55C20.214 21.396 23.5 17.087 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        // External link icon
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path d="M13 3a1 1 0 1 0 0 2h4.586l-7.293 7.293a1 1 0 1 0 1.414 1.414L19 6.414V11a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-7z"/>
                          <path d="M5 5a2 2 0 0 0-2 2v10c0 1.103.897 2 2 2h10a2 2 0 0 0 2-2v-4a1 1 0 1 0-2 0v4H5V7h4a1 1 0 1 0 0-2H5z"/>
                        </svg>
                      )}
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                  {selected.description}
                </p>
                {selected.tech && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selected.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs md:text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {selected.embedUrl ? (
                  <div className="mt-6 w-full" style={{ position: "relative", paddingTop: "100%" }}>
                    <iframe
                      src={selected.embedUrl}
                      title={selected.name}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "0", borderRadius: "0.5rem" }}
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                ) : selected.image ? (
                  <motion.img
                    src={selected.image}
                    alt={selected.name}
                    className="mt-6 rounded-lg w-full h-auto shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}