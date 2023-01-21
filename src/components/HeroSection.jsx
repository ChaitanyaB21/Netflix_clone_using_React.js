import React from "react";

function HeroSection() {
    return (
        <section class="hero">
            <div class="hero__bg__image__container">
                <img src="./images/header-image.png"
                    alt="BG hero " class="hero__bg__image" />
            </div>
            <div class="hero__bg__overlay"></div>

            <div class="hero__card">
                <div class="hero__card1">
                    <h1 class="hero__title">
                        Unlimited movies ,TV
                    </h1>
                </div>
                <div class="hero__card2" >
                    <h1 class="hero__title">
                        shows and more.
                    </h1>
                </div>
                <div class="hero__card3" >
                    <p class="hero__subtitle">Watch anywhere. Cancel anytime.</p></div>
                <div class="hero__card4" >
                <p class="hero__description">
                    Ready to watch? Enter your email to create or restart your membership.
                </p></div>

                <div class="email__form__container">
                    <div class="form__container">
                        <input type="email" class="email__input" placeholder=" " />
                        <label class="email__label">Email Address</label>
                    </div>
                    <a href="home.html"><button class="primary__button">
                        Get Started <i class="fal fa-chevron-right"></i>
                    </button>
                    </a>
                </div>
            </div>
        </section>);
}

export default HeroSection;