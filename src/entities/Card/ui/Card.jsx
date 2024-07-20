import { useState } from 'react';
import styles from './Card.module.css';

import arrow from '@/shared/assets/images/arrow.svg';
import { InfoModal } from '@/shared/ui/InfoModal/ui/InfoModal';
import { QualityModal } from '@/shared/ui/QualityModal/ui/QualityModal';
import { SponsorModal } from '@/shared/ui/SponsorModal/ui/SponsorModal';


export const Card = ({
  previewUrl, authorName, title,
  sponsorSegments, quality, setQuality,
  onlyAudio, setOnlyAudio, sponsorBlock,
  setSponsorBlock, children,
  truncateWords
}) => {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [isSponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [isQualityModalOpen, setQualityModalOpen] = useState(false);

  return (
    <section className={styles.block}>
      <h3 className={styles.hidden}>
        Результаты поиска
      </h3>
      <div className={styles.image_block}>
        <img src={previewUrl}
          alt="Картинка результата поиска"
          className={styles.image}
          draggable="false"
          loading='lazy' />
      </div>
      <div className={styles.result_block}>
        <h1 className={styles.title}>
          {truncateWords(title)}
        </h1>
        <p className={styles.author}>
          {truncateWords(authorName)}
        </p>
        <div
          className={styles.checkbox_block}>
          <input type="checkbox" name="sponsor"
            id="sponsor" className={styles.checkbox_sponsor}
            onClick={() => setSponsorBlock(!sponsorBlock)}
          />
          <p className={styles.sponsor_block_open_modal}
            onClick={() => setSponsorModalOpen(!isSponsorModalOpen)}>
            Sponsorblock
          </p>
          <button className={styles.open_modal_button}
            onMouseEnter={() => setInfoModalOpen(true)}
            onMouseLeave={() => setInfoModalOpen(false)}>
            i
          </button>
          {isInfoModalOpen && <InfoModal />}
          {isSponsorModalOpen && <SponsorModal data={sponsorSegments} />}
        </div>
        <div className={styles.button_place}>
          <div className={styles.main_buttons_block}>
            {children}
            <button className={styles.drop_list_button}
              onClick={() => setQualityModalOpen(!isQualityModalOpen)}>
              <img src={arrow}
                alt="Изображение стрелки выпадающего списка" />
            </button>
            {isQualityModalOpen && <QualityModal setQuality={setQuality}
              setQualityModalOpen={setQualityModalOpen} quality={quality}
            />}
          </div>
          <label htmlFor="audio"
            className={styles.audio_check_checkbox_place}>
            <input type="checkbox"
              name="audio" id="audio"
              className={styles.audio_check_checkbox}
              onClick={() => setOnlyAudio(!onlyAudio)} />
            Только звук
          </label>
        </div>
      </div>
    </section>
  );
}