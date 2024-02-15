import React from 'react'
import HeroSection from '../components/global/HeroSection'
import HowAIwork from '../components/global/HowAIwork'
import StartWriting from '../components/global/StartWriting'
import Reviews from '../components/global/Reviews'
import Faq from '../components/global/Faq'
import ContactUs from '../components/global/ContactUs'
import AllTextTemplates from '../components/global/AllTextTemplates'
import SubscriptionPlans from '../components/global/SubscriptionPlans'
import FeaturesOverview from '../components/global/FeaturesOverview'
import Partners from '../components/global/Partners'
import Signin from './auth/Signin'
import Signup from './auth/Signup'

const MainData = () => {
  return (
    <>
      
        <HeroSection />
        <HowAIwork />
        <FeaturesOverview />
        <StartWriting />
        <AllTextTemplates />
        <Reviews />
        <Partners/>
        <SubscriptionPlans/>
        <Faq />
        <ContactUs />
        {/* <Signin/>
        <Signup/> */}


    </>
  )
}

export default MainData
