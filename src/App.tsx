import React from 'react';

import { Album } from './components/Album';
import { AlbumList } from './components/AlbumList';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <h1>App</h1>
      <Album />
      <AlbumList />
    </div>
  );
}

export default App;
