import { observer } from 'mobx-react-lite';

import styles from './Сontent.module.css';
import { Search } from '@/features/Search';
import { Download } from '@/features/Download/ui/Download';
import { cardStore } from '@/entities/Card/model';
import { MainLoader } from '@/shared/ui/MainLoader/ui/MainLoader';

export const Content = observer(() => {
  const { isLoadingDownload, onlyAudio, isGettedData } = cardStore;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {
          isLoadingDownload && <MainLoader isAudio={onlyAudio}/>
        }
        <Search />
        {
          isGettedData && <Download />
        }
      </div>
    </main>
  );
});