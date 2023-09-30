import React, { type ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  gold_100?: boolean;
  rounded?: boolean;
  gold_border?: boolean;
  transparent?: boolean;
}

export const Button = ({ children, className, gold_100, gold_border, rounded, transparent, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cn(
        styles.button,
        {
          [styles.button_gold_100]: gold_100,
          [styles.button_rounded]: rounded,
          [styles.button_transparent]: transparent,
          [styles.button_gold_border]: gold_border
        },
        className
      )}
    >
      {children}
    </button>
  );
};
