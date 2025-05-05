export function HeroSection() {
   return (
      <section className='flex h-fit items-center justify-between text-white md:pt-40 md:pb-28 xl:pt-48 xl:pb-36'>
         <h1 className='font-bold md:text-4xl md:leading-12 xl:text-5xl xl:leading-15'>
            Olá 👋,
            <br className='hidden md:block' /> meu nome é{' '}
            <br className='hidden md:block' />
            <span className='text-primary'>Ster Roque</span>, e sou{' '}
            <br className='hidden md:block' />
            Desenvolvedora Fullstack.
         </h1>
         <img
            src='https://github.com/SterRoque.png'
            alt=''
            className='border-primary w-full rounded-full border-4 md:max-w-64 xl:max-w-80'
         />
      </section>
   );
}
