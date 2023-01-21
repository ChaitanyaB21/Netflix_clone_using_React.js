import React from "react";

function Header() {
    return (
    <header>
        <nav class="navbar">
            <div class="navbar__brand">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" class="brand__logo" />
            </div>

            <div class="navbar__nav__items">
                <div class="nav__item">
                    <div class="dropdown__container">
                        <i class="fas fa-globe"></i>
                        <select name="languages" id="languagesSelect" class="language__drop__down">
                            <option value="english" selected>English</option>
                            <option value="hindi">हिन्दी</option>
                        </select>
                    </div>
                </div>

                <div class="nav__item">
                    <a href="home.html"><button class="signin__button">Sign in</button></a>
                </div>
            </div>
        </nav>
    </header>);
}

export default Header;