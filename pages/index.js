import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landmarks from "@/pages/landmarks";




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Landmarks/>
    </>
  )
}
