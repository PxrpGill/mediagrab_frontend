import style from './InformationModal.module.css';

export const InformationModal = ({ indexInfo, data }) => {
  return (
    <dialog className={style.modal} open>
      <article>
        {data[indexInfo].description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </dialog>
  );
};
