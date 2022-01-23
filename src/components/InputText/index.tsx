import React from 'react';

import styles from './inputText.module.css'

type InputTextPropsType = {
  label: string,
  name: string,
  value: string,
  onChange: (event: any) => void,
};

const InputText = ({
  label,
  ...props
}: InputTextPropsType) => (
  <div className={styles.inputContainer}>
    <span className={styles.label}>{ label }</span>
    <input {...props} className={styles.input} />
  </div>
);

export default InputText;
