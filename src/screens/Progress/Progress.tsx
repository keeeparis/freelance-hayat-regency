import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import Button from '@components/Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Progress.module.scss';

const BLOCKS = [
  {
    block: 1,
    date: 'IV квартал 2024',
    imgs: [
      { src: '/assets/progress/block-1-1.png', month: 'декабрь', year: 2023 },
      { src: '/assets/progress/block-1-2.png', month: 'январь', year: 2023 },
      { src: '/assets/progress/block-1-3.png', month: 'февраль', year: 2023 },
      { src: '/assets/progress/block-1-1.png', month: 'март', year: 2023 }
    ]
  },
  {
    block: 2,
    date: 'I квартал 2025',
    imgs: [
      { src: '/assets/progress/block-1-2.png', month: 'декабрь', year: 2023 },
      { src: '/assets/progress/block-1-3.png', month: 'январь', year: 2023 },
      { src: '/assets/progress/block-1-1.png', month: 'февраль', year: 2023 },
      { src: '/assets/progress/block-1-2.png', month: 'март', year: 2023 }
    ]
  },
  {
    block: 3,
    date: 'II квартал 2025',
    imgs: [
      { src: '/assets/progress/block-1-3.png', month: 'декабрь', year: 2023 },
      { src: '/assets/progress/block-1-2.png', month: 'январь', year: 2023 },
      { src: '/assets/progress/block-1-1.png', month: 'февраль', year: 2023 },
      { src: '/assets/progress/block-1-3.png', month: 'март', year: 2023 }
    ]
  }
];

export const Progress = () => {
  const ref = useRef<any>();
  const [activeBlock, setActiveBlock] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);

  const currentBlock = BLOCKS.filter(block => block.block === activeBlock)[0];

  useEffect(() => {
    setActiveIndex(1);
    ref.current.swiper.slideTo(0);
  }, [activeBlock]);

  return (
    <div className={styles.pro}>
      <div className={styles.pro_head}>
        <p>строительство</p>
        <h2>ход строительства</h2>
      </div>

      <div className={styles.pro_filters}>
        <div className={styles.pro_filters_main}>
          <p className={styles.pro_filters_main_sub}>выберите блок</p>
          <div className={styles.pro_filters_main_blocks}>
            {BLOCKS.map((block, idx) => (
              <div
                key={idx}
                className={styles.pro_filters_main_blocks_item}
                data-active={activeBlock === block.block}
                onClick={() => setActiveBlock(block.block)}
              >
                {block.block} блок
              </div>
            ))}
          </div>
          <select
            className={styles.pro_filters_main_select}
            id="block"
            onChange={e => setActiveBlock(Number(e.target.value))}
          >
            {BLOCKS.map(({ block }) => (
              <option key={block} value={block} defaultChecked={block === 1}>
                {block} блок
              </option>
            ))}
          </select>
        </div>
        <Button transparent gold_border>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M18.3334 7.44313C18.3334 6.93829 18.3334 6.68586 18.2336 6.56898C18.147 6.46756 18.017 6.41373 17.8841 6.4242C17.7308 6.43626 17.5523 6.61475 17.1953 6.97173L14.1667 10.0003L17.1953 13.0289C17.5523 13.3859 17.7308 13.5644 17.8841 13.5765C18.017 13.5869 18.147 13.5331 18.2336 13.4317C18.3334 13.3148 18.3334 13.0624 18.3334 12.5575V7.44313Z"
              stroke="#D6CBB4"
              strokeWidth="1.32"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66675 8.16699C1.66675 6.76686 1.66675 6.0668 1.93923 5.53202C2.17892 5.06161 2.56137 4.67916 3.03177 4.43948C3.56655 4.16699 4.26662 4.16699 5.66675 4.16699H10.1667C11.5669 4.16699 12.2669 4.16699 12.8017 4.43948C13.2721 4.67916 13.6546 5.06161 13.8943 5.53202C14.1667 6.0668 14.1667 6.76686 14.1667 8.16699V11.8337C14.1667 13.2338 14.1667 13.9339 13.8943 14.4686C13.6546 14.939 13.2721 15.3215 12.8017 15.5612C12.2669 15.8337 11.5669 15.8337 10.1667 15.8337H5.66675C4.26662 15.8337 3.56655 15.8337 3.03177 15.5612C2.56137 15.3215 2.17892 14.939 1.93923 14.4686C1.66675 13.9339 1.66675 13.2338 1.66675 11.8337V8.16699Z"
              stroke="#D6CBB4"
              strokeWidth="1.32"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>трансляция</p>
        </Button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        ref={ref}
        pagination={{
          clickable: true,
          type: 'progressbar',
          el: '.feat_pagination'
        }}
        spaceBetween={16}
        className={styles.pro_slider}
        onSlideChange={swiper => {
          setActiveIndex(swiper.realIndex + 1);
        }}
        breakpoints={{
          960: {
            slidesPerView: 3,
            pagination: false,
            spaceBetween: 40
          }
        }}
      >
        <div className={styles.pro_slider_head}>
          <div className={styles.pro_slider_head_title}>
            <div className={styles.pro_slider_head_title_sub}>Срок сдачи {activeBlock} блока</div>
            <div className={styles.pro_slider_head_title_main}>
              {BLOCKS.filter(block => block.block === activeBlock)[0].date}
            </div>
          </div>

          <div className={styles.pro_slider_head_controls}>
            <Prev activeIndex={activeIndex} />
            <Next activeIndex={activeIndex} total={currentBlock.imgs.length} />
          </div>
        </div>

        {currentBlock.imgs.map((slide, idx) => (
          <SwiperSlide key={idx} className={styles.pro_slider_slide} data-test={idx}>
            <img src={slide.src} alt="img" />
            <div className={styles.pro_slider_slide_info}>
              <p className={styles.pro_slider_slide_info_month}>{slide.month}</p>
              <p className={styles.pro_slider_slide_info_year}>{slide.year}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className={styles.pro_slider_bottom}>
          <Prev activeIndex={activeIndex} />
          <Next activeIndex={activeIndex} total={currentBlock.imgs.length} />
          <Index activeIndex={activeIndex} total={currentBlock.imgs.length} />
          <PaginationEl />
        </div>
      </Swiper>
    </div>
  );
};

const Prev = (props: any) => {
  const swiper = useSwiper();

  return (
    <div
      className={styles.pro_slider_button_prev}
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

  const slidesPerView = swiper.params.slidesPerView;

  return (
    <div
      className={styles.pro_slider_button_next}
      data-disabled={props.total === swiper.activeIndex + Number(slidesPerView)}
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

const Index = (props: any) => {
  return (
    <div className={styles.pro_slider_bottom_index}>
      {props.activeIndex} / {props.total}
    </div>
  );
};

const PaginationEl = () => {
  return <div className={cn('feat_pagination', styles.pro_slider_bottom_pagination)}></div>;
};
