import styles from './style.module.css';
import multiLogo from '@/shared/assets/images/multiLogo.png';
import { UserAuth } from '../../../features/userAuth';

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
        <UserAuth />
      </div>
    </header>
  );
};
