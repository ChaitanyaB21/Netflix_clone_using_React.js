import React from "react";

function Feature1() {
    return (
        <div class="feature">
            <div class="feature__details">
                <h3 class="feature__title">Enjoy on your TV.</h3>
                <h5 class="feature__sub__title">
                    Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                    Blu-ray players and more.
                </h5>
            </div>
            <div class="feature__image__container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                    alt="Feature " class="feature__image" />
                <div class="feature__backgroud__video__container">
                    <video autoplay='' loop muted class="feature__backgroud__video">
                        <source
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                            type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Feature1;