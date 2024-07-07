import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <img src="/images/multiLogo.png" alt="Логотип Multigrab" className="header__logo multi-logo" draggable="false" />
            <h1 className="header__title">MultiGrab</h1>
        </header>
    )
}