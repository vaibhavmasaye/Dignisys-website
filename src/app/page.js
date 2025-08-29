import ContactUs from '@/components/ContactUs';
import Testimonials from '@/components/Testimonials';
import ChooseUs from '@/components/ChooseUs';
import OurServices from '@/components/OurServices';
import AboutUs from '@/components/AboutUs';
import HeroSection from '@/components/HeroSection';
import CompanySuccess from '@/components/CompanySuccess';

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <AboutUs/>
    <CompanySuccess/>
    <OurServices/>
    <ChooseUs/>
     <Testimonials />
<ContactUs />

   </div>
  );
}
