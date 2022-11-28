import { ReactNode } from "react"

interface ModalProps {
  children: ReactNode
}

interface ModalIconProps {
  children: ReactNode
  onClick?: (event: Event) => void
}

const ModalRoot: React.FC<ModalProps> = ({ children }: ModalProps) => (
  <div className="w-full h-full absolute bg-just-black/[.06]">{children}</div>
)

const ModalBody: React.FC<ModalProps> = ({ children }: ModalProps) => (
  <div className="-z-20 absolute bottom-[50%] left-[30%] max-w-[500px] max-md:left-[20%] max-sm:left-[0] max-sm:w-[100vw] max-sm:max-w-full max-md:bottom-[50%] p-8 rounded-md bg-just-black">{children}</div>
)

const ModalTitle: React.FC<ModalProps> = ({ children }: ModalProps) => (
  <h1 className="text-just-white text-center font-bold text-xl">{children}</h1>
)

const ModalIcon: React.FC<ModalIconProps> = ({ children }: ModalIconProps) => (
  <div className="absolute right-0 top-0 m-3">{children}</div>
)

const ModalContent: React.FC<ModalProps> = ({ children }: ModalProps) => (
  <div className="font-semibold text-center text-just-white">{children}</div>
)

export const Modal = {
  Root: ModalRoot,
  Content: ModalContent,
  Title: ModalTitle,
  Icon: ModalIcon,
  Body: ModalBody
}