import { useState } from "react";

const projects = [
  {
    name: "Project One",
    description: "This is a placeholder description for project one.",
    image: "https://via.placeholder.com/400x250",
  },
  {
    name: "Project Two",
    description: "This is a placeholder description for project two.",
    image: "https://via.placeholder.com/400x250",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-8 py-16"
    >
      <div className="bg-[#0c0c0c]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-full">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mb-10 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            {projects.map((proj) => (
              <button
                key={proj.name}
                onClick={() => setSelected(proj)}
                className={`p-3 rounded-lg text-left transition ${
                  selected.name === proj.name
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-black"
                    : "bg-gray-800/80 hover:bg-gray-700/80 text-gray-200"
                }`}
              >
                {proj.name}
              </button>
            ))}
          </div>
          <div className="bg-gray-900/80 p-6 rounded-lg">
            <img
              src={selected.image}
              alt={selected.name}
              className="mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold mb-2">{selected.name}</h3>
            <p className="text-gray-300">{selected.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
