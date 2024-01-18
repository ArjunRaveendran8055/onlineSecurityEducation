import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section>
      <div className="bg-gray-dark w-full min-h-[95vh]">
        <div className="flex flex-col min-h-[85vh] sm:justify-around lg:justify-between items-center lg:p-14">
          <motion.div
            className="sm:text-2xl md:text-3xl lg:text-5xl font-enriq text-white"
            variants={{
              hidden: { opacity: 1, x: -500 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            Learn Application Security Online !
          </motion.div>

          <h1 className="text-5xl font-enriq text-white">EduBlink</h1>
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="text-gray"
              variants={{
                hidden: { opacity: 0.5, x: 1000 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <span className="lg:flex lg:gap-2">Checkout <span className="sm:hidden lg:block lg:text-nowrap">our deep technical </span> Application Security courses</span>
            </motion.div>
            <Link to="/allCourses">
            <button className="bg-none border-2 border-orange  w-[125px] p-[2px] rounded-2xl text-white font-thin">
              VIEW COURSES
            </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
