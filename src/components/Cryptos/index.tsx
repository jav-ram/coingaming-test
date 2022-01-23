import React, { useEffect, useState, useContext } from 'react';
import * as _ from 'lodash';
import CryptoItem from '../CryptoItem';

import styles from './cryptos.module.css';
import { CryptoContext } from '../CryptoDisplay';

const getName = (name: string) => {
  return name.split(':')[1].split('/')[0]
}

type CryptoType = {
  name: string,
  value: number,
}

type cryptosStateType = {
  [key in string]: CryptoType
}

const Cryptos = () => {
  const { loading, data } = useContext(CryptoContext);
  const [cryptos, setCryptos] = useState<cryptosStateType>({});
  const deleteCrypto = (id: string) => {
    setCryptos(_.omit(cryptos, id));
  };

  useEffect(() => {
    if (!loading && data) {
      const { markets } = data;
      if (markets && markets.length > 0) {
        const newData = {
          name: getName(markets[0].marketSymbol),
          value: markets[0].ticker.lastPrice,
        };
        setCryptos({
          ...cryptos,
          [newData.name]: newData,
        });
      }
    }
  },
  [data, loading]);

  return (
    <div className={styles.cryptosContainer}>
      { Object.keys(cryptos).map((id) => <CryptoItem onClick={deleteCrypto} {...cryptos[id]} />) }
    </div>
  );
}

export default Cryptos;
