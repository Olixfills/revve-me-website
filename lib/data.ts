import { ImageAssets } from "../assets";

export const faqs = [
  {
    id: 1,
    question: "How does Revve work?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    question: "Where is Revve available?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    question: "Is Revve a bank?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    question: "Is my money safe with Revve?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    question: "What document do I need for verification?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    question: "What should I do if my transaction is delayed or fails?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 7,
    question: "What should I do if my transaction is delayed or fails?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 8,
    question: "Can I transfer money within the same currency?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const heroBackground = [
  ImageAssets.HeroImage1.src,
  ImageAssets.HeroImage2.src,
  ImageAssets.HeroImage3.src,
  ImageAssets.HeroImage4.src,
];

export const slides = [
  {
    background: heroBackground[0],
    leftSection: {
      country: "Canada",
    },
    middleSection: {
      amount: "+C$750",
      flag: ImageAssets.CanadaFlag,
      reverseOrder: false,
      transfer: {
        image: ImageAssets.GTB,
        time: "Yesterday, 1:28 AM",
        description: "Transfer to Lil Sis",
        amount: "-₦862,912.94",
      },
    },
    rightSection: {
      country: "Nigeria",
    },
  },
  {
    background: heroBackground[1],
    leftSection: {
      country: "Canada",
    },
    middleSection: {
      amount: "+₵3,920",
      flag: ImageAssets.GhanaianFlag,
      reverseOrder: true,
      transfer: {
        image: ImageAssets.Absa,
        time: "Today, 9:45 PM",
        description: "Online transaction",
        amount: "+₵3,920",
      },
    },
    rightSection: {
      country: "Ghana",
    },
  },
  {
    background: heroBackground[2],
    leftSection: {
      country: "Nigeria",
    },
    middleSection: {
      amount: "+£500",
      flag: ImageAssets.NigerianFlag,
      reverseOrder: false,
      transfer: {
        image: ImageAssets.KFC,
        time: "Today, 11:28 AM",
        description: "Paid at KFC",
        amount: "-₵760.87",
      },
    },
    rightSection: {
      country: "Ghana",
    },
  },
  {
    background: heroBackground[3],
    leftSection: {
      country: "Nigeria",
    },
    middleSection: {
      amount: "-₦17,000",
      flag: ImageAssets.NigerianFlag,
      reverseOrder: true,
      transfer: {
        image: ImageAssets.MTN,
        time: "Today, 3:15 PM",
        description: "Airtime top-up",
        amount: "-₦17,000",
      },
    },
    rightSection: {
      country: "Nigeria",
    },
  },
];
