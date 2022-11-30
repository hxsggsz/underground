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