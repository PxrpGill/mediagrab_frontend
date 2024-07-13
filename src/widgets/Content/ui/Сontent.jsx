import styles from './Сontent.module.css';
import { MainContent } from '@/features/main/MainContent';

export const Content = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MainContent />
      </div>
    </main>
  )
}