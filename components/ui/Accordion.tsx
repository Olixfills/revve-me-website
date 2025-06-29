"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ImageAssets } from "../../assets";

type AccordionProps = {
  question: string;
  answer: string;
  id: number;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

const Accordion = ({
  question,
  answer,
  id,
  isOpen,
  onToggle,
}: AccordionProps) => {
  return (
    <div
      onClick={() => onToggle(id)}
      className="flex-center-col max-w-2xl gap-2 w-full py-6 mx-4 cursor-pointer border-b border-white/30 dark:border-white/30"
    >
      <div className="flex justify-between gap-8 items-center w-full text-start group">
        <h2 className="font-black text-white/60 text-base md:text-[36px] transition-colors duration-1000 ease-in-out hover:text-white">
          {question}
        </h2>
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Image
            src={ImageAssets.CrossIcon}
            alt="cross icon"
            className=" w-10 h-auto opacity-50 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
          />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.4 },
              scale: { duration: 0.5 },
              y: { duration: 0.5 },
            }}
            layout
            className="w-full overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
              className="text-base font-semibold bg-black/15 p-6 rounded-xl text-white text-left w-full"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
