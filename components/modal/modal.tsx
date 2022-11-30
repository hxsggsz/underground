import { HTMLAttributes, ReactNode } from "react"

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

interface ModalIconProps {
  children: ReactNode
  onClick?: (event: Event) => void
}

const ModalRoot: React.FC<ModalProps> = ({ children, ...props }: ModalProps) => (
  <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center flex-col bg-just-black/[.06]" {...props}>{children}</div>
)

const ModalBody: React.FC<ModalProps> = ({ children, ...props }: ModalProps) => (
  <div className=" p-8 rounded-md bg-just-black" {...props}>{children}</div>
)

const ModalTitle: React.FC<ModalProps> = ({ children, ...props }: ModalProps) => (
  <h1 className="flex justify-around text-just-white text-center font-bold text-xl" {...props}>{children}</h1>
)

const ModalIcon: React.FC<ModalIconProps> = ({ children }: ModalIconProps) => (
  <div className='cursor-pointer'>{children}</div>
)

const ModalContent: React.FC<ModalProps> = ({ children, ...props }: ModalProps) => (
  <div className="font-semibold text-center text-just-white" {...props}>{children}</div>
)

export const Modal = {
  Root: ModalRoot,
  Content: ModalContent,
  Title: ModalTitle,
  Icon: ModalIcon,
  Body: ModalBody
}