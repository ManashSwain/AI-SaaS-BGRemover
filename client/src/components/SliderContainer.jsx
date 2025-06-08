import React from 'react'
import Slider from './Slider'

const SliderContainer = () => {
  return (
    <>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 border-gray-900 bg-red-600">
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Remove Background With High Quality and Accuracy
          </h1> 
        <Slider/>
    </div>
    </>
  )
}

export default SliderContainer
