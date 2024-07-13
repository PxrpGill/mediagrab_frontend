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
      className="search-form">
      <input type="text"
        name="query"
        className="search-form__input-link-place"
        placeholder="Вставьте ссылку на видео" />
      <button type="submit"
        className="search-form__submit-button">
        <img src="/images/search.svg"
          alt="Иконка поиска"
          className="search-form__sumbit-button-icon" />
      </button>
    </form>
  );
}