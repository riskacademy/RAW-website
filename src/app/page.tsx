import HeroSection from '@/components/sections/HeroSection';
import WhatIsRAW from '@/components/sections/WhatIsRAW';
import WhyAttend from '@/components/sections/WhyAttend';
import UpcomingEvents from '@/components/sections/UpcomingEvents';
import PastEvents from '@/components/sections/PastEvents';
import Faculty from '@/components/sections/Faculty';
// import PracticalValue from '@/components/sections/PracticalValue';
// import JustificationKit from '@/components/sections/JustificationKit';
// import Newsletter from '@/components/sections/Newsletter';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIsRAW />
      <WhyAttend />
      <Faculty />
      <PastEvents />
      <FAQ />
      <UpcomingEvents />
      {/* <PracticalValue /> */}
      {/* <JustificationKit /> */}
      {/* <Newsletter /> */}
    </>
  );
}
