import React from "react";
import "./Header.scss";

function Header({ search, setSearch }) {
  return (
    <header className="header">
      {/* Desktop layout */}
      <div className="header__desktop desktop-only">
        <div className="header__logo">LEO</div>
        <div className="header__right">
          <div className="header__search-container">
            <input
              id="header-search-desktop"
              name="header-search-desktop"
              className="header__search"
              type="text"
              placeholder="Pesquisar cursos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="header__search-icon">🔍</span>
          </div>
          <div className="header__user">
            <img
              className="header__avatar"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Avatar do usuário"
            />
            <div className="header__welcome">
              <span>Seja bem-vindo</span>
              <strong>John Doe</strong>
            </div>
            <span className="header__dropdown">▼</span>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="header__mobile mobile-only">
        <div className="header__top">
          <div className="header__logo">LEO</div>
          <div className="header__user">
            <img
              className="header__avatar"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Avatar do usuário"
            />
            <div className="header__welcome">
              <span>Seja bem-vindo</span>
              <strong>John Doe</strong>
            </div>
            <span className="header__dropdown">▼</span>
          </div>
        </div>
        <div className="header__search-container">
          <input
            id="header-search"
            name="header-search"
            className="header__search"
            type="text"
            placeholder="Pesquisar cursos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <span className="header__search-icon">🔍</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
