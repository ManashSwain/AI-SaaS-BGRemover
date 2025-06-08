import React from 'react'
import Slider from './Slider'

const SliderContainer = () => {
  return (
    <>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 border-gray-700">
        <h1 className="mb-12 text-3xl font-extrabold tracking-tight leading-none text-gray-700 md:text-4xl lg:text-5xl">
            Remove Background With High Quality and Accuracy
          </h1> 
          <div className='bg-gray-600 p-1 rounded-lg border-gray-700' >
        <Slider/>
        </div>
    </div>
    </>
  )
}

export default SliderContainer
