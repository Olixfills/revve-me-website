"use client";

import { faqs } from "../../lib/data";
import React, { useState } from "react";
import Accordion from "../ui/Accordion";

const FAQs = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="bg-purple-600 min-h-screen w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 py-8 lg:py-12 px-4 lg:px-0">
      <div className="lg:col-span-1 text-white flex flex-col justify-center gap-6 lg:gap-8 max-w-full lg:max-w-[340px] p-4 lg:p-8">
        <h2 className="text-3xl lg:text-2xl font-black text-center lg:text-left">
          FAQs
        </h2>
        <p className="text-center lg:text-left text-white/90">
          Here are some basic questions and answers to help you get started
        </p>

        <div className="flex flex-col gap-3 lg:gap-2 text-center lg:text-start">
          <p className="text-white/90">Get Revve on your phone</p>
          <button className="bg-white text-black px-6 font-medium text-sm py-3 lg:py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 mx-auto lg:mx-0 w-fit">
            Download the app
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 px-4 lg:px-0">
        <div className="space-y-2 lg:space-y-0">
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              id={faq.id}
              isOpen={openItemId === faq.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
