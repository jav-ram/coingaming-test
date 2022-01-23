import React from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';

import Cryptos from '../Cryptos';
import AddWizard from '../AddWizard';

import figure from '../../assets/figure.png'

import styles from './cryptoDisplay.module.css';

const query = gql`query GetCrypto($name: String) {
  markets(filter:{baseSymbol: {_eq:$name} quoteSymbol: {_eq:"EUR"}}) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}`

export const CryptoContext = React.createContext({
  executeFetch: (q: any)  => {},
  data: {
    markets: [
      {marketSymbol: '', ticker: { lastPrice: 0 }}
    ],
  },
  loading: false,
});

export const CryptoDisplay = () => {
  const [executeFetch, { data, loading }] = useLazyQuery(query);
  return (
    <CryptoContext.Provider
      value={{
        executeFetch,
        data,
        loading,
      }}
    >
        <div className={styles.cryptoWrapper}>
          <div className={styles.cryptoDisplay}>
            <div>
              <h1 className={styles.title}>Now you can track all your cryptos here!</h1>
              <h2 className={styles.subtitle}>Just enter the cryptocurrency code on the form to the right.</h2>
            </div>
            <Cryptos />
          </div>
          <img alt="figure" className={styles.figure} src={figure} />
          <AddWizard />
        </div>
    </CryptoContext.Provider>
  );
}

export default CryptoDisplay;
