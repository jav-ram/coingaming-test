import React from 'react';

import styles from './button.module.css';

const Button = ({
  children,
  onClick,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`${className} ${styles.button}`}
    onClick={onClick}
    {...props}
  >
    { children }
  </button>
);

export default Button;
