import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { projects } from '../constants/projects';
import { Card } from './card';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { cn } from '../utils/cn';

export function Carousel() {
   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   return (
      <div className='w-full'>
         <Swiper
            onSlideChange={(swiper) => {
               setIsBeginning(swiper.isBeginning);
               setIsEnd(swiper.isEnd);
            }}
            autoplay={{
               delay: 8000,
            }}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation={{
               prevEl: '#prev',
               nextEl: '#next',
            }}
            breakpoints={{
               0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
               },
               1800: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
            }}
            style={{
               paddingBottom: 50,
            }}>
            {projects.map((project) => (
               <SwiperSlide key={project.id}>
                  <Card project={project} />{' '}
               </SwiperSlide>
            ))}
         </Swiper>

         <div className='flex items-center justify-center gap-5'>
            <button
               className={cn(
                  'rounded-lg px-4 py-2',
                  isBeginning
                     ? 'cursor-not-allowed bg-transparent'
                     : 'bg-primary',
               )}
               id='prev'
               disabled={isBeginning}>
               <IoIosArrowBack
                  fontSize={24}
                  className={cn(
                     isBeginning
                        ? 'cursor-not-allowed text-transparent'
                        : 'text-white',
                  )}
               />
            </button>
            <button
               className={cn(
                  'rounded-lg px-4 py-2',
                  isEnd ? 'cursor-not-allowed bg-transparent' : 'bg-primary',
               )}
               id='next'
               disabled={isEnd}>
               <IoIosArrowForward
                  fontSize={24}
                  className={cn(
                     isEnd
                        ? 'cursor-not-allowed text-transparent'
                        : 'text-white',
                  )}
               />
            </button>
         </div>
      </div>
   );
}
