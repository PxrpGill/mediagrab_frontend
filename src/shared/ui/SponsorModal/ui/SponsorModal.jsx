import styles from './SponsorModal.module.css';

export const SponsorModal = ({ data }) => {
  const trueData = () => (
    <>
      <h2 className={styles.title}>
        {data.length == 1 ? 'Найдена рекламная интеграция на промежутке:' : 'Найдены рекламные интеграции на промежутках:'}
      </h2>
      {
        data.map(
          (element, index) => <p className={styles.data} key={index}>{element}</p>
        )
      }
    </>
  );

  const falseData = () => (
    <>
      <h2 className={styles.title}>Рекламные интеграции не найдены</h2>
    </>
  )

  return (
    <dialog className={styles.modal} open>
      <article className={styles.content}>
        {data.length > 0 ? trueData() : falseData()}
      </article>
    </dialog>
  )
}