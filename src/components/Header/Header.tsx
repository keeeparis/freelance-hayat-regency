import React, { useState } from 'react';
import cn from 'classnames';

import Button from '@components/Button';

import styles from './Header.module.scss';

const PHONE_NUMBER = '+7 700 511 17 77';

export const Header = ({ logoSmall, setIsSidebarVisible, setIsBackCall }: any) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_side}>
        <Button rounded transparent className={styles.header_rounded} onClick={() => setIsSidebarVisible(true)}>
          <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H21" stroke="#E0D9CC" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M1 7H21" stroke="#E0D9CC" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </Button>
        <Button className={styles.header_choose_flat}>Выбрать квартиру</Button>
        <span className={styles.header_phone_number}>{PHONE_NUMBER}</span>
      </div>

      <div className={styles.header_logo}>{logoSmall}</div>

      <div className={cn(styles.header_side, styles.header_side_right)}>
        <span>Локация</span>
        <span>Контакты</span>
        <Button className={styles.header_apartments}>Аппартаменты</Button>
        <Button className={cn(styles.header_rounded, styles.header_3d)} rounded transparent>
          3D ТУР
        </Button>
        <Button
          rounded
          transparent
          className={cn(styles.header_mobile_book_phone_call, styles.header_rounded)}
          onClick={() => setIsBackCall(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.4997 3.33333V7.5M12.4997 7.5L16.6664 7.5M12.4997 7.5L17.4997 2.5M8.52222 11.5526C7.52091 10.5512 6.73025 9.41904 6.15025 8.21102C6.10036 8.10712 6.07542 8.05516 6.05625 7.98942C5.98815 7.75579 6.03707 7.46891 6.17874 7.27105C6.21861 7.21537 6.26624 7.16774 6.3615 7.07248C6.65284 6.78115 6.79851 6.63548 6.89375 6.48899C7.25291 5.93659 7.25291 5.22443 6.89375 4.67203C6.79851 4.52554 6.65284 4.37988 6.3615 4.08854L6.19911 3.92615C5.75624 3.48328 5.53481 3.26184 5.29699 3.14156C4.82402 2.90233 4.26547 2.90233 3.7925 3.14156C3.55468 3.26184 3.33325 3.48328 2.89038 3.92615L2.75902 4.05751C2.31767 4.49886 2.09699 4.71954 1.92845 5.01956C1.74143 5.35249 1.60696 5.86956 1.6081 6.25141C1.60912 6.59554 1.67588 6.83072 1.80938 7.30109C2.52686 9.82892 3.88059 12.2142 5.87057 14.2042C7.86055 16.1942 10.2459 17.5479 12.7737 18.2654C13.2441 18.3989 13.4792 18.4657 13.8234 18.4667C14.2052 18.4678 14.7223 18.3333 15.0552 18.1463C15.3552 17.9778 15.5759 17.7571 16.0173 17.3158L16.1486 17.1844C16.5915 16.7415 16.8129 16.5201 16.9332 16.2823C17.1724 15.8093 17.1724 15.2508 16.9332 14.7778C16.8129 14.54 16.5915 14.3185 16.1486 13.8757L15.9862 13.7133C15.6949 13.4219 15.5492 13.2763 15.4028 13.181C14.8503 12.8219 14.1382 12.8219 13.5858 13.181C13.4393 13.2763 13.2936 13.4219 13.0023 13.7133C12.907 13.8085 12.8594 13.8562 12.8037 13.896C12.6059 14.0377 12.319 14.0866 12.0854 14.0185C12.0196 13.9994 11.9677 13.9744 11.8638 13.9245C10.6557 13.3445 9.52354 12.5539 8.52222 11.5526Z"
              stroke="#E3DACF"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Button gold_100 className={cn(styles.header_desktop_book_phone_call)} onClick={() => setIsBackCall(true)}>
          Заказать звонок
        </Button>
      </div>
    </header>
  );
};
