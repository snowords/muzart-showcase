import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";

const Hero = () => {
  const words = [
    {
      text: "引",
    },
    {
      text: "领",
    },
    {
      text: "创",
    },
    {
      text: "意",
    },
    {
      text: "，",
    },
    {
      text: "设",
    },
    {
      text: "计",
    },
    {
      text: "共鸣",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="pb-20 pt-36 min-h-screen">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      {/* <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}
      {/* <div className="h-screen w-full">

      </div> */}

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <BackgroundGradientAnimation>
        </BackgroundGradientAnimation>
        {/* Radial gradient for the container to give a faded look */}
        {/* <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        /> */}
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            青岛木追广告设计
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Creative Design Concepts into User Expectation"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

           <TypewriterEffectSmooth words={words} />

          <p className="text-center md:tracking-wider mb-10 text-sm md:text-lg lg:text-2xl">
            我们致力于成为青岛乃至全国领先的广告设计公司，通过创新和卓越的设计服务，助力客户品牌成长，实现共赢
          </p>

          <a href="#about">
            <MagicButton
              title="了解更多"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
