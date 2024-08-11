import { observer } from 'mobx-react-lite';

import styles from './style.module.css';
import { Search } from '@/features/search';
import { Download } from '../../../features/download';
import { cardStore } from '@/entities/card/model';
import { MainLoader } from '@/shared/ui/MainLoader/ui/MainLoader';
import { useEffect } from 'react';

export const Content = observer(() => {
  const { isLoadingDownload, onlyAudio, isGettedData } = cardStore;

  useEffect(() => {}, [isGettedData]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {isLoadingDownload && <MainLoader isAudio={onlyAudio} />}
        <Search />
        {isGettedData && <Download />}
      </div>
    </main>
  );
});
