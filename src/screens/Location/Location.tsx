import React, { useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import cn from 'classnames';

import Button from '@components/Button';

import styles from './Location.module.scss';

const mapStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36
      },
      {
        color: '#000000'
      },
      {
        lightness: 40
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on'
      },
      {
        color: '#000000'
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      },
      {
        color: '#791818'
      }
    ]
  },
  {
    featureType: 'landscape.natural',
    elementType: 'all',
    stylers: [
      {
        color: '#141213'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        lightness: 17
      },
      {
        color: '#262423'
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 29
      },
      {
        weight: 0.2
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#393533'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels',
    stylers: [
      {
        color: '#525052'
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#191919'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#262423'
      },
      {
        lightness: '0'
      },
      {
        gamma: '1.00'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#212121'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#464646'
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#455c63'
      },
      {
        lightness: '0'
      }
    ]
  }
];

const markers = [
  {
    lat: 43.20399957524862,
    lng: 76.96897481154079,
    text: '',
    inner: <img src="/assets/Regency-point.png" width={62} height={72} alt="regency" />
  },
  {
    lat: 43.19654511100816,
    lng: 76.96802171299717,
    text: 'Дубовая роща',
    textSide: false,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          d="M20 17.3335C20 17.3335 18.9333 16.7335 17.6 15.6002C18.6667 15.2002 19.3333 14.6668 19.3333 14.6668C19.3333 14.6668 17.8 13.8002 16.2667 12.2668C17.3333 11.8668 18 11.3335 18 11.3335C18 11.3335 15.4 9.86683 14 7.3335C12.6 9.86683 10 11.3335 10 11.3335C10 11.3335 10.6667 11.8668 11.7333 12.2668C10.2 13.8002 8.66667 14.6668 8.66667 14.6668C8.66667 14.6668 9.33333 15.2002 10.4 15.6668C9.06667 16.7335 8 17.3335 8 17.3335C8 17.3335 10.1333 19.0668 13.3333 19.2668V20.6668H14.6667V19.2668C17.8667 19.0668 20 17.3335 20 17.3335Z"
          fill="#171516"
        />
      </svg>
    )
  },
  {
    lat: 43.2015502830305,
    lng: 76.97516899757302,
    text: 'Parmigiano',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <g clipPath="url(#clip0_64_122)">
          <path
            d="M13.4286 6C13.1153 6 12.862 6.25567 12.862 6.57133H12.8573V11.1433C12.8573 11.2949 12.7971 11.4403 12.6899 11.5474C12.5827 11.6546 12.4374 11.7148 12.2858 11.7148C12.1342 11.7148 11.9889 11.6546 11.8817 11.5474C11.7745 11.4403 11.7143 11.2949 11.7143 11.1433V6.57133H11.71C11.71 6.25567 11.456 6 11.143 6C10.8296 6 10.576 6.25567 10.576 6.57133H10.5716V11.1433C10.5716 11.2949 10.5114 11.4403 10.4043 11.5474C10.2971 11.6546 10.1517 11.7148 10.0001 11.7148C9.84857 11.7148 9.70321 11.6546 9.59603 11.5474C9.48886 11.4403 9.42864 11.2949 9.42864 11.1433V6.57133C9.42864 6.25567 9.17464 6 8.86198 6C8.54864 6 8.29464 6.25567 8.29464 6.57133H8.28564V12.2857C8.28564 12.9887 8.99098 13.5927 9.99998 13.8573V20.8573C10.0051 21.1571 10.1278 21.4428 10.3415 21.6529C10.5553 21.8631 10.843 21.9808 11.1428 21.9808C11.4426 21.9808 11.7303 21.8631 11.9441 21.6529C12.1579 21.4428 12.2805 21.1571 12.2856 20.8573V13.8573C13.2946 13.5927 14 12.9887 14 12.2857V6.57133H13.9956C13.9956 6.25567 13.7416 6 13.4286 6ZM19.4286 6C17.3773 6 15.7146 9.58167 15.7146 14C15.7146 14.388 15.7273 14.7697 15.7523 15.143H17.429V20.8567C17.4341 21.1564 17.5568 21.4421 17.7705 21.6522C17.9843 21.8624 18.272 21.9801 18.5718 21.9801C18.8716 21.9801 19.1593 21.8624 19.3731 21.6522C19.5869 21.4421 19.7095 21.1564 19.7146 20.8567V6.02333C19.6201 6.00781 19.5245 6 19.4286 6Z"
            fill="#171516"
          />
        </g>
        <defs>
          <clipPath id="clip0_64_122">
            <rect width="16" height="16" fill="white" transform="translate(6 6)" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    lat: 43.20825062997639,
    lng: 76.96997818407993,
    text: 'WC Luxor',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <g clipPath="url(#clip0_64_189)">
          <path
            d="M14 10.6875C15.2944 10.6875 16.3438 9.63817 16.3438 8.34375C16.3438 7.04933 15.2944 6 14 6C12.7056 6 11.6562 7.04933 11.6562 8.34375C11.6562 9.63817 12.7056 10.6875 14 10.6875Z"
            fill="#171516"
          />
          <path
            d="M21.0312 20.125C21.0312 19.0918 20.1931 18.2509 19.1324 18.2509H19.1302C18.3785 18.2999 14.3191 20.2921 12.8062 21.1202L11.1985 22H19.1562C20.1903 22 21.0312 21.1591 21.0312 20.125ZM20.8554 16.4775C19.4313 15.3386 19.0043 14.0456 18.6875 12.4272C18.6875 11.4664 17.9086 10.6875 16.9478 10.6875H11.0522C10.0914 10.6875 9.3125 11.4664 9.3125 12.4272C9.00522 13.997 8.60966 15.3059 7.1445 16.4776L6 17.3125H7.4375C8.98016 17.3125 10.5127 16.5732 11.5015 15.4233L12.025 18.4962C12.7155 18.8171 13.4046 19.1546 13.9985 19.4525C14.5942 19.1529 15.2852 18.8132 15.975 18.4908L16.5506 15.2374C17.544 16.5412 18.9988 17.3125 20.5625 17.3125H22L20.8554 16.4775ZM8.86984 18.2509H8.86756C7.80691 18.2509 6.96875 19.0918 6.96875 20.125C6.96875 21.1591 7.80966 22 8.84375 22H9.09369C9.19103 21.9492 13.0633 19.9282 12.966 19.9789C11.2785 19.1514 9.36303 18.2831 8.86984 18.2509Z"
            fill="#171516"
          />
        </g>
        <defs>
          <clipPath id="clip0_64_189">
            <rect width="16" height="16" fill="white" transform="translate(6 6)" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    lat: 43.211199476520314,
    lng: 76.96935299679801,
    text: 'Wine time dostyk',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          d="M15.0654 15.9429C15.1384 15.9047 15.2063 15.8364 15.2022 15.8375C17.2413 15.2759 18.75 13.3197 18.75 11C18.75 9.43687 17.7662 6.4675 17.7244 6.34187C17.6912 6.24233 17.6275 6.15575 17.5424 6.09439C17.4572 6.03304 17.3549 6.00002 17.25 6H10.75C10.5347 6 10.3438 6.13781 10.2756 6.34187C10.2338 6.4675 9.25 9.43687 9.25 11C9.25 13.3973 10.8623 15.3357 12.7984 15.8377C12.8374 15.8804 12.8834 15.916 12.9346 15.9429C13.1054 16.032 13.2484 16.1663 13.3481 16.3311C13.4478 16.4959 13.5003 16.6849 13.5 16.8775V20C13.5 20.5514 13.0514 21 12.5 21H11.5C11.2238 21 11 21.2239 11 21.5C11 21.7761 11.2238 22 11.5 22H16.5C16.7762 22 17 21.7761 17 21.5C17 21.2239 16.7762 21 16.5 21H15.5C14.9486 21 14.5 20.5514 14.5 20V16.8775C14.4997 16.6849 14.5522 16.4959 14.6519 16.3311C14.7516 16.1663 14.8946 16.032 15.0654 15.9429ZM10.25 11C10.25 9.94547 10.8016 8.00078 11.115 7H16.885C17.1966 7.99775 17.7031 9.78816 17.7459 10.8372C17.8553 13.0399 16.1618 15 14 15C11.9322 15 10.25 13.2056 10.25 11Z"
          fill="#171516"
        />
        <path
          d="M16.75 11C16.75 10.4356 16.525 9.33031 16.1419 8H11.8578C11.475 9.32906 11.25 10.4347 11.25 11C11.25 12.6541 12.4837 14 14 14C15.5163 14 16.75 12.6541 16.75 11Z"
          fill="#171516"
        />
      </svg>
    )
  },
  {
    lat: 43.22379680712097,
    lng: 76.96748766340622,
    text: 'ТЕрРЕНКУР',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          d="M20 17.3335C20 17.3335 18.9333 16.7335 17.6 15.6002C18.6667 15.2002 19.3333 14.6668 19.3333 14.6668C19.3333 14.6668 17.8 13.8002 16.2667 12.2668C17.3333 11.8668 18 11.3335 18 11.3335C18 11.3335 15.4 9.86683 14 7.3335C12.6 9.86683 10 11.3335 10 11.3335C10 11.3335 10.6667 11.8668 11.7333 12.2668C10.2 13.8002 8.66667 14.6668 8.66667 14.6668C8.66667 14.6668 9.33333 15.2002 10.4 15.6668C9.06667 16.7335 8 17.3335 8 17.3335C8 17.3335 10.1333 19.0668 13.3333 19.2668V20.6668H14.6667V19.2668C17.8667 19.0668 20 17.3335 20 17.3335Z"
          fill="#171516"
        />
      </svg>
    )
  },
  {
    lat: 43.23416320356148,
    lng: 76.97608756075893,
    text: 'кок-тобе',
    textSide: false,
    inner: (
      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          d="M11.1667 11C11.1667 12.1046 12.4751 13 14.5001 13C16.5251 13 17.8334 12.1046 17.8334 11H11.1667ZM15.5116 13.9304C15.189 13.9763 14.851 14 14.5001 14C14.1492 14 13.8112 13.9763 13.4886 13.9304L13.3334 22H15.6668L15.5116 13.9304ZM16.1667 8.66672H15.0001V6H14.0001V8.66672H12.8334L12.5001 10.0001H16.5001L16.1667 8.66672Z"
          fill="#171516"
        />
      </svg>
    )
  },
  {
    lat: 43.21570606090628,
    lng: 76.95546339423461,
    text: 'NIS',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          d="M8.44746 7.88818C8.44703 7.88818 8.44654 7.88818 8.44611 7.88818C8.29478 7.88818 8.15245 7.94717 8.04498 8.05438C7.93632 8.16277 7.87646 8.30709 7.87646 8.46074V17.0461C7.87646 17.3609 8.1336 17.6177 8.44972 17.6185C9.78241 17.6217 12.0152 17.8994 13.5555 19.5113V10.5265C13.5555 10.4198 13.5283 10.3195 13.4768 10.2366C12.2126 8.20064 9.78316 7.89131 8.44746 7.88818Z"
          fill="#171516"
        />
        <path
          d="M20.1236 17.0461V8.46074C20.1236 8.30709 20.0637 8.16277 19.9551 8.05438C19.8476 7.94717 19.7051 7.88818 19.554 7.88818C19.5535 7.88818 19.553 7.88818 19.5526 7.88818C18.2169 7.89136 15.7875 8.2007 14.5232 10.2366C14.4718 10.3196 14.4446 10.4199 14.4446 10.5266V19.5113C15.9849 17.8994 18.2177 17.6217 19.5504 17.6185C19.8664 17.6177 20.1236 17.3609 20.1236 17.0461Z"
          fill="#171516"
        />
        <path
          d="M21.4275 9.86816H21.0123V17.0462C21.0123 17.85 20.3574 18.5054 19.5523 18.5074C18.4219 18.5101 16.5581 18.7312 15.238 19.9805C17.521 19.4215 19.9277 19.7849 21.2993 20.0975C21.4706 20.1365 21.6475 20.0962 21.7848 19.9868C21.9215 19.8777 21.9999 19.7147 21.9999 19.5396V10.4406C22 10.125 21.7431 9.86816 21.4275 9.86816Z"
          fill="#171516"
        />
        <path
          d="M6.98759 17.0462V9.86816H6.57245C6.25686 9.86816 6 10.125 6 10.4406V19.5395C6 19.7146 6.07844 19.8776 6.21517 19.9867C6.35227 20.096 6.52908 20.1364 6.70061 20.0973C8.0722 19.7847 10.4789 19.4214 12.7618 19.9804C11.4419 18.7311 9.57798 18.5101 8.44758 18.5074C7.64256 18.5054 6.98759 17.85 6.98759 17.0462Z"
          fill="#171516"
        />
      </svg>
    )
  },
  {
    lat: 43.21436400280259,
    lng: 76.93581819389922,
    text: 'invictus',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <g clipPath="url(#clip0_64_189)">
          <path
            d="M14 10.6875C15.2944 10.6875 16.3438 9.63817 16.3438 8.34375C16.3438 7.04933 15.2944 6 14 6C12.7056 6 11.6562 7.04933 11.6562 8.34375C11.6562 9.63817 12.7056 10.6875 14 10.6875Z"
            fill="#171516"
          />
          <path
            d="M21.0312 20.125C21.0312 19.0918 20.1931 18.2509 19.1324 18.2509H19.1302C18.3785 18.2999 14.3191 20.2921 12.8062 21.1202L11.1985 22H19.1562C20.1903 22 21.0312 21.1591 21.0312 20.125ZM20.8554 16.4775C19.4313 15.3386 19.0043 14.0456 18.6875 12.4272C18.6875 11.4664 17.9086 10.6875 16.9478 10.6875H11.0522C10.0914 10.6875 9.3125 11.4664 9.3125 12.4272C9.00522 13.997 8.60966 15.3059 7.1445 16.4776L6 17.3125H7.4375C8.98016 17.3125 10.5127 16.5732 11.5015 15.4233L12.025 18.4962C12.7155 18.8171 13.4046 19.1546 13.9985 19.4525C14.5942 19.1529 15.2852 18.8132 15.975 18.4908L16.5506 15.2374C17.544 16.5412 18.9988 17.3125 20.5625 17.3125H22L20.8554 16.4775ZM8.86984 18.2509H8.86756C7.80691 18.2509 6.96875 19.0918 6.96875 20.125C6.96875 21.1591 7.80966 22 8.84375 22H9.09369C9.19103 21.9492 13.0633 19.9282 12.966 19.9789C11.2785 19.1514 9.36303 18.2831 8.86984 18.2509Z"
            fill="#171516"
          />
        </g>
        <defs>
          <clipPath id="clip0_64_189">
            <rect width="16" height="16" fill="white" transform="translate(6 6)" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    lat: 43.21737479616463,
    lng: 76.93270464171628,
    text: 'Haileybury',
    textSide: false,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          d="M8.44746 7.88818C8.44703 7.88818 8.44654 7.88818 8.44611 7.88818C8.29478 7.88818 8.15245 7.94717 8.04498 8.05438C7.93632 8.16277 7.87646 8.30709 7.87646 8.46074V17.0461C7.87646 17.3609 8.1336 17.6177 8.44972 17.6185C9.78241 17.6217 12.0152 17.8994 13.5555 19.5113V10.5265C13.5555 10.4198 13.5283 10.3195 13.4768 10.2366C12.2126 8.20064 9.78316 7.89131 8.44746 7.88818Z"
          fill="#171516"
        />
        <path
          d="M20.1236 17.0461V8.46074C20.1236 8.30709 20.0637 8.16277 19.9551 8.05438C19.8476 7.94717 19.7051 7.88818 19.554 7.88818C19.5535 7.88818 19.553 7.88818 19.5526 7.88818C18.2169 7.89136 15.7875 8.2007 14.5232 10.2366C14.4718 10.3196 14.4446 10.4199 14.4446 10.5266V19.5113C15.9849 17.8994 18.2177 17.6217 19.5504 17.6185C19.8664 17.6177 20.1236 17.3609 20.1236 17.0461Z"
          fill="#171516"
        />
        <path
          d="M21.4275 9.86816H21.0123V17.0462C21.0123 17.85 20.3574 18.5054 19.5523 18.5074C18.4219 18.5101 16.5581 18.7312 15.238 19.9805C17.521 19.4215 19.9277 19.7849 21.2993 20.0975C21.4706 20.1365 21.6475 20.0962 21.7848 19.9868C21.9215 19.8777 21.9999 19.7147 21.9999 19.5396V10.4406C22 10.125 21.7431 9.86816 21.4275 9.86816Z"
          fill="#171516"
        />
        <path
          d="M6.98759 17.0462V9.86816H6.57245C6.25686 9.86816 6 10.125 6 10.4406V19.5395C6 19.7146 6.07844 19.8776 6.21517 19.9867C6.35227 20.096 6.52908 20.1364 6.70061 20.0973C8.0722 19.7847 10.4789 19.4214 12.7618 19.9804C11.4419 18.7311 9.57798 18.5101 8.44758 18.5074C7.64256 18.5054 6.98759 17.85 6.98759 17.0462Z"
          fill="#171516"
        />
      </svg>
    )
  },
  {
    lat: 43.21964924032061,
    lng: 76.92831876615377,
    text: 'essentai mall',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.8334 10.6666C16.8334 10.9426 16.6094 11.1666 16.3334 11.1666C16.0574 11.1666 15.8334 10.9426 15.8334 10.6666V9.66659C15.8334 8.65392 15.0127 7.83325 14.0001 7.83325C12.9874 7.83325 12.1667 8.65392 12.1667 9.66659V10.6666C12.1667 10.9426 11.9427 11.1666 11.6667 11.1666C11.3907 11.1666 11.1667 10.9426 11.1667 10.6666V9.66659C11.1667 8.10192 12.4354 6.83325 14.0001 6.83325C15.5647 6.83325 16.8334 8.10192 16.8334 9.66659V10.6666Z"
          fill="#171516"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8948 11.5665L19.4281 18.5665C19.4554 18.9812 19.3101 19.3878 19.0268 19.6912C18.7428 19.9945 18.3461 20.1665 17.9314 20.1665H10.0688C9.65411 20.1665 9.25744 19.9945 8.97344 19.6912C8.69011 19.3878 8.54478 18.9812 8.57211 18.5665L9.10544 11.5665C9.15811 10.7785 9.81278 10.1665 10.6021 10.1665H17.3981C18.1874 10.1665 18.8421 10.7785 18.8948 11.5665ZM15.6574 13.1185C15.3628 13.7378 14.7314 14.1665 14.0001 14.1665C13.2688 14.1665 12.6374 13.7378 12.3428 13.1185C12.2248 12.8692 11.9261 12.7632 11.6768 12.8818C11.4274 12.9998 11.3214 13.2985 11.4394 13.5478C11.8941 14.5052 12.8701 15.1665 14.0001 15.1665C15.1301 15.1665 16.1061 14.5052 16.5608 13.5478C16.6788 13.2985 16.5728 12.9998 16.3234 12.8818C16.0741 12.7632 15.7754 12.8692 15.6574 13.1185Z"
          fill="#171516"
        />
      </svg>
    )
  },
  {
    lat: 43.2067584342513,
    lng: 76.923881642672,
    text: 'KIS',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          d="M8.44746 7.88818C8.44703 7.88818 8.44654 7.88818 8.44611 7.88818C8.29478 7.88818 8.15245 7.94717 8.04498 8.05438C7.93632 8.16277 7.87646 8.30709 7.87646 8.46074V17.0461C7.87646 17.3609 8.1336 17.6177 8.44972 17.6185C9.78241 17.6217 12.0152 17.8994 13.5555 19.5113V10.5265C13.5555 10.4198 13.5283 10.3195 13.4768 10.2366C12.2126 8.20064 9.78316 7.89131 8.44746 7.88818Z"
          fill="#171516"
        />
        <path
          d="M20.1236 17.0461V8.46074C20.1236 8.30709 20.0637 8.16277 19.9551 8.05438C19.8476 7.94717 19.7051 7.88818 19.554 7.88818C19.5535 7.88818 19.553 7.88818 19.5526 7.88818C18.2169 7.89136 15.7875 8.2007 14.5232 10.2366C14.4718 10.3196 14.4446 10.4199 14.4446 10.5266V19.5113C15.9849 17.8994 18.2177 17.6217 19.5504 17.6185C19.8664 17.6177 20.1236 17.3609 20.1236 17.0461Z"
          fill="#171516"
        />
        <path
          d="M21.4275 9.86816H21.0123V17.0462C21.0123 17.85 20.3574 18.5054 19.5523 18.5074C18.4219 18.5101 16.5581 18.7312 15.238 19.9805C17.521 19.4215 19.9277 19.7849 21.2993 20.0975C21.4706 20.1365 21.6475 20.0962 21.7848 19.9868C21.9215 19.8777 21.9999 19.7147 21.9999 19.5396V10.4406C22 10.125 21.7431 9.86816 21.4275 9.86816Z"
          fill="#171516"
        />
        <path
          d="M6.98759 17.0462V9.86816H6.57245C6.25686 9.86816 6 10.125 6 10.4406V19.5395C6 19.7146 6.07844 19.8776 6.21517 19.9867C6.35227 20.096 6.52908 20.1364 6.70061 20.0973C8.0722 19.7847 10.4789 19.4214 12.7618 19.9804C11.4419 18.7311 9.57798 18.5101 8.44758 18.5074C7.64256 18.5054 6.98759 17.85 6.98759 17.0462Z"
          fill="#171516"
        />
      </svg>
    )
  },
  {
    lat: 43.21196953210788,
    lng: 76.92251751473003,
    text: 'Villa dei Fiori',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <g clipPath="url(#clip0_64_122)">
          <path
            d="M13.4286 6C13.1153 6 12.862 6.25567 12.862 6.57133H12.8573V11.1433C12.8573 11.2949 12.7971 11.4403 12.6899 11.5474C12.5827 11.6546 12.4374 11.7148 12.2858 11.7148C12.1342 11.7148 11.9889 11.6546 11.8817 11.5474C11.7745 11.4403 11.7143 11.2949 11.7143 11.1433V6.57133H11.71C11.71 6.25567 11.456 6 11.143 6C10.8296 6 10.576 6.25567 10.576 6.57133H10.5716V11.1433C10.5716 11.2949 10.5114 11.4403 10.4043 11.5474C10.2971 11.6546 10.1517 11.7148 10.0001 11.7148C9.84857 11.7148 9.70321 11.6546 9.59603 11.5474C9.48886 11.4403 9.42864 11.2949 9.42864 11.1433V6.57133C9.42864 6.25567 9.17464 6 8.86198 6C8.54864 6 8.29464 6.25567 8.29464 6.57133H8.28564V12.2857C8.28564 12.9887 8.99098 13.5927 9.99998 13.8573V20.8573C10.0051 21.1571 10.1278 21.4428 10.3415 21.6529C10.5553 21.8631 10.843 21.9808 11.1428 21.9808C11.4426 21.9808 11.7303 21.8631 11.9441 21.6529C12.1579 21.4428 12.2805 21.1571 12.2856 20.8573V13.8573C13.2946 13.5927 14 12.9887 14 12.2857V6.57133H13.9956C13.9956 6.25567 13.7416 6 13.4286 6ZM19.4286 6C17.3773 6 15.7146 9.58167 15.7146 14C15.7146 14.388 15.7273 14.7697 15.7523 15.143H17.429V20.8567C17.4341 21.1564 17.5568 21.4421 17.7705 21.6522C17.9843 21.8624 18.272 21.9801 18.5718 21.9801C18.8716 21.9801 19.1593 21.8624 19.3731 21.6522C19.5869 21.4421 19.7095 21.1564 19.7146 20.8567V6.02333C19.6201 6.00781 19.5245 6 19.4286 6Z"
            fill="#171516"
          />
        </g>
        <defs>
          <clipPath id="clip0_64_122">
            <rect width="16" height="16" fill="white" transform="translate(6 6)" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    lat: 43.2170692199265,
    lng: 76.90984302454952,
    text: 'royal club',
    textSide: true,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <g clipPath="url(#clip0_64_189)">
          <path
            d="M14 10.6875C15.2944 10.6875 16.3438 9.63817 16.3438 8.34375C16.3438 7.04933 15.2944 6 14 6C12.7056 6 11.6562 7.04933 11.6562 8.34375C11.6562 9.63817 12.7056 10.6875 14 10.6875Z"
            fill="#171516"
          />
          <path
            d="M21.0312 20.125C21.0312 19.0918 20.1931 18.2509 19.1324 18.2509H19.1302C18.3785 18.2999 14.3191 20.2921 12.8062 21.1202L11.1985 22H19.1562C20.1903 22 21.0312 21.1591 21.0312 20.125ZM20.8554 16.4775C19.4313 15.3386 19.0043 14.0456 18.6875 12.4272C18.6875 11.4664 17.9086 10.6875 16.9478 10.6875H11.0522C10.0914 10.6875 9.3125 11.4664 9.3125 12.4272C9.00522 13.997 8.60966 15.3059 7.1445 16.4776L6 17.3125H7.4375C8.98016 17.3125 10.5127 16.5732 11.5015 15.4233L12.025 18.4962C12.7155 18.8171 13.4046 19.1546 13.9985 19.4525C14.5942 19.1529 15.2852 18.8132 15.975 18.4908L16.5506 15.2374C17.544 16.5412 18.9988 17.3125 20.5625 17.3125H22L20.8554 16.4775ZM8.86984 18.2509H8.86756C7.80691 18.2509 6.96875 19.0918 6.96875 20.125C6.96875 21.1591 7.80966 22 8.84375 22H9.09369C9.19103 21.9492 13.0633 19.9282 12.966 19.9789C11.2785 19.1514 9.36303 18.2831 8.86984 18.2509Z"
            fill="#171516"
          />
        </g>
        <defs>
          <clipPath id="clip0_64_189">
            <rect width="16" height="16" fill="white" transform="translate(6 6)" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    lat: 43.22211919540218,
    lng: 76.91316027362288,
    text: 'Ботанический сад',
    textSide: false,
    inner: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="14" fill="#C2BCB2" />
        <path
          d="M20 17.3335C20 17.3335 18.9333 16.7335 17.6 15.6002C18.6667 15.2002 19.3333 14.6668 19.3333 14.6668C19.3333 14.6668 17.8 13.8002 16.2667 12.2668C17.3333 11.8668 18 11.3335 18 11.3335C18 11.3335 15.4 9.86683 14 7.3335C12.6 9.86683 10 11.3335 10 11.3335C10 11.3335 10.6667 11.8668 11.7333 12.2668C10.2 13.8002 8.66667 14.6668 8.66667 14.6668C8.66667 14.6668 9.33333 15.2002 10.4 15.6668C9.06667 16.7335 8 17.3335 8 17.3335C8 17.3335 10.1333 19.0668 13.3333 19.2668V20.6668H14.6667V19.2668C17.8667 19.0668 20 17.3335 20 17.3335Z"
          fill="#171516"
        />
      </svg>
    )
  }
];

