'use client';

import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ProjectImage } from '@/interfaces/Project';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import '@/styles/swiper.css';

type CarouselProps = {
  images: ProjectImage[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      className="w-full"
      modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{
        enabled: !isMobile,
        clickable: true,
      }}
      a11y={{
        prevSlideMessage: '이전 이미지',
        nextSlideMessage: '다음 이미지',
        paginationBulletMessage: '{{index}}번째 이미지로 이동',
      }}
      keyboard={{
        enabled: !isMobile,
        onlyInViewport: true,
      }}
      mousewheel={{
        enabled: !isMobile,
      }}
      loop
    >
      {images &&
        images.map((image) => (
          <SwiperSlide key={image.alt}>
            <figure className="relative h-[32rem] lg:h-[460px] sm:h-96">
              <Image
                src={image.src}
                alt={image.alt}
                className="object-contain"
                loading="lazy"
                fill
              />
            </figure>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
