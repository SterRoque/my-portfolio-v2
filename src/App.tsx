import { AboutMeSection } from './components/about-me-section';
import { HeroSection } from './components/hero-section';
import { Layout } from './components/layout';
import { StacksSection } from './components/stacks-section';

export default function App() {
   return (
      <Layout>
         <main className='h-screen md:px-44 xl:px-60'>
            <HeroSection />
            <AboutMeSection />
            <StacksSection />
         </main>
      </Layout>
   );
}
