import styles from './Header.module.css';
import multiLogo from '../../../shared/assets/images/multiLogo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={multiLogo} alt="Логотип Multigrab" draggable="false" />
      <h1 className={styles.title}>MultiGrab</h1>
    </header>
  )
}