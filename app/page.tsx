"use client"
import Image from "next/image";
import Taxi from "@/assets/images/taxi.jpg"
import Button from "@/components/common/Button";
import Link from "next/link";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="layout">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 900 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Image className="" src={Taxi} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 900 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1,delay:0.50 }}
        className="mb-8">
        <Button name="بزن بریم" />
        <div className="flex items-center mt-5 justify-center font-artin-regular w-full">
          <Link className="flex gap-1 items-center" href="#">آیا  راننده تاکسی هستید؟ <span className="border-b border-blue-600 text-blue-600">ورود به عنوان راننده</span></Link>
        </div>
      </motion.div>
    </div>
  )
}
