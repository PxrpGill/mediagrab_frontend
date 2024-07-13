import { useState } from 'react';
import { InfoModal } from '@/shared/ui/InfoModal';
import styles from './ResultContent.module.css';
import arrow from '@/shared/assets/images/arrow.svg';


export const ResultContent = ({ data }) => {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const openInfoModal = () => {
    setInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
  };

  const truncateToTwoWords = (str) => {
    if (!str) return 'Произошла ошибка';
    const words = str.split(' ');
    if (words.length > 2) {
      return words.slice(0, 2).join(' ') + '...';
    }
    return str;
  };

  return (
    <>
      <div className={styles.image_block}>
        <img src={data ? data.preview_url : '#'}
          alt="Картинка результата поиска"
          className={styles.image} />
      </div>
      <div className={styles.result_block}>
        <h1 className={styles.title}>
          {data ? truncateToTwoWords(data.title) : 'Произошла ошибка'}
        </h1>
        <p className={styles.author}>
          {data ? truncateToTwoWords(data.author_name) : 'Произошла ошибка'}
        </p>
        <label htmlFor="sponsor"
          className={styles.checkbox_block}>
          <input type="checkbox" name="sponsor"
            id="sponsor" className={styles.checkbox_sponsor}
          />
          Sponsorblock
          <button className={styles.open_modal_button}
            onMouseEnter={openInfoModal}
            onMouseLeave={closeInfoModal}>
            i
          </button>
          {isInfoModalOpen && <InfoModal />}
        </label>
        <div className={styles.button_place}>
          <div className={styles.main_buttons_block}>
            <button type="button"
              className={styles.download_button}>
              Скачать
            </button>
            <button className={styles.drop_list_button}>
              <img src={arrow}
                alt="Изображение стрелки выпадающего списка" />
            </button>
          </div>
          <label htmlFor="audio"
            className={styles.audio_check_checkbox_place}>
            <input type="checkbox"
              name="audio" id="audio"
              className={styles.audio_check_checkbox} />
            Только звук
          </label>
        </div>
      </div>
    </>
  )
}
