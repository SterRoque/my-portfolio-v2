import { stacks } from '../constants/stacks';

export function StacksSection() {
   return (
      <section className='w-full'>
         <h1 className='text-primary mb-10 text-center text-2xl font-semibold'>
            Tecnologias
         </h1>
         <div className='flex flex-wrap gap-2'>
            {stacks.map((stack) => (
               <div className='bg-card flex w-[15%] items-center gap-3 rounded-full px-4 py-2 text-sm text-white'>
                  <img
                     src={stack.icon}
                     width={30}
                     height={30}
                     alt=''
                  />
                  {stack.stack}
               </div>
            ))}
         </div>
         ooiiiiiii
      </section>
   );
}
