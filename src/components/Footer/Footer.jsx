import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <a href="#" className="footer__link" target="_blank">
                <img src="/gitLogo.svg" alt="Логотип GitHub" className="footer__git-logo" />
            </a>
            <a href="#" className="footer__link" target="_blank">
                <p className="footer__github-text">github</p>
            </a>
            <img src="/vkLogo.png" alt="Логотип Вконтакте" />
            <img src="/ytLogo.png" alt="Логотип YouTube" />
        </footer>
    );
}