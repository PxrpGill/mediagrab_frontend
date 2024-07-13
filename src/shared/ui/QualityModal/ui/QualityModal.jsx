import styles from './QualityModal.module.css';

export const QualityModal = () => {
  return (
    <dialog className={styles.modal} open>
      <article className={styles.block}>
        <button className={styles.button}>
          <p className={styles.text_left}>
            144p
          </p>
          <p className={styles.text_right}>
            Наихудшее
          </p>
        </button>
        <button className={styles.button}>
          <p className={styles.text_left}>
            360p
          </p>
          <p className={styles.text_right}>
            Плохое
          </p>
        </button>
        <button className={styles.button}>
          <p className={styles.text_left}>
            480p
          </p>
          <p className={styles.text_right}>
            Хорошее
          </p>
        </button>
        <button className={styles.button}>
          <p className={styles.text_left}>
            720p
          </p>
          <p className={styles.text_right}>
            Хорошее
          </p>
        </button>
        <button className={styles.button}>
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