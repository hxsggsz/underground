'use client';
import { useState, useEffect } from "react"
import { Loading } from "../components/loading.tsx/loading"
import { LoadingText } from "../components/loadingText/loadingText"
import { useRouter } from "next/navigation"
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const LoadingBeforeText = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function loading() {
      await sleep(3500)
      setLoading(false)
      await sleep(3500)
      router.push('/cars')
    }
    loading()
  }, [])
  return (
    <>
      {loading ? <Loading /> : <LoadingText first="Bem vindo ao " second="Underground" third="地下へようこそ" />}
    </>
  )
}
