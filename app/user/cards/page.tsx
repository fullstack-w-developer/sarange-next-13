import React from 'react'
import Tabs from './Tabs'
import { HeaderCards } from './HeaderCards'
import { deActiveCard, getCards } from '@/server/user/actions'

const Card = async () => {
  const cards = await getCards()

  return (
    <div className='min-h-screen'>
      <HeaderCards/>
      <Tabs deActiveCard={deActiveCard} cards={cards}/>
    </div>
  )
}

export default Card