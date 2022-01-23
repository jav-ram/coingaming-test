import React from 'react';

import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';

import backgroundLines from '../../assets/bg.png';

import styles from './main.module.css'
import CryptoDisplay from '../../components/CryptoDisplay';
import Footer from '../../components/Footer';

const Main = () => (
  <div>
    <div className={styles.content}>
      <img alt="bg" className={styles.bg} src={backgroundLines} />
      <PageContainer className={styles.content}>
        <Header />
        <CryptoDisplay />
      </PageContainer>
    </div>
    <Footer />
  </div>
);
export default Main;
