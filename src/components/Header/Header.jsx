import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a className="header__logo" href="#">Stock Center</a>
        <p className="header__text">Items in stock</p>
        <div className="header__burger burger">
          <div className="burger__line_1"></div>
          <div className="burger__line_2"></div>
          <div className="burger__line_3"></div>
        </div>
      </nav>
    </header>
  )
}

export default Header;