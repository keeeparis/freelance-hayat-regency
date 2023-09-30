import React from 'react';

import Button from '@components/Button';
import styles from './Arch.module.scss';

export const Arch = (props: any) => {
  return (
    <>
      <div className={styles.arch}>
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
      </div>
      <div className={styles.arch_2}>
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
      </div>
    </>
  );
};
