"use client";


import Services from '@/components/Services'
import Application from '@/components/Application'
import Download from '@/components/Download'
import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Download />
      <Application />
      <Services />
      {/* <ShortCode /> */}
    </Layout>
  )
}
