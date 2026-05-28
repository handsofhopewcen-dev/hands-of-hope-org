import { DonationProvider } from '@/components/ui/DonationModal'
import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { WatchStory } from '@/components/sections/WatchStory'
import { AboutSection } from '@/components/sections/AboutSection'
import { NeedIsReal } from '@/components/sections/NeedIsReal'
import { HowWeHelp } from '@/components/sections/HowWeHelp'
import { Programs } from '@/components/sections/Programs'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { Testimonials } from '@/components/sections/Testimonials'
import { Campaigns } from '@/components/sections/Campaigns'
import { DonateSection } from '@/components/sections/DonateSection'
import { WishlistSection } from '@/components/sections/WishlistSection'
import { FormsSection } from '@/components/sections/FormsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'
import { StickyDonate } from '@/components/sections/StickyDonate'

export default function HomePage() {
  return (
    <DonationProvider>
      <Nav />
      <main>
        <Hero />
        <WatchStory />
<AboutSection />
        <NeedIsReal />
        <HowWeHelp />
        <Programs />
        <ImpactSection />
        <Testimonials />
        <Campaigns />
        <DonateSection />
        <WishlistSection />
        <FormsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyDonate />
    </DonationProvider>
  )
}
