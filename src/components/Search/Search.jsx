export default function Search() {
    return (
        <form action="GET" className="search-form">
            <input type="text" className="search-form__input-link-place" placeholder="Вставьте ссылку на видео"/>
            <button type="submit" className="search-form__submit-button">
                <img src="/images/search.svg" alt="Иконка поиска" className="search-form__sumbit-button-icon" />
            </button>
        </form>
    );
}