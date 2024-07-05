import './ResultPanel.css';

export default function ResultPanel() {
    return (
        <section className='result-section'>
            <h3 className="result-section__title--visually-hidden">
                Результаты поиска
            </h3>
            <div className="image-result">
                <img src="" alt="Картинка результата поиска" className='image-result__image' />
            </div>
            <div className="information-result">
                <h1 className="information-result__title">Тестовая запись</h1>
                <p className="information-result__author">Тестовый автор</p>
                <label htmlFor="sponsor" className="information-result__sponsor-checkbox">
                    <input type="checkbox" name="sponsor" id="sponsor" />
                    Sponsorblock
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
        </section>
    );
}