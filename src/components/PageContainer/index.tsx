import React from 'react';

import styles from './pageContainer.module.css';

const PageContainer = ({
  children,
  className='',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`${className} ${styles.pageContainer}`}
    {...props}
  >
    { children }
  </div>
);

export default PageContainer;
