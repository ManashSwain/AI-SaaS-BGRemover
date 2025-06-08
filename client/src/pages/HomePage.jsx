import BlogCard from '../components/BlogCard'
import CallToAction from '../components/CallToAction'
import Hero from '../components/Hero'
import RemoveBg from '../components/RemoveBg'
import SliderContainer from '../components/SliderContainer'
import Steps from '../components/Steps'
import TestimonialCard from '../components/TestimonialCard'

const HomePage = () => {
  return (
   <>
   <Hero/>
   <Steps/>
   <SliderContainer/>
   <TestimonialCard/>
   <RemoveBg/>
   <BlogCard/>
   <CallToAction/>
   </>
  )
}

export default HomePage
