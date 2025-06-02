import React from 'react'
import HeroSection from '@/components/seller/herosection'
import WhyChooseHarmony from '@/components/seller/whyharmoney'
import HowHarmonyWorks from '@/components/seller/howitwork'
import CTASection from '@/components/seller/calltoAction'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <WhyChooseHarmony/>
      <HowHarmonyWorks/>
      <CTASection/>
    </div>
  )
}

export default page
