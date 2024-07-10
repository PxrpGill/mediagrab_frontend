import React, { useState } from 'react';

import './ResultContent.css';

const InfoModal = () => {
    return (
        <dialog className="inforamtion-sponsor" open>
            <article className="information-sponsor__content">
                <p className="information-sponsor__main-information">
                    Sponsorblock - это функция, которая
                    автоматически удаляет из ролика
                    спонсорские сегменты (интеграции).
                    Позволяет наслаждаться видео без
                    отвлекающих частей.
                </p>
                <h2 className="information-sponsor__title">Только YouTube</h2>
            </article>
        </dialog>
    );
};

export default function ResultContent() {
    const [isInfoModalOpen, setInfoModalOpen] = useState(false);

    const openInfoModal = () => {
        setInfoModalOpen(true);
    };

    const closeInfoModal = () => {
        setInfoModalOpen(false);
    };

    return (
        <div className="information-result">
            <h1 className="information-result__title">Тестовая запись</h1>
            <p className="information-result__author">Тестовый автор</p>
            <label htmlFor="sponsor" className="information-result__sponsor-checkbox">
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
                    <button type="button" className="information-result__download-button">
                        Скачать
                    </button>
                    <button className="information-result__drop-list">
                        <img src="/images/arrow.svg" alt="Изображение стрелки выпадающего списка" />
                    </button>
                </div>
                <label htmlFor="audio" className="information-result__audio-check">
                    <input type="checkbox" name="audio" id="audio" className="information-result__checkbox" />
                    Только звук
                </label>
            </div>
        </div>
    )
}
