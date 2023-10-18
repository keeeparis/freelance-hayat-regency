import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import cn from 'classnames';

import Button from '@components/Button';

import styles from './Arch.module.scss';

gsap.registerPlugin(ScrollTrigger);

export const Arch = (props: any) => {
  useLayoutEffect(() => {
    gsap
      .timeline({
        defaults: {
          ease: 'power1.inOut'
        },
        scrollTrigger: {
          trigger: '.info',
          start: `top top`,
          end: '=+100%',
          scrub: 1
        }
      })
      .to('.stoneball', { y: -50 })
      .to('.metal', { y: -75 }, 0);
  }, []);

  return (
    <>
      {/* <div className={cn(styles.arch, 'grid-container')} ref={main}>
        <div className={cn(styles.arch_inner, 'arch-inner', 'grid')}>
          <div className={cn('grid-layer', styles.arch_inner_block)}>{props.top}</div>
          <div className={cn('grid-layer', 'center-piece', styles.arch_inner_block)}>{props.mainCenter}</div>
          <div className={cn('grid-layer', styles.arch_inner_block)}>{props.bottomRight}</div>
        </div>
        <div className={styles.row_1}>{props.top}</div>
        <div className={styles.row_2}>
          {props.left}
          {props.mainCenter}
          {props.right}
        </div>
        <div className={styles.row_3}>
          {props.bottomLeft}
          {props.bottomRight}
        </div>
      </div> */}

      <Animation {...props} />

      {/* <div className={cn(styles.arch_2, 'subtitle')}>
        <div className={styles.arch_2_bg}>{props.bgArch2}</div>
        <div className={styles.arch_2_info}>
          <div className={styles.arch_2_info_text}>
            <p className={styles.arch_2_info_text_subtitle}>о проекте</p>
            <p className={styles.arch_2_info_text_title} lang="ru">
              архитектура
            </p>
          </div>
          <div className={styles.arch_2_info_action}>
            <Button rounded transparent gold_border>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0002 5.33341L16.0002 26.6667M16.0002 26.6667L24.0002 18.6667M16.0002 26.6667L8.00024 18.6667"
                  stroke="#E0D9CC"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div> */}
      <div className={styles.arch_3}>
        <div className={styles.arch_3_bg} id="architechture">
          {props.bgArch3}
          <div className={styles.arch_3_bg_info}>
            <div className={styles.arch_3_bg_info_text}>
              <p className={styles.arch_3_bg_info_text_subtitle}>о проекте</p>
              <p className={styles.arch_3_bg_info_text_title} lang="ru">
                архитектура
              </p>
            </div>
          </div>
        </div>
        <div className={cn(styles.arch_3_info, 'info')}>
          <h3 className={styles.arch_3_info_title}>
            Архитектурный дизайн <br />
            Hayat Regency — это симбиоз современных тенденций <br />и классической элегантности.
          </h3>
          <p className={styles.arch_3_info_subtitle}>
            Высокие потолки, панорамные окна, тщательно продуманные планировки - все это создает атмосферу изысканности{' '}
            <br />и комфорта.
          </p>
          <div className={styles.arch_3_info_stats}>
            <div className={styles.arch_3_info_stats_item}>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.395 52V46.0616H28.2962V40.1233H36.1975V34.1849H44.0987V28.2465H52M40.1481 34.1849V23.266M24.3456 35.1428V46.0616M20 38.4088L44.4937 20M32.2469 40.1233V29.2044"
                  stroke="#CDA462"
                  strokeWidth="1.32"
                  strokeMiterlimit="10"
                />
                <rect x="0.5" y="0.5" width="71" height="71" rx="35.5" stroke="#CDA462" />
              </svg>
              <div className={styles.arch_3_info_stats_item_text}>
                <p className={styles.arch_3_info_stats_item_text_value}>3</p>
                <p className={styles.arch_3_info_stats_item_text_subtitle}>этажа в доме</p>
              </div>
            </div>

            <div className={styles.arch_3_info_stats_item}>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_50_36)">
                  <path d="M24 27.5L36 21L48 27.5" stroke="#CDA462" strokeWidth="1.4" strokeLinecap="square" />
                  <path d="M48 45L36 51.5L24 45" stroke="#CDA462" strokeWidth="1.4" strokeLinecap="square" />
                  <path d="M46 39H26" stroke="#CDA462" strokeWidth="1.4" strokeLinecap="square" />
                  <path d="M46 33H26" stroke="#CDA462" strokeWidth="1.4" strokeLinecap="square" />
                </g>
                <rect x="0.5" y="0.5" width="71" height="71" rx="35.5" stroke="#CDA462" />
                <defs>
                  <clipPath id="clip0_50_36">
                    <rect width="32" height="32" fill="white" transform="translate(20 20)" />
                  </clipPath>
                </defs>
              </svg>
              <div className={styles.arch_3_info_stats_item_text}>
                <p className={styles.arch_3_info_stats_item_text_value}>3,3 м</p>
                <p className={styles.arch_3_info_stats_item_text_subtitle}>высота потолков</p>
              </div>
            </div>

            <div className={styles.arch_3_info_stats_item}>
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 52H24L24.225 27.7985C24.225 25.9988 27.8243 20 36.2226 20C44.0211 20 48.4162 25.9988 48.4162 27.7985V52H52"
                  stroke="#CDA462"
                  strokeWidth="1.4"
                  strokeMiterlimit="10"
                />
                <path d="M36.2227 29.5981V50.594" stroke="#CDA462" strokeWidth="1.4" strokeMiterlimit="10" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.2236 50.594V29.5981H42.2213V50.594H30.2236Z"
                  stroke="#CDA462"
                  strokeWidth="1.4"
                  strokeMiterlimit="10"
                />
                <rect x="0.5" y="0.5" width="71" height="71" rx="35.5" stroke="#CDA462" />
              </svg>

              <div className={styles.arch_3_info_stats_item_text}>
                <p className={styles.arch_3_info_stats_item_text_value}>2,6 м</p>
                <p className={styles.arch_3_info_stats_item_text_subtitle}>высота окон</p>
              </div>
            </div>
          </div>

          <div className={cn(styles.arch_3_info_text_1, 'planets')}>
            <p>
              Внешний фасад комплекса украшен натуральным камнем <span>лаймстоун</span>, который придаёт зданию
              элегантность и прочность. Этот материал символизирует красоту природы и её вечность, что позволяет
              комплексу гармонично вписаться в окружающую среду.
            </p>
            <div className={cn(styles.arch_3_info_text_1_img, 'stoneball')}>{props.stoneball}</div>
          </div>
          <div className={styles.arch_3_info_text_2}>
            <p>
              Окна изготовлены из качественного алюминия и оборудованы <span>энергосберегающим</span> остеклением,
              закаленным для максимальной долговечности. Летом, они сохраняют ваши квартиры прохладными, подарив
              приятную свежесть. Зимой же, они сохраняют тепло и уют, оберегая вас от стужи.
            </p>
            <div className={cn(styles.arch_3_info_text_2_img, 'metal')}>{props.metal}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Animation = (props: any) => {
  useLayoutEffect(() => {
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: '.grid-container',
    //       start: 'top top',
    //       end: () => window.innerHeight * 4,
    //       scrub: true,
    //       pin: '.grid',
    //       anticipatePin: 1
    //     }
    //   })
    //   // .set('.grid-layer:not(.center-piece) img', { autoAlpha: 0 })
    //   // .to('.grid-layer:not(.center-piece) img', { duration: 0.1, autoAlpha: 1 }, 0.001)
    //   .from('.grid-layer', {
    //     scale: 3.3333,
    //     ease: 'none'
    //   });

    gsap
      .timeline({
        defaults: {
          ease: 'power1.inOut'
        },
        scrollTrigger: {
          trigger: '.grid-container',
          start: `top -230px`,
          end: () => innerHeight * 4.7,
          scrub: true,
          pin: '.grid',
          anticipatePin: 1
        }
      })
      .set('.gridBlock', { autoAlpha: 1 })
      .set('.gridBlock.centerBlock img', { scale: 1.5 }, 0)

      .to('.grid', { scale: 2.5 }, 0)
      .to('.gridBlock.centerBlock img', { scale: 1 }, 0)
      .to(
        '.gridLayer:not(.centerPiece)',
        {
          scale: 0.75,
          alpha: 0
        },
        0
      );
  }, []);

  return (
    <>
      <div className={cn(styles.gridContainer, 'grid-container')}>
        <div className={cn(styles.grid, 'grid')}>
          <div className={cn(styles.gridLayer, 'gridLayer')}>
            <div
              className={cn(styles.gridBlock, 'gridBlock')}
              // style={{ backgroundImage: 'url("/assets/arch/pic-top.png")' }}
            >
              {/* <img src="/assets/arch/pic-top.png" alt="" /> */}
              {props.top}
            </div>
          </div>
          <div className={cn(styles.gridLayer, 'gridLayer')}>
            <div
              className={cn(styles.gridBlock, 'gridBlock')}
              // style={{ backgroundImage: 'url("/assets/arch/pic-left.png")' }}
            >
              {/* <img src="/assets/arch/pic-left.png" alt="" /> */}
              {props.left}
            </div>
          </div>
          <div className={cn(styles.gridLayer, 'gridLayer', 'centerPiece')}>
            <div
              className={cn(styles.gridBlock, styles.centerBlock, 'gridBlock', 'centerBlock')}
              // style={{ backgroundImage: 'url("/assets/arch/pic-main-center.png")' }}
            >
              {/* <img src="/assets/arch/pic-main-center.png" alt="" /> */}
              {props.mainCenter}
            </div>
          </div>
          <div className={cn(styles.gridLayer, 'gridLayer')}>
            <div
              className={cn(styles.gridBlock, 'gridBlock')}
              // style={{ backgroundImage: 'url("/assets/arch/pic-right.png")' }}
            >
              {/* <img src="/assets/arch/pic-right.png" alt="" /> */}
              {props.right}
            </div>
          </div>
          <div className={cn(styles.gridLayer, 'gridLayer')}>
            <div
              className={cn(styles.gridBlock, 'gridBlock')}
              // style={{ backgroundImage: 'url("/assets/arch/pic-bottom-left.png")' }}
            >
              {/* <img src="/assets/arch/pic-bottom-left.png" alt="" /> */}
              {props.bottomLeft}
            </div>
          </div>
          <div className={cn(styles.gridLayer, 'gridLayer')}>
            <div
              className={cn(styles.gridBlock, 'gridBlock')}
              // style={{ backgroundImage: 'url("/assets/arch/pic-bottom-right.png")' }}
            >
              {/* <img src="/assets/arch/pic-bottom-right.png" alt="" /> */}
              {props.bottomRight}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
