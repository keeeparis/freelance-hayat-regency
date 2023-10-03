import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Thumbs, EffectCreative, EffectFade } from 'swiper/modules';

import styles from './Features.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';

export const Features = (props: any) => {
  const slides = [
    {
      img: props.Feat1,
      title: 'Спортзал',
      text: (
        <p>
          Наш жилой комплекс предоставляет нашим будущим жителям уникальную возможность заботиться о своем здоровье и
          физической форме, предоставляя собственный современный спортзал. <br />
          <br /> Этот современный фитнес-центр будет оборудован всем необходимым для разнообразных тренировок.
        </p>
      )
    },
    {
      img: props.Feat2,
      title: 'Хамам',
      text: (
        <p>
          Наш жилой комплекс предоставляет нашим будущим жителям уникальную возможность заботиться о своем здоровье и
          физической форме, предоставляя собственный современный спортзал. <br />
          <br /> Этот современный фитнес-центр будет оборудован всем необходимым для разнообразных тренировок.
        </p>
      )
    },
    {
      img: props.Feat3,
      title: 'Спортзал',
      text: (
        <p>
          Наш жилой комплекс предоставляет нашим будущим жителям уникальную возможность заботиться о своем здоровье и
          физической форме, предоставляя собственный современный спортзал. <br />
          <br /> Этот современный фитнес-центр будет оборудован всем необходимым для разнообразных тренировок.
        </p>
      )
    },
    {
      img: props.Feat4,
      title: 'Хамам',
      text: (
        <p>
          Наш жилой комплекс предоставляет нашим будущим жителям уникальную возможность заботиться о своем здоровье и
          физической форме, предоставляя собственный современный спортзал. <br />
          <br /> Этот современный фитнес-центр будет оборудован всем необходимым для разнообразных тренировок.
        </p>
      )
    }
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className={styles.feat}>
      <div className={styles.feat_info}>
        <p className={styles.feat_info_sub}>Преимущества</p>
        <span>Система all-in-one</span> в жилом комплексе — это инновационное решение, которое позволяет жильцам{' '}
        <span>получать все</span>
        необходимые услуги <br />
        на одной платформе.
      </div>
      <div className={styles.feat_sliders}>
        <div className={styles.feat_sliders_main}>
          {/* Main Swiper -> pass thumbs swiper instance */}
          <Swiper
            modules={[Thumbs, EffectCreative]}
            thumbs={{ swiper: thumbsSwiper }}
            slidesPerView={1}
            loop={true}
            style={{ height: '100%' }}
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                opacity: 0,
                translate: ['0%', '0%', -1]
              },
              next: {
                opacity: 1,
                translate: ['0%', '100%', 0]
              }
            }}
            // breakpoints={{
            //   960: {
            //     effect: 'creative',
            //     creativeEffect: {
            //       prev: {
            //         shadow: true,
            //         opacity: 0,
            //         translate: ['0%', '0%', -1]
            //       },
            //       next: {
            //         opacity: 1,
            //         translate: ['0%', '100%', 0]
            //       }
            //     }
            //   }
            // }}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className={styles.feat_sliders_main_slide}>
                <h3>{slide.title}</h3>
                {slide.text}
              </SwiperSlide>
            ))}

            <div className={styles.feat_sliders_main_controls}>
              <Prev />
              <Next />
            </div>
          </Swiper>
        </div>

        <div className={styles.feat_sliders_thumb}>
          {/* Thumbs Swiper -> store swiper instance */}
          {/* It is also required to set watchSlidesProgress prop */}
          <Swiper
            modules={[Thumbs, EffectCreative, EffectFade]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            slidesPerView={1}
            lazyPreloadPrevNext={2}
            loop={true}
            // effect="slide"
            // breakpoints={{
            //   960: {
            //     effect: 'creative',
            //     creativeEffect: {
            //       prev: {
            //         // shadow: true,
            //         opacity: 0,
            //         translate: ['0%', 0, 0]
            //       },
            //       next: {
            //         opacity: 1,
            //         translate: ['100%', 0, 0]
            //       }
            //     }
            //   }
            // }}
            draggable={false}
            effect={'creative'}
            creativeEffect={{
              prev: {
                // shadow: true,
                opacity: 0,
                translate: ['0%', 0, 0]
              },
              next: {
                opacity: 1,
                translate: ['100%', 0, 0]
              }
            }}
          >
            {slides.map((slide, idx, arr) => (
              <SwiperSlide key={idx} className={styles.feat_sliders_thumb_slide}>
                <div className={styles.feat_sliders_thumb_slide_info}>
                  <p>преимущества</p>
                  <div className={styles.feat_sliders_thumb_slide_info_page}>
                    <h3>{`${idx + 1}`.padStart(2, '0')}</h3>
                    <p>{`/ ${arr.length}`}</p>
                  </div>
                </div>
                {slide.img}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
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
