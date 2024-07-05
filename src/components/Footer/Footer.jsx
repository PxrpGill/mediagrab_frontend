import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <a href="#" className="footer__link" target="_blank">
                <img src="/images/gitLogo.svg" alt="Логотип GitHub" className="footer__git-logo" />
            </a>
            <a href="#" className="footer__link" target="_blank">
                <p className="footer__github-text">github</p>
            </a>
            <img src="/images/vkLogo.png" alt="Логотип Вконтакте" className="footer__vk-logo"/>
            <img src="/images/ytLogo.png" alt="Логотип YouTube" className='footer__yt-logo'/>
        </footer>
    );
}