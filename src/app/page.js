 
import SolarCarousel from '@/components/SolarCarousel';
import AboutUs from '@/components/AboutUs';
import FreeQuote from '@/components/FreeQuote';
import Service from '@/components/Service';

export default function Home() {
  return (
    <div className="py-8">
 
      <SolarCarousel />
      <AboutUs />
      <Service />
      <FreeQuote />
     
    </div>

    
    
    
  );
}