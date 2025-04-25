import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="w-full max-w-1170 mx-auto px-2 py-24 md:px-0">
        <div className="flex flex-col items-center gap-5">
          <div className="section-heading">
            <h2 className="text-3xl md:text-5xl">Full Stack Developer</h2>
          </div>
          <p className="max-w-[700px] text-xl text-center">
            I’m a passionate web developer with 8+ years of experience in
            crafting responsive, user-centered websites and apps.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 mt-10">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-[120px] md:w-[200px] h-[120px] md:h-[200px] ring-4 ring-blue-200 rounded-full">
              <Image src="/joshim.png" alt="Joshim" width={200} height={200} className="rounded-full" />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-[520px] flex flex-col gap-5">
            <p className="text-base md:text-xl text-center md:text-start text-gray-700">
              My focus is on clean code, fast performance, and pixel-perfect UI.
              I love turning ideas into digital experiences.
            </p>
            <div className="fy-center gap-3 md:gap-4 flex-wrap max-w-[380px]">
              <div className="badge">HTML</div>
              <div className="badge">CSS</div>
              <div className="badge">JavaScript</div>
              <div className="badge">TailwindCSS</div>
              <div className="badge">Vue.js</div>
              <div className="badge">React.js</div>
              <div className="badge">Next.js</div>
              <div className="badge">Laravel</div>
              <div className="badge">Mysql</div>
              <div className="badge">Figma</div>
              <div className="badge">Webflow</div>
              <div className="badge">Shopify</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
