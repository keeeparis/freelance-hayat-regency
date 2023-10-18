import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import cn from 'classnames';

import Arch from '@screens/Arch';

import styles from './AboutScreen.module.scss';

export const AboutScreen = (props: any) => {
  useLayoutEffect(() => {
    gsap.to('#title span', {
      once: true,
      scrollTrigger: {
        trigger: '#title',
        start: 'top 600px',
        scrub: 1,
        once: true,
        toggleClass: { className: styles.high, targets: 'span' }
      }
    });

    gsap.to('#circles', {
      once: true,
      scrollTrigger: {
        trigger: '#title',
        start: 'top 600px',
        once: true,
        toggleClass: { className: styles.high, targets: '#circles' }
      }
    });
  }, []);

  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.about_info} id="info">
          <p className={styles.about_info_subtitle}>о проекте</p>
          <p className={styles.about_info_title} id="title">
            Hayat Regency представляет собой <span> эксклюзивный </span> жилой комплекс, символизирующий{' '}
            <span>премиальный</span> образ жизни в самом <span>сердце</span> города.
          </p>
        </div>
        <div className={styles.about_bottom}>
          <p className={styles.about_bottom_text}>
            Hayat Regency — это не просто место для жизни. Это образ жизни, который предлагает уединение и комфорт, при
            этом подчеркивая уникальность каждого жителя. Это пространство для тех, кто ценит исключительность и роскошь
            в каждой детали.
          </p>
          <div className={styles.about_bottom_img}>
            {props.leftMobile}
            {props.right}
          </div>
          <div className={styles.about_bottom_stats}>
            <div className={styles.about_bottom_stats_item}>
              <div className={styles.about_bottom_stats_item_value}>2,5 ГА</div>
              <div className={styles.about_bottom_stats_item_text}>
                Территория <br />
                проекта
              </div>
            </div>
            <div className={styles.about_bottom_stats_item}>
              <div className={styles.about_bottom_stats_item_value}>164</div>
              <div className={styles.about_bottom_stats_item_text}>
                общее количество <br />
                квартир
              </div>
            </div>
            <div className={styles.about_bottom_stats_item}>
              <div className={styles.about_bottom_stats_item_value}>206</div>
              <div className={styles.about_bottom_stats_item_text}>
                общее количество <br /> парковочных мест
              </div>
            </div>
          </div>
        </div>

        <div className={styles.circles} id="circles">
          <div className={styles.circles_lg}></div>
          <div className={styles.circles_md}></div>
          <div className={styles.circles_sm}></div>
        </div>

        <Arch {...props} />
      </section>
    </>
  );
};
