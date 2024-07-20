import { observer } from 'mobx-react-lite';

import styles from './Сontent.module.css';
import { Search } from '@/features/Search';
import { Download } from '@/features/Download/ui/Download';

export const Content = observer(() => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Search />
        <Download />
      </div>
    </main>
  );
});