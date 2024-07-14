import styles from './Search.module.css';
import searchIcon from '@/shared/assets/images/search.svg'
import { useState } from 'react';


export const Search = ({ onSearch, setLink, setLinkState, isLink }) => {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const handleSumbit = async (event) => {
    try {
      setLinkState(false);
      setLoading(true);
      event.preventDefault();
      const query = event.target.elements.query.value;
      setLink(query);

      const response = await fetch(`http://37.128.205.70:8000/information?url=${query}`);
      const data = await response.json();

      onSearch(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLinkState(true);
    }
  };

  const clearForm = (event) => {
    event.preventDefault();
    setQuery('');
    setLinkState(false);
  }

  return (
    <form onSubmit={isLink ? clearForm : handleSumbit} action="GET"
      className={styles.form}>
      <input type="text"
        name="query"
        className={isLink || isLoading ? styles.inputed : styles.input_link}
        placeholder="Вставьте ссылку на видео"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        disabled={isLink || isLoading} />
      <button type="submit"
        className={styles.submit_button}>
        {isLoading ? (
          <svg width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.loader}>
            <path d="M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 
            19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.2625 
            9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 
            8.125 2.7875C9.34167 2.2625 10.6333 2 12 2C12.2833 2 12.5208 2.09583 12.7125 2.2875C12.9042 2.47917 
            13 2.71667 13 3C13 3.28333 12.9042 3.52083 12.7125 3.7125C12.5208 3.90417 12.2833 4 12 4C9.78333 
            4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 
            17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 
            20 14.2167 20 12C20 11.7167 20.0958 11.4792 20.2875 11.2875C20.4792 11.0958 20.7167 11 21 11C21.2833 
            11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 13.3667 21.7375 14.6583 21.2125 
            15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 
            21.2125C14.6792 21.7375 13.3833 22 12 22Z" fill="#D5D4DA" />
          </svg>
        ) : (
          isLink ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cross}>
              <path d="M2.2 22L0 19.8L8.8 11L0 2.2L2.2 0L11 8.8L19.8 0L22 2.2L13.2 11L22 19.8L19.8 22L11 13.2L2.2 22Z" fill="#D7D6DC" />
            </svg>
          ) : (
            <img src={searchIcon}
              alt="Иконка поиска"
              className={styles.searchIcon} />
          )
        )}
      </button>
    </form>
  );
}