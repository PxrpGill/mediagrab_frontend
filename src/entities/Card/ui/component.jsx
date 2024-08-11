import { useState } from 'react';
import styles from './style.module.css';
import { observer } from 'mobx-react-lite';

import arrow from '@/shared/assets/images/arrow.svg';
import { InfoModal } from '@/shared/ui/InfoModal/ui/InfoModal';
import { InformationModal } from '../../../shared/ui/InformationModal';
import { QualityModal } from '@/shared/ui/QualityModal/ui/QualityModal';
import { SponsorModal } from '@/shared/ui/SponsorModal/ui/SponsorModal';
import { cardStore } from '../model/index';

export const Card = observer(
  ({
    previewUrl,
    authorName,
    title,
    sponsorSegments,
    quality,
    setQuality,
    onlyAudio,
    setOnlyAudio,
    sponsorBlock,
    setSponsorBlock,
    children,
    truncateWords,
    getFunctionalInformation,
  }) => {
    const { infoData } = cardStore;
    const [isInfoModalOpen, setInfoModalOpen] = useState(false);
    const [isInforamtionModalOpen, setInforamtionModalOpen] = useState(false);
    const [isSponsorModalOpen, setSponsorModalOpen] = useState(false);
    const [isQualityModalOpen, setQualityModalOpen] = useState(false);
    const [indexInfo, setIndexInfo] = useState(-1);

    const handleInfoClick = () => {
      getFunctionalInformation();
      console.log(infoData);
      setInfoModalOpen(!isInfoModalOpen);
    };

    return (
      <section className={styles.block}>
        <h3 className={styles.hidden}>Результаты поиска</h3>
        <div className={styles.image_block}>
          <img
            src={previewUrl}
            alt="Картинка результата поиска"
            className={styles.image}
            draggable="false"
            loading="lazy"
          />
        </div>
        <div className={styles.result_block}>
          <h1 className={styles.title}>{truncateWords(title)}</h1>
          <p className={styles.author}>{truncateWords(authorName)}</p>
          <div className={styles.func}>
            <div className={styles.checkbox_block}>
              <input
                type="checkbox"
                name="sponsor"
                id="sponsor"
                className={styles.checkbox_sponsor}
                onClick={() => setSponsorBlock(!sponsorBlock)}
              />
              <button
                className={styles.sponsor_block_open_modal}
                onClick={() => setSponsorModalOpen(!isSponsorModalOpen)}
              >
                Sponsorblock
              </button>
              {isSponsorModalOpen && <SponsorModal data={sponsorSegments} />}
            </div>
            <label
              htmlFor="audio"
              className={styles.audio_check_checkbox_place}
            >
              <input
                type="checkbox"
                name="audio"
                id="audio"
                className={styles.audio_check_checkbox}
                onClick={() => setOnlyAudio(!onlyAudio)}
              />
              Только звук
            </label>
          </div>
          <div className={styles.button_place}>
            <div className={styles.main_buttons_block}>
              {children}
              <button
                className={styles.drop_list_button}
                onClick={() => setQualityModalOpen(!isQualityModalOpen)}
              >
                <img src={arrow} alt="Изображение стрелки выпадающего списка" />
              </button>
              <button className={styles.info} onClick={handleInfoClick}>
                <svg
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.infoIcon}
                >
                  <g clipPath="url(#clip0_276_359)">
                    <path
                      className={styles.infoIcon}
                      d="M7.6234 12H8.9566V7.2H7.6234V12ZM8.2498 5.68C8.44993 5.68 8.6178 5.61353 8.7534 5.4806C8.88887 5.3478 8.9566 5.18313 8.9566 4.9866C8.9566 4.7826 8.88893 4.6116 8.7536 4.4736C8.61813 4.3356 8.45033 4.2666 8.2502 4.2666C8.05007 4.2666 7.8822 4.3356 7.7466 4.4736C7.61113 4.6116 7.5434 4.7826 7.5434 4.9866C7.5434 5.18313 7.61107 5.3478 7.7464 5.4806C7.88187 5.61353 8.04967 5.68 8.2498 5.68ZM8.2536 16C7.1492 16 6.1114 15.79 5.1402 15.37C4.169 14.95 3.32113 14.3778 2.5966 13.6534C1.8722 12.9289 1.3 12.0807 0.88 11.1088C0.46 10.1369 0.25 9.09847 0.25 7.9934C0.25 6.88833 0.46 5.8498 0.88 4.8778C1.3 3.90593 1.8722 3.06 2.5966 2.34C3.32113 1.62 4.16933 1.05 5.1412 0.63C6.11307 0.21 7.15153 0 8.2566 0C9.36167 0 10.4002 0.21 11.3722 0.63C12.3441 1.05 13.19 1.62 13.91 2.34C14.63 3.06 15.2 3.90667 15.62 4.88C16.04 5.85333 16.25 6.89213 16.25 7.9964C16.25 9.1008 16.04 10.1386 15.62 11.1098C15.2 12.081 14.63 12.928 13.91 13.6508C13.19 14.3736 12.3433 14.9459 11.37 15.3676C10.3967 15.7892 9.35787 16 8.2536 16ZM8.2566 14.6666C10.1099 14.6666 11.6833 14.0177 12.9766 12.72C14.2699 11.4223 14.9166 9.84673 14.9166 7.9934C14.9166 6.14007 14.2708 4.56673 12.9792 3.2734C11.6875 1.98007 10.1111 1.3334 8.25 1.3334C6.40107 1.3334 4.82773 1.9792 3.53 3.2708C2.23227 4.56253 1.5834 6.13893 1.5834 8C1.5834 9.84893 2.23227 11.4223 3.53 12.72C4.82773 14.0177 6.40327 14.6666 8.2566 14.6666Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_276_359">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              {isQualityModalOpen && (
                <QualityModal
                  setQuality={setQuality}
                  quality={quality}
                  setQualityModalOpen={setQualityModalOpen}
                  isQualityModalOpen={isQualityModalOpen}
                />
              )}
              {isInfoModalOpen && (
                <InfoModal
                  data={infoData}
                  setIndexInfo={setIndexInfo}
                  setInforamtionModalOpen={setInforamtionModalOpen}
                />
              )}
              {isInforamtionModalOpen && indexInfo != 1 && (
                <InformationModal indexInfo={indexInfo} data={infoData} />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  },
);
