"use client";
import BackHeader from '@/components/common/BackHeader'
import CardTrip from '@/components/common/CardTrip'
import { Trip } from '@/types/Driver/ResponseUserTripQuery'
import React from 'react'
import { motion } from "framer-motion"
import { animationsScreens, variants } from "@/theme/animations";
interface Props {
    trips: Trip[]
}
const Trips = ({ trips }: Props) => {
    return (
        <motion.div
            // {...animationsScreens}
            className='bg-[#f3f3f3] min-h-screen'
        >
            <motion.div
                // variants={variants}
                className="w-90 ">
                <BackHeader url="/user/profile" name="سفرها" />
                <div className="flex flex-col gap-5 mt-10 pb-10">
                    {trips.map((trip, index) => (
                        <CardTrip trip={trip} key={index} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Trips