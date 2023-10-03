import React, { useState } from 'react';

import Button from '@components/Button';

import styles from './CallbackForm.module.scss';

export const CallbackForm = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className={styles.call}>
      <div className={styles.call_inner}>
        <h2>
          Запишитесь на <span>персональную</span> презентацию
        </h2>
        {isSent ? (
          <div className={styles.call_success}>
            <h3>Спасибо за обращение</h3>
            <p>Спасибо за Ваше обращение, в ближайшее время наши менеджеры свяжутся с Вами.</p>
          </div>
        ) : (
          <>
            <p>Получите оперативную и подробную консультацию от нашего специалиста.</p>
            <input type="text" placeholder="номер телефона" />
            <div className={styles.call_bottom}>
              <p>НАЖИМАЯ НА КНОПКУ «ОТПРАВИТЬ ЗАЯВКУ», ВЫ ПРИНИМАЕТЕ УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</p>
              <Button transparent gold_border onClick={() => setIsSent(true)}>
                Отправить заявку
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
