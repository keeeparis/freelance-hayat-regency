import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Exterior.module.scss';

export const Exterior = (props: any) => {
  return (
    <>
      <section className={styles.ext}>
        <div className={styles.ext_info}>
          <div className={styles.ext_info_main}>
            <p className={styles.ext_info_main_subtitle}>Экстерьер</p>
            <h3 className={styles.ext_info_main_title}>
              воплощение <br /> <span>элегантности</span>
            </h3>
          </div>
          <p className={styles.ext_info_subtext}>
            Архитектурный дизайн Hayat Regency это симбиоз современных тенденций и классической элегантности.
          </p>
        </div>
      </section>

      <Slider {...props} />
    </>
  );
};

const Slider = (props: any) => {
  const slides = [
    props.slider1,
    props.slider2,
    props.slider3,
    props.slider4,
    props.slider5,
    props.slider6,
    props.slider7,
    props.slider8
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const currentTransitionSpeed = useRef(0);

  function getTransitionSpeed() {
    const transitionSpeed = currentTransitionSpeed.current;
    currentTransitionSpeed.current = 0;
    return transitionSpeed;
  }

  function getDirection(animationProgress: number) {
    if (animationProgress === 0) {
      return 'NONE';
    } else if (animationProgress > 0) {
      return 'NEXT';
    } else {
      return 'BACK';
    }
  }

  return (
    <section className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView="auto"
        pagination={{
          bulletClass: styles.slider_pagination_bullet,
          bulletActiveClass: styles.slider_pagination_bullet_active,
          clickable: true,
          horizontalClass: styles.slider_pagination
        }}
        centeredSlides={true}
        spaceBetween={8}
        // loop={true}
        breakpoints={{
          960: {
            // navigation: true,
            pagination: false,
            spaceBetween: 40
          }
        }}
        onSlideChange={swiper => {
          setActiveIndex(swiper.realIndex + 1);
        }}
        speed={2200}
        watchSlidesProgress
        virtualTranslate
        onSetTransition={(swiper, transition) => {
          currentTransitionSpeed.current = transition;
        }}
        onSetTranslate={(swiper, tranlate) => {
          const durationInSeconds = getTransitionSpeed() / 1000;
          const slides = Object.values(swiper.slides);

          const originIndex = swiper.activeIndex;
          // @ts-ignore
          const animationProgress = slides[originIndex].progress;
          const direction = getDirection(animationProgress);

          slides.map((slide, idx, arr) => {
            const g1 = gsap.timeline({
              defaults: { ease: 'power2.out', duration: durationInSeconds, translateX: `${swiper.translate}` }
            });

            g1.to(slide, { translateX: `${swiper.translate}` }, 0);

            if (direction === 'NEXT') {
              g1.to(
                slide,
                {
                  skewX: '-15deg'
                },
                0
              ).to(
                slide,
                {
                  skewX: 0
                },
                '<25%'
              );
            } else if (direction === 'BACK') {
              g1.to(
                slide,
                {
                  skewX: '15deg'
                },
                0
              ).to(
                slide,
                {
                  skewX: 0
                },
                '<25%'
              );
            }
          });
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className={styles.slider_slide}>
            {slide}
          </SwiperSlide>
        ))}

        <Prev />
        <Next total={slides.length} />
      </Swiper>
    </section>
  );
};

const Prev = () => {
  const swiper = useSwiper();

  return (
    <div
      className={styles.slider_button_prev}
      data-disabled={swiper.activeIndex === 0}
      onClick={() => swiper.slidePrev()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M26.6667 16H5.33337M5.33337 16L13.3334 24M5.33337 16L13.3334 8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const Next = (props: any) => {
  const swiper = useSwiper();

  return (
    <div
      className={styles.slider_button_next}
      data-disabled={props.total === swiper.activeIndex + 1}
      onClick={() => swiper.slideNext()}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="icon-arrow-narrow-right">
          <path
            id="Icon"
            d="M5.33325 16H26.6666M26.6666 16L18.6666 8M26.6666 16L18.6666 24"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};
