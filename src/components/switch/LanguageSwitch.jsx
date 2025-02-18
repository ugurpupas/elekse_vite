import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSwitch = () => {
  const [activeLang, setActiveLang] = useState("TR");
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    setActiveLang(lang);
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem("elekse_lang", lang.toLowerCase());
    setIsOpen(false);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("elekse_lang");

    storedLang &&
      i18n
        .changeLanguage(storedLang)
        .then(() => setActiveLang(storedLang.toUpperCase()));
  }, []);

  return (
    // <div style={{width:"100px"}}>
    <div
      className="switch-layout body-12-semibold"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div className={`language-item active-language`} layout>
        {activeLang}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-item passive-language body-12-semibold"
            //   initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            //   exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "circInOut" }}
            onClick={(e) => {
              e.stopPropagation();
              handleLanguageChange(activeLang === "TR" ? "EN" : "TR");
            }}
          >
            {activeLang === "TR" ? "EN" : "TR"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    // </div>
  );
};

export default LanguageSwitch;
