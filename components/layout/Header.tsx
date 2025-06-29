"use client";

import { ImageAssets } from "../../assets";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();

  const backdropBlur = useTransform(
    scrollY,
    [0, 200, 220],
    ["blur(0px)", "blur(0px)", "blur(12px)"]
  );

  const backgroundColor = useTransform(
    scrollY,
    [0, 200, 220],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.2)"]
  );

  const headerHeight = useTransform(scrollY, [0, 200], ["100px", "40px"]);

  const logoScale = useTransform(scrollY, [0, 200], [1.3, 1]);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-transparent flex items-start md:items-center justify-between px-4 md:px-8"
      style={{
        backdropFilter: backdropBlur,
        backgroundColor: backgroundColor,
        height: headerHeight,
      }}
    >
      <motion.div style={{ scale: logoScale }}>
        <Image
          src={ImageAssets.Logo}
          alt="logo"
          width={120}
          height={40}
          className="lg:h-full h-10 w-auto"
        />
      </motion.div>
    </motion.header>
  );
};

export default Header;
