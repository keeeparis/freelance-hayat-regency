import React, { useState } from 'react';
import cn from 'classnames';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Places.module.scss';

export const Places = (props: any) => {
  const slides = [
    { img: props.Place1, name: 'Haileybury  School', time: '10' },
    { img: props.Place2, name: 'МЕДЕО', time: '15' },
    { img: props.Place3, name: 'Терренкур', time: '7' },
    { img: props.Place4, name: 'esentai mall', time: '12' },
    { img: props.Place5, name: 'villa del fiori', time: '10' },
    { img: props.Place6, name: 'Сыроварня Parmigano', time: '3' },
    { img: props.Place7, name: 'Wine time dostyk', time: '7' },
    { img: props.Place8, name: 'Royal club', time: '10' },
    { img: props.Place9, name: 'Wellness Club Luxor', time: '6' },
    { img: props.Place10, name: 'nis (НИШ)', time: '10' }
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={styles.feat}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        // navigation={false}
        pagination={{
          clickable: true,
          type: 'progressbar',
          el: '.feat_pagination'
        }}
        centeredSlides={true}
        spaceBetween={16}
        loop={true}
        onSlideChange={swiper => {
          setActiveIndex(swiper.realIndex + 1);
        }}
        breakpoints={{
          960: {
            pagination: false,
            spaceBetween: 56
          }
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className={styles.feat_slide} data-test={idx}>
            <div className={styles.feat_slide_info}>
              <div className={styles.feat_slide_info_time}>
                <h4>{slide.time}</h4>
                <p>минут на авто</p>
              </div>
              <p className={styles.feat_slide_info_name}>{slide.name}</p>
            </div>
            <div className={styles.feat_slide_img}>{slide.img}</div>
          </SwiperSlide>
        ))}

        <div className={styles.feat_controls}>
          <Prev />
          <Next />
          <Index activeIndex={activeIndex} total={slides.length} />
          <PaginationEl />
        </div>
      </Swiper>
    </div>
  );
};

const Prev = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.feat_button_prev} onClick={() => swiper.slidePrev()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M26.6667 16H5.33337M5.33337 16L13.3334 24M5.33337 16L13.3334 8"
          stroke="#171516"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const Next = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.feat_button_next} onClick={() => swiper.slideNext()}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon-arrow-narrow-right">
          <path
            id="Icon"
            d="M5.33325 16H26.6666M26.6666 16L18.6666 8M26.6666 16L18.6666 24"
            stroke="#171516"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

const Index = (props: any) => {
  return (
    <div className={styles.feat_controls_index}>
      {props.activeIndex} / {props.total}
    </div>
  );
};

const PaginationEl = () => {
  return <div className={cn('feat_pagination', styles.feat_pagination)}></div>;
};
