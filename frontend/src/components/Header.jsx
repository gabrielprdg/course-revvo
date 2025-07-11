import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">LEO</div>
      <div className="header__right">
        <div className="header__search-container">
          <input
            className="header__search"
            type="text"
            placeholder="Pesquisar cursos..."
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
    </header>
  );
}

export default Header; 