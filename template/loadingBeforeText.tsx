'use client';
import { useState, useEffect } from "react"
import { Loading } from "../components/loading.tsx/loading"
import { LoadingText } from "../components/loadingText/loadingText"
import { useRouter } from "next/navigation"
import { sleep } from "../lib/sleep";

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
  }, [router])
  return (
    <>
      {loading ? <Loading /> : <LoadingText first="Bem vindo ao " second="Underground" third="地下へようこそ" />}
    </>
  )
}
