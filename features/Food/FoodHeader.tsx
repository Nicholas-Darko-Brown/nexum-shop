import Image from 'next/image'
import React from 'react'
import FoodHeaderImage from '@/public/images/header-2.jpg'

const FoodHeader = () => {
  return (
    <header className='w-full relative'>
        <Image src={FoodHeaderImage} className="w-full" alt="FoodHeaderImage" />
    </header>
  )
}

export default FoodHeader