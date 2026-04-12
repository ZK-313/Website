export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800/50 py-8 px-4 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Zulfiqar Khan
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ZK-313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.4 7.868 10.918.576.106.786-.246.786-.552 0-.272-.01-.993-.016-1.95-3.2.695-3.876-1.543-3.876-1.543-.524-1.332-1.28-1.687-1.28-1.687-1.046-.716.08-.701.08-.701 1.158.082 1.768 1.189 1.768 1.189 1.03 1.766 2.704 1.256 3.364.96.106-.747.402-1.256.73-1.545-2.554-.291-5.237-1.277-5.237-5.68 0-1.255.448-2.282 1.184-3.086-.119-.29-.513-1.462.112-3.046 0 0 .966-.309 3.168 1.18.918-.255 1.9-.382 2.878-.387.978.005 1.96.132 2.88.387 2.2-1.49 3.165-1.18 3.165-1.18.625 1.584.232 2.756.114 3.046.737.804 1.182 1.83 1.182 3.086 0 4.414-2.688 5.386-5.252 5.672.41.354.776 1.053.776 2.125 0 1.534-.014 2.772-.014 3.148 0 .31.206.664.792.55C20.214 21.396 23.5 17.087 23.5 12c0-6.352-5.148-11.5-11.5-11.5Z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/zulfiqar-khan-59b135125/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
