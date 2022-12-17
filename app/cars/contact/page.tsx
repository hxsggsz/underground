'use client'
import Link from "next/link"
import { GithubLogo, LinkedinLogo } from "phosphor-react"
import { Modal } from "../../../components/modal/modal"

export default function QuemSomos() {
  return (
    <Modal.Root>

      <Modal.Body>

        <Modal.Title>Contato</Modal.Title>

        <Modal.Content>
          <Link target='_blank' href='https://github.com/hxsggsz'><div className='flex gap-4'><GithubLogo color='white' size={30} />Github</div></Link>
        </Modal.Content>

        <Modal.Content>
          <Link target='_blank' href='https://www.linkedin.com/in/hxsggsz/'><div className='flex gap-4'><LinkedinLogo color='white' size={30} />Linkedin</div></Link>
        </Modal.Content>

      </Modal.Body>

    </Modal.Root>
  )
}