import { Carousel } from './carousel';

export function ProjectsSection() {
   return (
      <section className='my-32 flex h-fit w-full flex-col items-center text-white'>
         <h1 className='text-primary mb-10 text-center text-2xl font-semibold'>
            Projetos
         </h1>

         <Carousel />
      </section>
   );
}
