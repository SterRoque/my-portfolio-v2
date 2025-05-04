import { HeroSection } from './components/hero-section';
import { Layout } from './components/layout';

export default function App() {
   return (
      <Layout>
         <main className='h-screen w-screen px-44'>
            <HeroSection />
         </main>
      </Layout>
   );
}
