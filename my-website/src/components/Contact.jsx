export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-8 py-16"
    >
      <div className="bg-[#0c0c0c]/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mb-6">
          Contact
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded bg-gray-800/80 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-800/80 text-white focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="p-3 rounded bg-gray-800/80 text-white focus:outline-none"
          ></textarea>
          <button className="p-3 rounded bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-black font-bold hover:opacity-90 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
