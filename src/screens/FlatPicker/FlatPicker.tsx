import React, { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
// @ts-ignore
import RangeSlider from 'react-range-slider-input';
import { useForm } from 'react-hook-form';

import Button from '@components/Button';

import 'react-range-slider-input/dist/style.css';
import styles from './FlatPicker.module.scss';

const FILTERS = [
  {
    type: 'dropdown',
    name: 'block',
    options: [
      { value: 1, name: '1' },
      { value: 2, name: '2' },
      { value: 3, name: '3' },
      { value: 4, name: '4' }
    ]
  },
  {
    type: 'dropdown',
    name: 'floor',
    options: [
      { value: 1, name: '1' },
      { value: 2, name: '2' },
      { value: 3, name: '3' }
    ]
  },
  {
    type: 'radio',
    name: 'room',
    options: [
      { value: 2, name: '2' },
      { value: 3, name: '3' },
      { value: 4, name: '4' },
      { value: 5, name: '5+' }
    ]
  }
];

const APARTMENTS = [
  { square: 121.57, img: '/assets/plans/plan.png', room: 3, block: 2, floor: 3, price: 100_000 },
  { square: 185.32, img: '/assets/plans/plan.png', room: 4, block: 1, floor: 2, price: 230_000 },
  { square: 240.25, img: '/assets/plans/plan.png', room: 4, block: 3, floor: 3, price: 160_000 },
  { square: 290.15, img: '/assets/plans/plan.png', room: 5, block: 2, floor: 2, price: 380_000 }
];

const LIMIT = 3;

function numberWithSpaces(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export const FlatPicker = () => {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      block: '',
      floor: '',
      room: '',
      square: [88.3, 500]
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<any>(null);
  const [offset, setOffset] = useState(0);

  const watchBlock = watch('block');
  const watchFloor = watch('floor');
  const watchRoom = watch('room');
  const watchSquare = watch('square');

  const filteredByBlock = useMemo(() => {
    if (watchBlock === '') {
      return APARTMENTS;
    }

    return APARTMENTS.filter(apt => apt.block === Number(watchBlock));
  }, [watchBlock]);

  const filteredByFloorAndBlock = useMemo(() => {
    if (watchFloor === '') {
      return filteredByBlock;
    }

    return filteredByBlock.filter(apt => apt.floor === Number(watchFloor));
  }, [watchFloor, filteredByBlock]);

  const filteredByRoomAndFloorAndBlock = useMemo(() => {
    if (watchRoom === '') {
      return filteredByFloorAndBlock;
    }

    return filteredByFloorAndBlock.filter(apt => apt.room === Number(watchRoom));
  }, [watchRoom, filteredByFloorAndBlock]);

  const filteredBySquareAndRoomAndFloorAndBlock = useMemo(() => {
    return filteredByRoomAndFloorAndBlock.filter(apt => apt.square >= watchSquare[0] && apt.square <= watchSquare[1]);
  }, [watchSquare, filteredByRoomAndFloorAndBlock]);

  const finalListData = useMemo(() => {
    return filteredBySquareAndRoomAndFloorAndBlock.slice(0, offset * LIMIT + LIMIT);
  }, [offset, filteredBySquareAndRoomAndFloorAndBlock]);

  return (
    <>
      <div className={styles.flat}>
        <div className={styles.flat_head}>
          <p className={styles.flat_head_subtitle}>планировки</p>
          <h2 className={styles.flat_head_title}>подбор квартиры</h2>
        </div>
        <div className={styles.flat_filters}>
          <div className={styles.flat_filters_item}>
            <label htmlFor="block">блок</label>
            <select id="block" {...register('block')}>
              <option value="">любой блок</option>
              {FILTERS.filter(filter => filter.name === 'block')[0].options.map(filter => (
                <option key={filter.name} value={filter.value}>
                  {filter.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.flat_filters_item}>
            <label htmlFor="floor">этаж</label>
            <select id="floor" {...register('floor')}>
              <option value="">любой этаж</option>
              {FILTERS.filter(filter => filter.name === 'floor')[0].options.map(filter => (
                <option key={filter.name} value={filter.value}>
                  {filter.name}
                </option>
              ))}
            </select>
          </div>

          <div className={cn(styles.flat_filters_item)}>
            <label htmlFor="room">Кол-во комнат</label>
            <div className={styles.flat_filters_item_radio}>
              <label htmlFor="room-all" data-active={watchRoom === ''}>
                <input type="radio" value={''} id="room-all" {...register('room')} />
                <p>Все</p>
              </label>

              {FILTERS.filter(filter => filter.name === 'room')[0].options.map(filter => (
                <label
                  key={filter.name}
                  htmlFor={`room-${filter.value}`}
                  data-active={watchRoom === filter.value.toString()}
                >
                  <input type="radio" value={filter.value} id={`room-${filter.value}`} {...register('room')} />
                  <p>{filter.name}</p>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.flat_filters_item}>
            <label htmlFor="square">Общая площадь, м²</label>
            <div className={styles.flat_filters_item_range}>
              <p>{watchSquare[0]}</p>
              <p>{watchSquare[1]}</p>
            </div>
            <RangeSlider
              min={88.3}
              max={500}
              defaultValue={[88.3, 500]}
              onInput={(e: [number, number]) => {
                setValue('square', e);
              }}
            />
          </div>
        </div>

        <div className={styles.flat_apts}>
          {finalListData.map((apt, idx) => (
            <div key={idx} className={styles.flat_apts_item}>
              <div className={styles.flat_apts_item_square}>{apt.square} м²</div>
              <div className={styles.flat_apts_item_img}>
                <img src={apt.img} width={166} height={138} />
              </div>
              <div className={styles.flat_apts_item_info}>
                <p>{apt.room} комнатная</p>
                <div>
                  <span>{apt.block} блок</span>
                  <span className={styles.flat_apts_item_info_dot}></span>
                  <span>{apt.floor} этаж</span>
                  <span className={styles.flat_apts_item_info_dot}></span>
                  <span>Чистовая отделка</span>
                </div>
              </div>
              <div className={styles.flat_apts_item_priceWrap}>
                <div className={styles.flat_apts_item_price}>от {numberWithSpaces(apt.price)} ₸</div>
                <div className={styles.flat_apts_item_button}>
                  <Button
                    transparent
                    gold_border
                    onClick={() => {
                      setShowModal(true);
                      setModalData(apt);
                    }}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {filteredBySquareAndRoomAndFloorAndBlock.length - (offset * LIMIT + LIMIT) < 0 ? null : (
            <Button onClick={() => setOffset(prev => prev + 1)}>
              показать еще {filteredBySquareAndRoomAndFloorAndBlock.length - (offset * LIMIT + LIMIT)} из{' '}
              {APARTMENTS.length}
            </Button>
          )}
        </div>
      </div>

      {showModal &&
        createPortal(
          <div className={styles.modal}>
            <div className={styles.modal_inner}>
              <div className={styles.modal_close}>
                <Button onClick={() => setShowModal(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M19.8332 8.1665L8.1665 19.8332M8.1665 8.1665L19.8332 19.8332"
                      stroke="#38342F"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>

              <div className={styles.modal_img}>
                <img src={modalData.img} width={500} height={415} alt="img" />
              </div>

              <div className={styles.modal_info}>
                <div className={styles.modal_info_left}>
                  <h4>{modalData.room} комнатная</h4>
                  <div>
                    <span>{modalData.block} блок</span>
                    <span className={styles.modal_info_dot}></span>
                    <span>{modalData.floor} этаж</span>
                    <span className={styles.modal_info_dot}></span>
                    <span>Чистовая отделка</span>
                  </div>
                </div>
                <p>{modalData.square} м²</p>
              </div>

              <div className={styles.modal_price}>
                <div className={styles.modal_price_left}>
                  <p className={styles.modal_price_left_text}>Стоимость от:</p>
                  <p className={styles.modal_price_left_value}>{numberWithSpaces(modalData.price)} ₸</p>
                </div>
                <Button onClick={() => setShowModal(false)}>Получить консультацию</Button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
