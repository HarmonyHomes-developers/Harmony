import React from 'react'
import HeroSection from '@/components/organisms/herosection'
import WhyChooseHarmony from '@/components/organisms/whyharmoney'
import HowHarmonyWorks from '@/components/organisms/howitwork'
import CTASection from '@/components/organisms/calltoAction'

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
