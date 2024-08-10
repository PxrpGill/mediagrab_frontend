import styles from './Header.module.css';
import multiLogo from '@/shared/assets/images/multiLogo.png';
import { Cabinet } from '@/entities/User/ui/Cabinet';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoPlace}>
        <img
          className={styles.logo}
          src={multiLogo}
          alt="Логотип Mediagrab"
          draggable="false"
        />
        <h1 className={styles.title}>MediaGrab</h1>
      </div>
      <div className={styles.authPlace}>
        <Cabinet />
      </div>
    </header>
  );
};
