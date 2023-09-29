import React from 'react';

import styles from './Sidebar.module.scss';

export const Sidebar = ({ setIsSidebarVisible }: any) => {
  return (
    <div className={styles.sidebar} onClick={() => setIsSidebarVisible(false)}>
      Sidebar
    </div>
  );
};
