'use client'
import { motion } from "framer-motion"
import { HTMLAttributes, ReactNode } from "react"

interface NotifyTypes extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

interface NotifyRoot { //framer-motion conflitou com o HTMLAttributes<HTMLDivElement>
  children: ReactNode
}

const NotifyRoot: React.FC<NotifyRoot> = ({ children }: NotifyRoot) => (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 300 }} className=' fixed bottom-5 right-[3%] rounded-md bg-just-grey'>{children}</motion.div>
)

const NotifyTitle: React.FC<NotifyTypes> = ({ children, ...props }: NotifyTypes) => (
  <div className=' p-4 font-bold text-just-white rounded-t-md bg-just-black' {...props}>{children}</div>
)

const NotifyBody: React.FC<NotifyTypes> = ({ children, ...props }: NotifyTypes) => (
  <div className='p-4 font-semibold' {...props}>{children}</div>
)

export const Notify = {
  Root: NotifyRoot,
  Title: NotifyTitle,
  Body: NotifyBody
}