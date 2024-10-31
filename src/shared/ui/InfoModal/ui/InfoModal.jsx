import styles from './InfoModal.module.css';


export const InfoModal = (
  { data, setIndexInfo, setInforamtionModalOpen }
) => {
  const handleClick = (index, action) => {
    if (action) {
      setIndexInfo(index);
    }
    setInforamtionModalOpen(action);
  };

  return (
    <dialog className={styles.dialog} open>
      <article className={styles.block}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>Информация</h2>
        </div>
        {
          data.map((item, index) => (
            <button className={styles.button}
              onMouseEnter={() => handleClick(index, true)}
              onMouseLeave={() => handleClick((index, false))}
              key={index}>
              {item.name}
            </button>
          ))
        }
      </article>
    </dialog>
  );
};