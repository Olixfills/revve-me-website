import { ImageAssets } from "../../assets";
import React from "react";
import Image from "next/image";
import BaseButton from "../ui/BaseButton";

const PayBills = () => {
  const backgroundImage = ImageAssets.PayBills.src;

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex justify-between items-center p-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-white max-w-[340px] items-center text-center md:text-start md:items-start flex flex-col gap-12">
        <h2 className="text-2xl font-black ">Pay Bills</h2>
        <p>
          Say goodbye to long queues and endless processes—our platform offers a
          seamless solution for paying bills instantly without any hiccups.
        </p>
        <div>
          <p>Get Revve on your phone</p>
          <BaseButton text="Coming Soon" variant="white" />
        </div>
      </div>
      <div className="max-w-[340px] w-full hidden md:flex">
        <Image
          src={ImageAssets.Calendar}
          alt={"Calendar"}
          className="w-full aspect-square"
        />
      </div>
    </section>
  );
};

export default PayBills;
