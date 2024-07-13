import { ResultContent } from "../model";
import styles from './ResultPanel.module.css';

export const ResultPanel = ({ data }) => {
  return (
    <section className={styles.block}>
      <h3 className={styles.hidden}>
        Результаты поиска
      </h3>
      <ResultContent data={data} />
    </section>
  );
}