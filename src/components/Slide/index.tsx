import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideItem } from './SlideItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface Continent {
  slug: string;
  name: string;
  description: string;
  bannerImage: string;
}

interface SlideProps {
  continents: Array<Continent>;
}

export function Slide({ continents }: SlideProps) {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 0.4 }}
      style={{ width: '100%', flex: '1' }}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.slug}>
            <SlideItem 
              title={continent.name}
              description={continent.description}
              slug={continent.slug}
              imageUrl={continent.bannerImage}
            />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}