import { ResultContent } from "../model";

export const ResultPanel = ({ data }) => {
  return (
    <section className='result-section'>
      <h3 className="result-section__title--visually-hidden">
        Результаты поиска
      </h3>
      <ResultContent data={data} />
    </section>
  );
}