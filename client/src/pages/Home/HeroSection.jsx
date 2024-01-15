import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="bg-gray-dark w-full min-h-[95vh]">
        <div className="flex flex-col min-h-[85vh] sm:justify-around lg:justify-between items-center lg:p-14">
          <h1 className="sm:text-2xl md:text-3xl lg:text-5xl font-enriq text-white">
            Learn Application Security Online !
          </h1>

          <h1 className="text-5xl font-enriq text-white">
            EduBlink
          </h1>
          <div className="flex flex-col items-center gap-4">
          <h1 className="text-gray">Checkout our deep technical Application Security courses</h1>
          <button className="bg-none border-2 border-orange  w-[125px] p-[2px] rounded-2xl text-white font-thin">VIEW COURSES</button>
          </div>   
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
