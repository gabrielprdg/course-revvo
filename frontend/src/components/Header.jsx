import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        {/* Placeholder logo */}
        <span className="logo-icon">🏢</span>
      </div>
      <div className="header__right">
        <input
          className="header__search"
          type="text"
          placeholder="Pesquisar..."
        />
        <div className="header__user">
          <div className="header__welcome">Bem-vindo, Gabriel</div>
          <img
            className="header__avatar"
            src="https://i.pravatar.cc/40?img=3"
            alt="Avatar do usuário"
          />
        </div>
      </div>
    </header>
  );
}

export default Header; 