import { useState } from 'react';
import { InfoModal } from '@/shared/ui/InfoModal';


export const ResultContent = ({ data }) => {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const openInfoModal = () => {
    setInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
  };

  return (
    <article>
      <div className="image-result">
        <img src={data ? data.preview_url : '#'} alt="Картинка результата поиска"
          className='image-result__image' />
      </div>
      <div className="information-result">
        <h1 className="information-result__title">
          {data ? data.title : ''}
        </h1>
        <p className="information-result__author">
          {data ? data.author_name : ''}
        </p>
        <label htmlFor="sponsor"
          className="information-result__sponsor-checkbox">
          <input type="checkbox" name="sponsor" id="sponsor" />
          Sponsorblock
          <button className="information-result__info"
            onMouseEnter={openInfoModal}
            onMouseLeave={closeInfoModal}>
            i
          </button>
          {isInfoModalOpen && <InfoModal />}
        </label>
        <div className="information-result__download">
          <div className="information-result__download-button-place">
            <button type="button"
              className="information-result__download-button">
              Скачать
            </button>
            <button className="information-result__drop-list">
              <img src="/images/arrow.svg"
                alt="Изображение стрелки выпадающего списка" />
            </button>
          </div>
          <label htmlFor="audio"
            className="information-result__audio-check">
            <input type="checkbox"
              name="audio" id="audio"
              className="information-result__checkbox" />
            Только звук
          </label>
        </div>
      </div>
    </article>
  )
}
