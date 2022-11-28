
import Image from "next/image"
import logo from '../public/logo.png'
import { LoadingBeforeText } from "../template/loadingBeforeText";

export default function Home() {
  return (
    <div className="flex align-center flex-row flex-wrap justify-center w-auto">
      <main>
        <Image width={400} height={400} src={logo} alt='Máscara Hannya' />
        <LoadingBeforeText />
      </main>
    </div>
  )
}
