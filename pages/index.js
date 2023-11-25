import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landmarks from "@/pages/landmarks";
import HomeBar from '@/src/components/HomeBar';




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeBar />
      <Landmarks/>
    </>
  )
}
