import CardTrip from '@/components/common/CardTrip'
import { getTrip } from '@/server/user/actions'
import { Trip } from '@/types/Driver/ResponseUserTripQuery'
import React from 'react'
import { HeaderTrip } from './HeaderTrip'

const Trip = async () => {
    const trips: Trip[] = await getTrip()
    return (
        <div className='bg-[#f3f3f3]'>
            <HeaderTrip />
            <div className='flex flex-col gap-5 mt-10 pb-10'>
                {
                    trips.map((trip, index) => (
                        <CardTrip trip={trip} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Trip