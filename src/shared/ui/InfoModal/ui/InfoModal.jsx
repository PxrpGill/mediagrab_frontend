import styles from './InfoModal.module.css';


export const InfoModal = () => {
  return (
    <dialog className={styles.dialog} open>
      <article>
        <p className={styles.about_text}>
          Sponsorblock - это функция, которая
          автоматически удаляет из ролика
          спонсорские сегменты (интеграции).
          Позволяет наслаждаться видео без
          отвлекающих частей.
        </p>
        <h2 className={styles.title}>Только YouTube</h2>
      </article>
    </dialog>
  );
};