const API_KEY = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

// TODO: mobile

export const Location = () => {
  return (
    <div className={styles.wrap}>
      <section className={styles.loc}>
        <div className={styles.loc_info}>
          <h3>
            Сквозь призму <span>локации</span>
          </h3>
          <p>
            ЖК Hayat Regency расположен в самом сердце многогранного города Алматы, предоставляя своим жителям доступ ко
            всей городской инфраструктуре.
          </p>
        </div>
        <Map />
      </section>
      <div className={styles.address}>
        <div className={styles.circles}>
          <div className={styles.circles_1}></div>
          <div className={styles.circles_2}></div>
        </div>
        <p className={styles.address_subtitle}>Расположение</p>
        <h3 className={styles.address_title}>
          <span>Алматы</span>, улица оспанова, владение 85
        </h3>
        <Button gold_100>Построить маршрут</Button>
      </div>
      <div className={styles.feats}>
        <p className={styles.feats_left}>
          Рестораны, кафе, магазины, <br />
          образовательные учреждения <br />и медицинские центры находятся <br />
          всего в <span>нескольких минутах</span> <br />
          от вашего порога.
        </p>
        <p className={styles.feats_right}>
          Однако величественные горы, зелёные парки и свежий горный воздух вокруг, создают ощущение уединения и покоя.
          Здесь вы можете наслаждаться природной красотой, уходя в долгие прогулки или расслабляясь на открытых
          террасах.
        </p>
      </div>
    </div>
  );
};

const Map = () => {
  const ref = useRef(null);

  const defaultProps = {
    center: {
      lat: 43.20624,
      lng: 76.948077
    },
    zoom: 13.85
  };

  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{
          styles: mapStyles,
          disableDefaultUI: true
        }}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => {
          ref.current = map;
        }}
        ref={ref}
      >
        {markers.map((marker, idx) => (
          <Marker key={idx} {...marker} />
        ))}
      </GoogleMapReact>

      <div className={styles.map_zoom}>
        <Button
          rounded
          onClick={() => {
            // @ts-ignore
            ref.current.setZoom(ref.current.getZoom() + 1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M13.9994 5.83447V22.1678M5.83276 14.0011H22.1661"
              stroke="#171516"
              strokeWidth="1.32"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <Button
          rounded
          onClick={() => {
            // @ts-ignore
            ref.current.setZoom(ref.current.getZoom() - 1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M5.83301 14.0005H22.1663"
              stroke="#171516"
              strokeWidth="1.32"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

const Marker = (props: any) => {
  return (
    <div className={cn(styles.marker, { [styles.marker_textSide]: props.textSide })}>
      {props.inner}
      <p>{props.text}</p>
    </div>
  );
};