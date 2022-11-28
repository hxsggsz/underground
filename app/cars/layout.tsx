import '../globals.css'
import { Inter } from '@next/font/google'
import Header from './header'
import Head from '../head'

const inter = Inter({ subsets: ['latin'] })

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}