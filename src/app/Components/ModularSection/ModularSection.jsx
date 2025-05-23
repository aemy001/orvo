"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import modularSections from "./data/modular";
import Button from "../Button/Button";
import './modular.css'

export default function ModularStickyScrollWrapper() {

  const content = modularSections.map((section) => ({
    title: section.title,
    description: section.description,
    features: section.features,
    icon: section.icon,
    tag: section.tag,
    content: (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <img
          src={section.image}
          alt={section.tag}
          style={{ maxWidth: "100%", borderRadius: "12px" }}
          loading="lazy"
        />
      </div>
    ),
  }));

  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionHeight = containerRef.current.scrollHeight / content.length;

      const index = Math.min(
        content.length - 1,
        Math.max(0, Math.floor((scrollPosition - containerTop) / sectionHeight))
      );
      setActiveCard(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  return (
    <section ref={containerRef} className="modular-section">
    <div className="container two">
        <div className="row">
        {/* Left scrollable text */}
        <div className="col-md-5 col-lg-5 col-sm-12">
       <div className="">
           {content.map((item, index) => (
            <div key={item.title + index} className="modular-content modular-section-container">
              {item.icon ? (
                <motion.h4    initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }} className="d-flex align-items-center gap-1 ">
                  {item.icon} {item.tag}
                </motion.h4>
              ) : (
                <motion.h5 className=""    initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}>{item.tag}</motion.h5>
              )}
              {index === 0 ? (
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="fw-bold"
                >
                  {item.title}
                </motion.h2>
              ) : (
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="fw-bold "
                >
                  {item.title}
                </motion.h3>
              )}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                className="mt-3 text-muted"
              >
                {item.description}
              </motion.p>

              {index !== 0 && (
                <Button text="Get Started" type="blackButtonWithBackground" />
              )}

              {item.features.length > 0 && (
                <ul className="px-0">
                  {item.features.map((feat, i) => (
                    <div key={i}>
                      <a href="#">{feat.label}</a> {feat.desc}
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}
       </div>
        </div>

        {/* Right sticky image/content */}
        <div
          className="d-none d-lg-block position-sticky rightsection col-md-7 col-lg-7 col-sm-12  d-flex justify-content-center align-items-end"
          style={{ top: "30px", width: "650px", height: "650px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="h-100 w-100"
            >
              {content[activeCard]?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
    </section>
  );
}
