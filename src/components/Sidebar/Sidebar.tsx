import React, { useState } from 'react';

import Button from '@components/Button';

import styles from './Sidebar.module.scss';

const NAV_LINKS = [
  ['О проекте', '#about'],
  ['Архитектура', '#architechture'],
  ['Расположение', '#location'],
  ['преимущества', '#features'],
  ['подбор квартиры', '#flat-picker']
];

export const Sidebar = ({ setIsSidebarVisible, setIsBackCall, sidebarImage }: any) => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_head}>
          <svg xmlns="http://www.w3.org/2000/svg" width="165" height="44" viewBox="0 0 165 44" fill="none">
            <g clipPath="url(#clip0_104_267)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M135.725 24.7269C136.962 24.7269 138.098 24.4581 139.132 23.9208C140.166 23.3837 141.012 22.6658 141.669 21.7673L144.191 23.4851C143.225 24.6829 142.012 25.634 140.553 26.3385C139.094 27.0433 137.484 27.3958 135.725 27.3958C134.276 27.3958 132.913 27.1401 131.637 26.6293C130.362 26.1185 129.25 25.4269 128.303 24.5552C127.356 23.6831 126.607 22.6615 126.056 21.4901C125.505 20.3186 125.23 19.0636 125.23 17.7246C125.23 16.3859 125.505 15.1309 126.056 13.9596C126.607 12.788 127.356 11.7664 128.303 10.8942C129.25 10.0223 130.362 9.33098 131.637 8.82042C132.913 8.30937 134.276 8.05371 135.725 8.05371C137.484 8.05371 139.094 8.40647 140.553 9.11098C142.012 9.81548 143.225 10.7665 144.191 11.9647L141.669 13.6819C141.012 12.7837 140.166 12.0658 139.132 11.5287C138.098 10.9913 136.962 10.7225 135.725 10.7225C134.72 10.7225 133.778 10.9076 132.898 11.2776C132.019 11.6475 131.251 12.1498 130.594 12.7837C129.937 13.4179 129.414 14.1576 129.028 15.0032C128.641 15.8485 128.448 16.7558 128.448 17.7246C128.448 18.6936 128.641 19.6009 129.028 20.4463C129.414 21.2919 129.937 22.0318 130.594 22.6658C131.251 23.3 132.019 23.8019 132.898 24.1719C133.778 24.5418 134.72 24.7269 135.725 24.7269Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82.8648 16.6413C82.884 16.8353 82.8986 17.0201 82.9081 17.1964C82.9178 17.3726 82.9227 17.5486 82.9227 17.7246C82.9227 17.9714 82.9132 18.2091 82.8937 18.438C82.8745 18.6671 82.8453 18.8962 82.8066 19.1253C82.6329 20.2877 82.2414 21.3753 81.6326 22.3884C81.0239 23.4014 80.2604 24.2773 79.3421 25.0172C78.4241 25.7574 77.3754 26.3385 76.1964 26.7613C75.0173 27.1841 73.7608 27.3958 72.427 27.3958C70.9776 27.3958 69.6099 27.1401 68.3245 26.629C67.0391 26.1185 65.9228 25.4269 64.9758 24.5552C64.0286 23.6831 63.2795 22.6615 62.7286 21.4901C62.1778 20.3186 61.9026 19.0636 61.9026 17.7246C61.9026 16.3859 62.1778 15.1309 62.7286 13.9593C63.2795 12.788 64.0286 11.7664 64.9758 10.8942C65.9228 10.0223 67.0391 9.33097 68.3245 8.82042C69.6099 8.30937 70.9776 8.05371 72.427 8.05371C73.5289 8.05371 74.5774 8.19937 75.5727 8.48992C76.5681 8.78047 77.4815 9.19012 78.3129 9.71863C79.1438 10.2471 79.8832 10.8768 80.5307 11.6078C81.1781 12.3389 81.7049 13.136 82.111 13.999H78.5448C77.9068 13.0126 77.0516 12.2198 75.9788 11.621C74.9058 11.0219 73.7221 10.7225 72.427 10.7225C71.4221 10.7225 70.4749 10.9076 69.5858 11.2776C68.6965 11.6476 67.9235 12.1495 67.2664 12.7837C66.6092 13.4177 66.0873 14.1576 65.7007 15.0032C65.314 15.8485 65.1206 16.7558 65.1206 17.7246C65.1206 18.6936 65.314 19.6009 65.7007 20.4463C66.0873 21.2919 66.6092 22.0318 67.2664 22.6658C67.9235 23.3 68.6965 23.8019 69.5858 24.1719C70.4749 24.5418 71.4221 24.7269 72.427 24.7269C73.2968 24.7269 74.128 24.5858 74.9207 24.3041C75.7131 24.0222 76.4234 23.6302 77.0516 23.128C77.6796 22.6263 78.2115 22.0318 78.646 21.3447C79.081 20.6577 79.3854 19.9178 79.5594 19.1253H78.079L74.7513 16.6413H79.6175H82.8648Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M106.345 15.3595V27.5933H103.344V7.85547L121.686 27.5933H117.515L106.345 15.3595ZM118.507 20.1795V11.4857L121.686 7.85547V15.8268L118.507 20.1795Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M56.5601 18.789L59.2073 16.0673H48.203V10.802H56.5601L59.2073 8.08008H48.203H45.0234V27.3678H45.0293L45.028 27.369H56.5601L59.2073 24.6476H48.203V18.789H56.5601Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M97.1504 18.789L99.7976 16.0673H88.7934V10.802H97.1504L99.7976 8.08008H88.7934H85.6138V27.3678H85.6197L85.6184 27.369H97.1504L99.7976 24.6476H88.7934V18.789H97.1504Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M153.029 19.2817L146.285 8.02753L149.82 8.00098L154.633 16.56L153.029 19.2817ZM164.766 8.05383L154.525 27.4004L150.921 27.4485L159.686 10.7753L161.137 8.02753H164.796L164.766 8.05383Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50.3132 36.5251V39.5917H46.4213V36.5251H45.0234V43.9531H46.4213V40.7696H50.3132V43.9531H51.7111V36.5251H50.3132Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M70.3256 36.5251L66.939 43.9531H68.3796L69.1214 42.234H72.8843L73.6371 43.9531H75.0993L71.7017 36.5251H70.3256ZM71.003 37.9048L72.4221 41.1517H69.5946L71.003 37.9048Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M94.6929 36.5251L92.4675 40.1435L90.2633 36.5251H88.7688L91.7255 41.3533V43.9531H93.1231V41.332L96.069 36.5251H94.6929Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M113.125 36.5251L109.739 43.9531H111.179L111.921 42.234H115.684L116.436 43.9531H117.899L114.501 36.5251H113.125ZM113.802 37.9048L115.222 41.1517H112.394L113.802 37.9048Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M131.783 36.5251V37.6924H134.278V43.9531H135.675V37.6924H138.17V36.5251H131.783Z"
                fill="#D6CBB4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.140869 0.227783L6.26816 5.78063H7.31427H13.3893H16.8118C18.2727 5.78063 19.6119 6.05702 20.8297 6.60955C22.0474 7.16233 23.0984 7.88378 23.9836 8.77263C24.8701 9.66098 25.5785 10.6983 26.1094 11.8832C26.641 13.0682 26.9067 14.2729 26.9067 15.4973C26.9067 16.7607 26.641 17.9752 26.1094 19.1412C25.5785 20.3059 24.8701 21.3432 23.9836 22.2521C23.0984 23.1599 22.0474 23.8907 20.8297 24.4435C19.6119 24.9967 18.2727 25.2734 16.8118 25.2734H13.3893H7.2474V16.9379L0.140869 25.0544V25.2734V43.6429H7.2474V33.8534V30.825H15.9486C16.5678 30.825 17.1436 30.806 17.6749 30.7663C18.2061 30.7269 18.7374 30.6677 19.2691 30.589L26.774 43.6429H34.2787L25.7113 28.6396C25.8809 28.5367 26.2075 28.3827 26.3751 28.2849C28.1463 27.3009 29.6405 26.0998 30.859 24.6822C32.0755 23.2646 32.9948 21.6699 33.6143 19.8978C33.9859 18.8921 34.2787 17.6718 34.2787 15.8683C34.2787 13.6475 33.9016 12.0534 33.6143 11.2146C32.3748 7.59222 29.9618 4.77622 26.3751 2.76765C24.9144 1.9807 23.309 1.3599 21.5596 0.907255C19.811 0.454611 17.9406 0.227783 15.9486 0.227783H0.140869Z"
                fill="#CDA462"
              />
            </g>
            <defs>
              <clipPath id="clip0_104_267">
                <rect width="165" height="44" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Button transparent rounded gold_border onClick={() => setIsSidebarVisible(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M19.8332 8.16675L8.1665 19.8334M8.1665 8.16675L19.8332 19.8334"
                stroke="#D6CBB4"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className={styles.sidebar_body}>
          <div className={styles.sidebar_body_left}>
            <ul className={styles.sidebar_body_left_nav}>
              {NAV_LINKS.map(([name, link], idx) => (
                <li key={name}>
                  <a href={link} onClick={() => setIsSidebarVisible(false)}>
                    <span>{(idx + 1).toString().padStart(2, '0')}</span>
                    <p>{name}</p>
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.sidebar_body_left_bottom}>
              <nav>
                <span>О застройщике</span>
                <span>ход строительства</span>
                <span>Контакты</span>
              </nav>
              <Button
                transparent
                gold_border
                onClick={() => {
                  setIsBackCall(true);
                  setIsSidebarVisible(false);
                }}
              >
                заказать звонок
              </Button>
              <div>hayat construction group © 2023</div>
            </div>
          </div>
          <div className={styles.sidebar_body_right}>
            {sidebarImage}
            <div className={styles.sidebar_body_right_info}>
              <a href="tel:+7 700 511 17 77">+7 700 511 17 77</a>
              <p>
                Алматы, <br />
                ул. оспанова, 85
              </p>
            </div>
            <div className={styles.sidebar_body_right_bottom}>
              <p>
                Офис продаж: <br />
                Ежедневно 10:00-19:00
              </p>
              <Button
                transparent
                gold_border
                onClick={() => {
                  setIsBackCall(true);
                  setIsSidebarVisible(false);
                }}
              >
                заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
