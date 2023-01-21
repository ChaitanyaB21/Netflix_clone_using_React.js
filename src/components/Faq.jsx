import React from "react";
import Content from "./Content";
import content from "./faqContent";

function createCard(items) {
    return (<Content
        key={items.id}
        FAQ__title={items.FAQ__title}
        FAQ__visible1={items.FAQ__visible1}
        FAQ__visible2={items.FAQ__visible2}
    />);
}

function Faq() {
    return (
        <section class="FAQ__list__container">
            <h1 class="FAQ__heading">Frequently Asked Questions</h1>
            <div class="FAQ__list">
                {content.map(createCard)}
            </div>
            <div class="FAQ__get__started__email">
                <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </h3>
                <div class="email__form__container">
                    <div class="form__container">
                        <input type="email" class="email__input" placeholder=" " />
                        <label class="email__label">Email Address</label>
                    </div>
                    <a href="index.html"><button class="primary__button">
                        Get Started <i class="fal fa-chevron-right"></i>
                    </button></a>
                </div>
            </div>
        </section>
    )
}

export default Faq;