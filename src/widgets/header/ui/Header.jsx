import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/multiLogo.png" alt="Логотип Multigrab" draggable="false" />
      <h1 className={styles.title}>MultiGrab</h1>
    </header>
  )
}