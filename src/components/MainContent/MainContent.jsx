import './MainContent.css';

import Search from '../Search/Search';
import ResultPanel from '../ResultPanel/ResultPanel';

export default function MainContent() {
    return (
        <main className="main">
            <div className="main__container">
                <Search />
                <ResultPanel />
            </div>
        </main>
    )
}