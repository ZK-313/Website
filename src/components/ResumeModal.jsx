import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import resumePdf from "../assets/Zulfiqar Khan Software Engineering Resume.pdf";

export default function ResumeModal({ isOpen, onClose }) {
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const widgetIdRef = useRef(null);
  const containerRef = useRef(null);

  // Load reCAPTCHA script
  useEffect(() => {
    if (isOpen && !recaptchaLoaded) {
      // Check if script already exists
      if (document.querySelector('script[src*="recaptcha"]')) {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(() => setRecaptchaLoaded(true));
        } else {
          setRecaptchaLoaded(true);
        }
        return;
      }

      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          window.grecaptcha.ready(() => setRecaptchaLoaded(true));
        } else {
          setRecaptchaLoaded(true);
        }
      };
      document.body.appendChild(script);
    }
  }, [isOpen, recaptchaLoaded]);

  // Render reCAPTCHA widget
  useEffect(() => {
    if (isOpen && recaptchaLoaded && containerRef.current && !widgetIdRef.current) {
      setIsVerified(false);
      
      if (window.grecaptcha && window.grecaptcha.render) {
        try {
          widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
            sitekey: "6Ldf2RUsAAAAAAr7lpy85AjuUJjpnG3VD7-65zxR",
            callback: (token) => {
              setIsVerified(true);
            },
            "expired-callback": () => {
              setIsVerified(false);
            },
            "error-callback": () => {
              setIsVerified(false);
            },
          });
        } catch (error) {
          console.error("reCAPTCHA render error:", error);
        }
      }
    }
  }, [isOpen, recaptchaLoaded]);

  // Cleanup when modal closes
  useEffect(() => {
    if (!isOpen && widgetIdRef.current) {
      if (window.grecaptcha && window.grecaptcha.reset) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (error) {
          console.error("reCAPTCHA reset error:", error);
        }
      }
      widgetIdRef.current = null;
      setIsVerified(false);
    }
  }, [isOpen]);

  const handleDownload = () => {
    if (isVerified) {
      const link = document.createElement("a");
      link.href = resumePdf;
      link.download = "Zulfiqar_Khan_Software_Engineering_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#0c0c0c]/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-center">
              Download Resume
            </h2>
            
            <p className="text-gray-300 text-center text-sm md:text-base">
              Please verify you're human to download the resume.
            </p>

            <div className="flex justify-center">
              <div ref={containerRef} id="recaptcha-container" />
            </div>

            <motion.button
              onClick={handleDownload}
              disabled={!isVerified}
              whileHover={isVerified ? { scale: 1.05 } : {}}
              whileTap={isVerified ? { scale: 0.95 } : {}}
              className={`w-full py-3 px-6 rounded-full font-medium text-base transition-all duration-300 ${
                isVerified
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-black hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer"
                  : "bg-gray-700 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isVerified ? "Download Resume" : "Verify to Download"}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

