/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ImageAssets } from "../../assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, easeOut } from "framer-motion";
import { useRef } from "react";
import { GoCircle } from "react-icons/go";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentImage, setCurrentImage] = useState(ImageAssets.Naira);
  const [paperPlanePhase, setPaperPlanePhase] = useState("initial");
  const [currencyAnimationKey, setCurrencyAnimationKey] = useState(0);
  const [paperPlaneAnimationKey, setPaperPlaneAnimationKey] = useState(0);
  const [currencyBackgroundPhase, setCurrencyBackgroundPhase] =
    useState("down");

  useEffect(() => {
    if (!isInView) return;
    const startCurrencyLoop = () => {
      setCurrencyBackgroundPhase("up");
      setCurrentImage(ImageAssets.Cedi);
      setCurrencyAnimationKey((prev) => prev + 1);
      setTimeout(() => {
        setCurrencyBackgroundPhase("down");
        setCurrentImage(ImageAssets.Naira);
        setCurrencyAnimationKey((prev) => prev + 1);
      }, 5000);
    };

    startCurrencyLoop();
    const currencyInterval = setInterval(startCurrencyLoop, 10000);

    const startPaperPlaneLoop = () => {
      setPaperPlaneAnimationKey((prev) => prev + 1);
      setPaperPlanePhase("initial");

      const timeout1 = setTimeout(() => {
        setPaperPlanePhase("firstComplete");
      }, 500);

      const timeout2 = setTimeout(() => {
        setPaperPlanePhase("secondPhase");
      }, 4700);

      const timeout3 = setTimeout(() => {
        startPaperPlaneLoop();
      }, 8000);
    };

    startPaperPlaneLoop();

    return () => {
      clearInterval(currencyInterval);
    };
  }, [isInView]);

  const backgroundSlideVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const backgroundSlideDownVariants = {
    initial: { y: "0%" },
    animate: {
      y: "100%",
      transition: { duration: 1.5, ease: easeOut },
    },
  };

  const blueBackgroundVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { duration: 1.0, ease: easeOut },
    },
  };

  const scaleInVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        // type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const flipVariants = {
    hidden: { rotateY: 180, rotateX: 180, opacity: 0 },
    visible: {
      rotateY: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } },
    enter: { opacity: 1, transition: { duration: 0.3 } },
  };

  const getPaperPlaneAnimation = () => {
    switch (paperPlanePhase) {
      case "initial":
        return { x: "-120%", y: "120%", scale: 0.5 };
      case "firstComplete":
        return { x: "0%", y: "0%", scale: 1 };
      case "secondPhase":
        return { x: "100%", y: "-150%", scale: 0.5 };
      default:
        return { x: "-120%", y: "120%", scale: 0.5 };
    }
  };

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 md:gap-6 min-h-screen relative w-full overflow-hidden px-4 py-8"
    >
      <div className="relative z-20">
        <Image
          src={ImageAssets.HeroImage1}
          alt="Send money to loved ones"
          className="w-[70vw] md:w-[30vw] max-w- aspect-square object-cover rounded-3xl md:rounded-4xl relative"
        />
        <div className="absolute inset-0 rounded-3xl md:rounded-4xl flex items-end p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-white text-sm md:text-base"
          >
            Seamlessly bridge distances with our effortless remittance service.
            Send support, and financial care to your loved ones back home.
          </motion.p>
        </div>
      </div>

      <h2 className="text-2xl font-black max-w-xs sm:max-w-md text-center leading-tight px-4 relative z-20">
        Send and Receive Money
      </h2>

      <motion.div
        className="block absolute inset-0 pointer-events-none z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={scaleInVariants}
          className="absolute top-16 sm:top-20 -left-8 sm:-left-16 md:-left-20"
        >
          <Image
            src={ImageAssets.Send}
            alt="Send money"
            className="w-20 sm:w-24 md:w-32 aspect-square object-cover rounded-2xl md:rounded-4xl"
          />
        </motion.div>

        <motion.div
          variants={scaleInVariants}
          className="absolute top-16 sm:top-20 right-4 sm:right-8 md:right-12"
        >
          <Image
            src={ImageAssets.Eating}
            alt="Family dining"
            className="w-20 sm:w-24 md:w-32 aspect-square object-cover rounded-2xl md:rounded-4xl"
          />
        </motion.div>

        <motion.div
          variants={scaleInVariants}
          className="absolute bottom-16 sm:bottom-20 -left-8 sm:-left-16 md:-left-20"
        >
          <Image
            src={ImageAssets.Shopping}
            alt="Shopping"
            className="w-28 sm:w-36 md:w-48 aspect-square object-cover rounded-2xl md:rounded-4xl"
          />
        </motion.div>

        <motion.div
          variants={scaleInVariants}
          className="absolute bottom-16 sm:bottom-20 -right-8 sm:-right-16 md:-right-20"
        >
          <Image
            src={ImageAssets.Send}
            alt="Money transfer"
            className="w-24 sm:w-28 md:w-36 aspect-square object-cover rounded-2xl md:rounded-4xl"
          />
        </motion.div>

        <motion.div className="hidden md:flex absolute top-1/5 left-1/12 bg-purple-500 rounded-4xl w-32 aspect-square items-center justify-center overflow-hidden">
          <motion.div
            key={`bg-${currencyAnimationKey}`}
            variants={
              currencyBackgroundPhase === "up"
                ? backgroundSlideVariants
                : backgroundSlideDownVariants
            }
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-red-500 "
          />

          <motion.div
            key={`circle-${currencyAnimationKey}`}
            variants={flipVariants}
            initial="hidden"
            animate="visible"
            className="absolute size-[70%] z-10"
          >
            <GoCircle className="text-white size-[100%]" />
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage.src || "default"}
              variants={imageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="absolute z-5"
            >
              <Image
                src={currentImage}
                alt="Currency exchange"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div className="hidden md:flex absolute top-1/3 right-2/12 bg-blue-600 rounded-4xl w-32 aspect-square items-center justify-center overflow-hidden">
          {paperPlanePhase !== "initial" && (
            <motion.div
              key={`green-bg-${paperPlaneAnimationKey}`}
              variants={backgroundSlideVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-green-500 "
            />
          )}
          {paperPlanePhase === "secondPhase" && (
            <motion.div
              key={`blue-bg-${paperPlaneAnimationKey}`}
              variants={blueBackgroundVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 bg-blue-600 z-10"
            />
          )}
          <motion.img
            key={`plane-${paperPlaneAnimationKey}`}
            src={ImageAssets.PaperPlane.src}
            alt="Paper plane"
            className="object-contain absolute z-20"
            width={64}
            height={64}
            initial={{
              x: "-120%",
              y: "120%",
              scale: 0,
            }}
            animate={getPaperPlaneAnimation()}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;
