export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-16"
    >
      {/* Panel with background over stars */}
      <div className="bg-[#0c0c0c]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a passionate developer with an interest in building cool and
          interactive web applications. This section contains placeholder text
          describing me, but you can replace it with your own story.
        </p>
      </div>
    </section>
  );
}

