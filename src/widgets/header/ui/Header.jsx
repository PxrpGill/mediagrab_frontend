import styles from './Header.module.css';
import multiLogo from '@/shared/assets/images/multiLogo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={multiLogo}
        alt="Логотип Mediagrab" draggable="false" />
      <h1 className={styles.title}>MediaGrab</h1>
    </header>
  )
}