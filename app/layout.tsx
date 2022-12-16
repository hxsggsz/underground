'use client'
import './globals.css'
import { Inter } from '@next/font/google'
import { Provider } from 'urql'
import { client } from '../lib/urql'
import SearchProvider from '../context/searchProvider'
import { CardProvider } from '../context/cardContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-dark-red'>
        <Provider value={client}>
          <SearchProvider>
            <CardProvider>
              {children}
            </CardProvider>
          </SearchProvider>
        </Provider>
      </body>
    </html>
  )
}
