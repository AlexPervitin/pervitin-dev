'use client';

import Image, { StaticImageData } from 'next/image';
import { ProjectSliderWrapper } from './styles';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

interface IProjectSlider {
  images: {
    path: StaticImageData;
  }[];
}

export default function ProjectSlider({ images }: IProjectSlider) {
  return (
    <ProjectSliderWrapper>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop
      >
        {images?.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={img.path.src} alt={'img'} fill sizes='auto' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProjectSliderWrapper>
  );
}
