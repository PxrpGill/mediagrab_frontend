import styles from './QualityModal.module.css';

export const QualityModal = ({ setQuality, setQualityModalOpen, quality }) => {
  const handleClick = (value) => {
    setQualityModalOpen(false);
    setQuality(value);
  }

  return (
    <dialog className={styles.modal} open>
      <article className={styles.block}>
        <button className={quality == 'lowest' ? styles.button_selected : styles.button} value="lowest"
          onClick={() => handleClick('lowest')}>
          <p className={styles.text_left}>
            144p
          </p>
          <p className={styles.text_right}>
            Наихудшее
          </p>
        </button>
        <button className={quality == 'low' ? styles.button_selected : styles.button} value="low"
          onClick={() => handleClick('low')}>
          <p className={styles.text_left}>
            360p
          </p>
          <p className={styles.text_right}>
            Плохое
          </p>
        </button>
        <button className={quality == 'medium' ? styles.button_selected : styles.button} value="medium"
          onClick={() => handleClick('medium')}>
          <p className={styles.text_left}>
            480p
          </p>
          <p className={styles.text_right}>
            Хорошее
          </p>
        </button>
        <button className={quality == 'high' ? styles.button_selected : styles.button} value="high"
          onClick={() => handleClick('high')}>
          <p className={styles.text_left}>
            720p
          </p>
          <p className={styles.text_right}>
            Хорошее
          </p>
        </button>
        <button className={quality == 'highest' ? styles.button_selected : styles.button} value="highest"
          onClick={() => handleClick('highest')}>
          <p className={styles.text_left}>
            1080p
          </p>
          <p className={styles.text_right}>
            Отличное
          </p>
        </button>
      </article>
    </dialog>
  )
}