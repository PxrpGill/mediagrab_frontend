import styles from './Search.module.css';
import searchIcon from '@/shared/assets/images/search.svg'


export const Search = ({ onSearch }) => {
  const handleSumbit = async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;

    const response = await fetch(`http://37.128.205.70:8000/information?url=${query}`);
    const data = await response.json();

    onSearch(data);
  };


  return (
    <form onSubmit={handleSumbit} action="GET"
      className={styles.form}>
      <input type="text"
        name="query"
        className={styles.input_link}
        placeholder="Вставьте ссылку на видео" />
      <button type="submit"
        className={styles.submit_button}>
        <img src={searchIcon}
          alt="Иконка поиска"
          className={styles.searchIcon} />
      </button>
    </form>
  );
}