import { useState } from 'react';
import { InfoModal } from '@/shared/ui/InfoModal';
import styles from './ResultContent.module.css';
import arrow from '@/shared/assets/images/arrow.svg';
import { QualityModal } from '@/shared/ui/QualityModal/ui/QualityModal';
import { SponsorModal } from '@/shared/ui/SponsorModal';


export const ResultContent = ({ data, link, setLoading }) => {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [isQualityModalOpen, setQualityModalOpen] = useState(false);
  const [isSponsorModalOpen, setSponsorModalOpen] = useState(false);

  const [quality, setQuality] = useState('high');
  const [isAudio, setAudio] = useState(false);
  const [isSponsorblock, setSponsorBlock] = useState(false);

  const openInfoModal = () => {
    setInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
  };

  const openQualityModal = () => {
    setQualityModalOpen(!isQualityModalOpen);
  }

  const truncateToTwoWords = (str) => {
    if (!str) return 'Произошла ошибка';
    const words = str.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...';
    }
    return str;
  };

  const downloadResource = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `http://37.128.205.70:8000/video_audio?url=${link}&quality=${quality}&only_audio=${isAudio}&sponsor_block=${isSponsorblock}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = downloadUrl;

      const contentDisposition = response.headers.get('content-disposition');
      let filename = 'downloaded_file';

      if (contentDisposition && contentDisposition.indexOf('filename=') !== -1) {
        filename = contentDisposition.split('filename=')[1].replace(/['"]/g, '');
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType.includes('video')) {
          filename += '.mp4';
        } else if (contentType.includes('audio')) {
          filename += '.mp3';
        }
      }

      downloadLink.setAttribute('download', filename);

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className={styles.image_block}>
        <img src={data ? data.preview_url : '#'}
          alt="Картинка результата поиска"
          className={styles.image}
          draggable="false"
          loading='lazy' />
      </div>
      <div className={styles.result_block}>
        <h1 className={styles.title}>
          {data ? truncateToTwoWords(data.title) : 'Произошла ошибка'}
        </h1>
        <p className={styles.author}>
          {data ? truncateToTwoWords(data.author_name) : 'Произошла ошибка'}
        </p>
        <div
          className={styles.checkbox_block}>
          <input type="checkbox" name="sponsor"
            id="sponsor" className={styles.checkbox_sponsor}
            onClick={() => setSponsorBlock(!isSponsorblock)}
          />
          <p className={styles.sponsor_block_open_modal}
            onClick={() => setSponsorModalOpen(!isSponsorModalOpen)}>
            Sponsorblock
          </p>
          <button className={styles.open_modal_button}
            onMouseEnter={openInfoModal}
            onMouseLeave={closeInfoModal}>
            i
          </button>
          {isInfoModalOpen && <InfoModal />}
          {isSponsorModalOpen && <SponsorModal data={data.sponsor_segments} />}
        </div>
        <div className={styles.button_place}>
          <div className={styles.main_buttons_block}>
            <button type="button"
              className={styles.download_button}
              onClick={downloadResource}>
              Скачать
            </button>
            <button className={styles.drop_list_button}
              onClick={openQualityModal}>
              <img src={arrow}
                alt="Изображение стрелки выпадающего списка" />
            </button>
            {isQualityModalOpen && <QualityModal setQuality={setQuality}
              setQualityModalOpen={setQualityModalOpen}
              quality={quality} />}
          </div>
          <label htmlFor="audio"
            className={styles.audio_check_checkbox_place}>
            <input type="checkbox"
              name="audio" id="audio"
              className={styles.audio_check_checkbox}
              onClick={() => setAudio(!isAudio)} />
            Только звук
          </label>
        </div>
      </div>
    </>
  )
}
