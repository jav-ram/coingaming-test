import React from 'react';

import AddForm from '../AddForm';
import styles from './addWizard.module.css';

const AddWizard = () => (
  <div className={styles.wizardContainer}>
    <AddForm />
    <p className={styles.disclaimer}> Use of this service is subject to terms and conditions. </p>
  </div>
);

export default AddWizard;
