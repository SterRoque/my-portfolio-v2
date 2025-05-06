import { IProject } from '../interfaces/project-interface';
import { FaGithub } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';

type CardProps = {
   project: IProject;
};

export function Card({ project }: CardProps) {
   return (
      <div className='bg-card hover:border-primary border-card relative h-[450px] w-full max-w-[320px] rounded-2xl border-2'>
         <div className=''>
            <img
               src={project.img}
               alt=''
               className='h-[215px] w-80 rounded-t-2xl object-center'
            />
         </div>
         <div className='h-full w-full p-5'>
            <h1 className='mb-3 font-semibold text-stone-300'>
               {project.title}
            </h1>
            <p className='mb-4 text-[13px] font-light text-stone-300'>
               {project.description}
            </p>

            <div className='absolute bottom-6 left-0 flex w-full flex-col justify-between gap-5 px-6 text-[13px] text-white'>
               <div className='flex justify-between'>
                  <a
                     href={project.urlSite}
                     className='bottom-0 left-0 flex items-center gap-1.5 hover:underline'>
                     <HiLink className='text-base' />
                     Ver demo
                  </a>
                  <a
                     href={project.urlGithub}
                     className='right-0 bottom-0 flex items-center gap-1.5 hover:underline'>
                     <FaGithub className='text-base' />
                     Ver código
                  </a>
               </div>
               <button className='cursor-pointer rounded-2xl border border-stone-600 text-stone-300'>
                  Ver mais detalhes
               </button>
            </div>
         </div>
      </div>
   );
}
