import { Modal } from "../../../components/modal/modal"
import { Text } from "../../../components/text/text"

export default function QuemSomos() {
  return (
    <Modal.Root>
      <Modal.Body>
        <Modal.Title>Quem somos?</Modal.Title>
        <Modal.Content>Nós somos<span><Text first="Underground" second="地下" /></span></Modal.Content>
        <Modal.Content>Somos o Submundo dos carros JDM, todos os carros Japoneses mais famosos do mundo estão aqui😈</Modal.Content>
      </Modal.Body>
    </Modal.Root>
  )
}
{/* <div className="fixed flex flex-col items-center justify-center w-full max-w-md px-3 py-32 mx-auto text-center transform -translate-x-1/2 -translate-y-1/2 bg-just-black rounded-lg md:max-w-3xl lg:max-w-4xl sm:rounded-3xl left-1/2 top-1/2">
        <h2 className="mb-12 text-3xl font-medium font-title md:text-6xl">¿Are you absolutely sure?</h2>
        <p className="max-w-md px-2 mx-auto text-xl leading-8 ">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </p>
        <div className="px-6 py-2 mt-8 font-mono text-2xl font-normal leading-6 uppercase tracking-button btn btn-primary ">
          Join us
        </div>
        <span className="font-mono text-sm font-bold">or click outside</span>
      </div> */}