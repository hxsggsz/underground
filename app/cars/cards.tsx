'use client'
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface CardTypes {
  children: ReactNode
}

interface ImageTypes {
  image: string
  src: StaticImageData
  alt: string
}

const CardRoot: React.FC<CardTypes> = ({ children }: CardTypes) => (
  <motion.main
    whileHover={{ scale: 1.2 }}
    whileInView={{ x: [0, 2, -2, 0] }}
    viewport={{ once: true, amount: 0.5 }}
    className='flex 
   flex-col
   w-[310px] 
   m-4 
   rounded-lg 
   justify-center
   bg-just-black 
   shadow-2xl'>
    {children}
  </motion.main>
)

const CardImage: React.FC<ImageTypes> = ({ image, alt, src }: ImageTypes) => (
  <Image
    className='rounded-t-lg 
   border border-just-black'
    src={image}
    alt={alt} />
)

const CardText: React.FC<CardTypes> = ({ children }: CardTypes) => (
  <p className='flex flex-col whitespace-normal items-center justify-center text-center m-4 font-semibold text-xl text-just-white'>
    {children}
  </p>
)

export const Card = {
  Root: CardRoot,
  Image: CardImage,
  Text: CardText
}