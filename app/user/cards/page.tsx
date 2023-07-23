import React from 'react'
import Tabs from './Tabs'
import { HeaderCards } from './HeaderCards'
import { getCards } from '@/server/user/actions'

const Card = async () => {
  const cards = await getCards()
  console.log(cards)
  return (
    <div className='min-h-screen'>
      <HeaderCards/>
      <Tabs cards={cards}/>
    </div>
  )
}

export default Card