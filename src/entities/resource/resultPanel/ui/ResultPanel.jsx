export function ResultPanel() {
  return (
    <section className='result-section'>
      <h3 className="result-section__title--visually-hidden">
        Результаты поиска
      </h3>
      <div className="image-result">
        <img src="" alt="Картинка результата поиска" className='image-result__image' />
      </div>
      <ResultContent />
    </section>
  );
}