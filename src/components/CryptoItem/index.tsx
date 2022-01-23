import React from 'react';
import { ReactComponent as Trophy } from '../../assets/icon.svg'

import styles from './cryptoItem.module.css';

export type CryptoItemPropsType = {
  name: string,
  value: number,
  onClick: (id: string) => void,
};

const CryptoItem = ({
  name,
  value,
  onClick,
}: CryptoItemPropsType) => (
  <div className={styles.cryptoItemWrapper}>
    <div className={styles.cryptoItemContainer}>
      <Trophy />
      <div className={styles.cryptoInfo}>
        <h3 className={styles.cryptoName}>{ name }</h3>
        <span className={styles.cryptoValue}>{`${value} €`}</span>
      </div>
      <button onClick={() => {onClick(name)}} className={styles.button}> x </button>
    </div>
    <hr className={styles.separator}/>
  </div>
);

export default CryptoItem;
