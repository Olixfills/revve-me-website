import React from "react";
import Image from "next/image";
import { ImageAssets } from "../../assets";
import BaseButton from "../ui/BaseButton";

const ShopOnline = () => {
  return (
    <section className="bg-stone-50 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 grow w-full h-full  md:min-h-screen">
      <div className="flex flex-col gap-12 justify-end h-full items-center md:items-start text-center md:text-start max-w-md p-8">
        <h2 className="text-2xl font-black">Shop Online</h2>
        <div className="flex flex-col gap-4">
          <p>
            Experience the world at your fingertips with our seamless online
            shopping platform.{" "}
          </p>
          <p>
            From the latest fashion trends to must-have gadgets, shop the
            world&apos;s best brands and products from the comfort of your own
            home.
          </p>
        </div>
        <div>
          <p>Get Revve on your phone</p>
          <BaseButton text="Download the App" variant="black" />
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-end h-full items-center ">
        <Image
          src={ImageAssets.ShoppingPhone}
          alt={"Shopping Mobile Mockup"}
          className=""
        />
      </div>
      <div className="hidden md:flex flex-col justify-end h-full  relative items-center">
        <Image
          src={ImageAssets.ShoppingImage1}
          alt={"Shopping Image 1"}
          className="absolute top-0 left-0"
        />
        <Image
          src={ImageAssets.ShoppingImage2}
          alt={"Shopping Image 1"}
          className="absolute top-0 right-0"
        />
        <Image
          src={ImageAssets.ShoppingImage2}
          alt={"Shopping Image 1"}
          className="absolute bottom-1/4 -left-1/12"
        />
        <Image
          src={ImageAssets.ShoppingImage3}
          alt={"Shopping Image 1"}
          className="absolute bottom-0 left-0"
        />
        <Image
          src={ImageAssets.ShoppingImage1}
          alt={"Shopping Image 1"}
          className="absolute bottom-0 right-0"
        />
        <Image
          src={ImageAssets.ShoppingImage4}
          alt={"Shopping Image 1"}
          className="absolute bottom-0 right-1/2"
        />
        <Image
          src={ImageAssets.ShoppingImage4}
          alt={"Shopping Image 1"}
          className="absolute bottom-1/2 right-0"
        />
        <Image
          src={ImageAssets.ShoppingImage1}
          alt={"Shopping Image 1"}
          className="absolute top-1/3 right-1/2"
        />
      </div>
    </section>
  );
};

export default ShopOnline;
