/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ImageAssets } from "../../assets";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Wallets = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Card data
  const cards = [
    { src: ImageAssets.CanadaCard, alt: "Canada Card", id: "canada" },
    { src: ImageAssets.NigeriaCard, alt: "Nigeria Card", id: "nigeria" },
    { src: ImageAssets.USDCard, alt: "USD Card", id: "usd" },
    { src: ImageAssets.CFACard, alt: "CFA Card", id: "cfa" },
  ];

  // Text animations
  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const phoneY = useTransform(scrollYProgress, [0.2, 0.6], [200, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const phoneScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1]);

  const girlX = useTransform(scrollYProgress, [0.3, 0.7], [200, 0]);
  const girlOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  const getCardAnimations = (index: number) => {
    const startPoint = 0.4 + index * 0.08;
    const stackEndPoint = startPoint + 0.25;
    const separationStartPoint = 0.75;
    const separationEndPoint = 0.9;

    const fromLeft = index % 2 === 0;
    const startX = fromLeft ? -400 : 400;
    const endX = 0;

    // Stacking offset (cards come together)
    const stackOffset = -index * 8;

    // Separation offset (cards spread apart)
    const separationOffset = (index - (cards.length - 1) / 2) * 60;

    const x = useTransform(
      scrollYProgress,
      [startPoint, stackEndPoint],
      [startX, endX]
    );

    // Y animation: first stack together, then separate
    const y = useTransform(
      scrollYProgress,
      [startPoint, stackEndPoint, separationStartPoint, separationEndPoint],
      [0, stackOffset, stackOffset, separationOffset]
    );

    const rotate = useTransform(
      scrollYProgress,
      [startPoint, stackEndPoint],
      [fromLeft ? -30 : 30, fromLeft ? -2 : 2]
    );
    const scale = useTransform(
      scrollYProgress,
      [startPoint, stackEndPoint],
      [0.8, 1]
    );
    const opacity = useTransform(
      scrollYProgress,
      [startPoint, stackEndPoint],
      [0, 1]
    );

    return {
      x: useSpring(x, springConfig),
      y: useSpring(y, springConfig),
      rotate: useSpring(rotate, springConfig),
      scale: useSpring(scale, springConfig),
      opacity: useSpring(opacity, springConfig),
    };
  };

  const floatingAnimation = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 grow w-full min-h-screen relative overflow-hidden"
    >
      <div className="flex flex-col gap-12 justify-end h-full max-w-md items-center text-center md:text-start p-8">
        <motion.h2
          style={{
            y: useSpring(titleY, springConfig),
            opacity: useSpring(titleOpacity, springConfig),
          }}
          className="text-2xl font-black mb-4"
        >
          Multi-currency Wallets
        </motion.h2>
        <div className="flex flex-col gap-4">
          <motion.p
            style={{
              y: useSpring(textY, springConfig),
              opacity: useSpring(textOpacity, springConfig),
            }}
          >
            Facilitate effortless management of multiple wallets, each dedicated
            to a specific currency, streamlining transactions and storage across
            various currencies.
          </motion.p>

          <motion.p
            style={{
              y: useSpring(textY, springConfig),
              opacity: useSpring(textOpacity, springConfig),
            }}
          >
            Enhance user experience with tailored wallets for different
            currencies, empowering efficient financial management and
            flexibility in global transactions
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col justify-end h-full items-center relative">
        <motion.div
          style={{
            y: useSpring(phoneY, springConfig),
            opacity: useSpring(phoneOpacity, springConfig),
            scale: useSpring(phoneScale, springConfig),
          }}
          className="relative z-10"
        >
          <Image
            src={ImageAssets.MobileMockup}
            alt={"Mobile Mockup"}
            className="relative"
          />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] z-20">
          {cards.map((card, index) => {
            const cardAnimations = getCardAnimations(index);

            return (
              <motion.div
                key={card.id}
                style={{
                  x: cardAnimations.x,
                  y: cardAnimations.y,
                  rotate: cardAnimations.rotate,
                  scale: cardAnimations.scale,
                  opacity: cardAnimations.opacity,
                  zIndex: cards.length - index,
                }}
                variants={{
                  hover: {
                    scale: 1.05,
                    y: -5,
                    rotate: 2,
                    zIndex: 10,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  },
                }}
                whileHover="hover"
                className="absolute w-full cursor-pointer"
              >
                <motion.div
                  style={{
                    y: useTransform(
                      floatingAnimation,
                      [0, 1],
                      [0, Math.sin(Date.now() * 0.001 + index) * 5]
                    ),
                  }}
                  transition={{
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                    opacity: useTransform(
                      scrollYProgress,
                      [0.4 + index * 0.1, 0.5 + index * 0.1],
                      [0, 1]
                    ),
                  }}
                />
              </motion.div>
            );
          })}{" "}
        </div>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]),
          }}
        />
      </div>

      <div className="md:flex flex-col justify-end h-full items-center hidden">
        <motion.div
          style={{
            x: useSpring(girlX, springConfig),
            opacity: useSpring(girlOpacity, springConfig),
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <Image src={ImageAssets.Girl} alt={"Girl"} />
        </motion.div>
      </div>
    </section>
  );
};

export default Wallets;
