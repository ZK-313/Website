// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

// function App() {
//   const [showNavbar, setShowNavbar] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;

//       // Only show navbar after hero
//       if (currentScroll > window.innerHeight * 0.6) {
//         if (currentScroll > lastScrollY) {
//           // scrolling down → show navbar
//           setShowNavbar(true);
//         } else {
//           // scrolling up → hide navbar
//           setShowNavbar(false);
//         }
//       } else {
//         // above hero → always hide
//         setShowNavbar(false);
//       }

//       setLastScrollY(currentScroll);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div className="bg-[#0c0c0c] text-white relative">
//       <Navbar show={showNavbar} />
//       <Hero />
//       <About />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import Starfield from "./components/Starfield";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > window.innerHeight * 0.6) {
        if (current > lastScrollY) setShowNavbar(true);   // scrolling down
        else setShowNavbar(false);                        // scrolling up
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative">
      <Starfield starCount={800} />
      <main className="relative z-10">
        <Navbar show={showNavbar} />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;