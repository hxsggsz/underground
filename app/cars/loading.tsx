import Image from 'next/image'
import { Loading } from '../../components/loading.tsx/loading'
import logo from '../../public/logo.png'

export default function LoadingCards() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Image width={400} height={400} src={logo} alt='Máscara Hannya' />
      <Loading />
    </div>
  )
}