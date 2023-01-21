import React from "react";

function Feature3() {
    return (<div class="feature">
        <div class="feature__details">
            <h3 class="feature__title">Watch everywhere.</h3>
            <h5 class="feature__sub__title">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
            </h5>
        </div>
        <div class="feature__image__container feature__3__image__container">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt="Feature" class="feature__image feature__3__image" />
            <div class="
    feature__backgroud__video__container
    feature__3__backgroud__video__container
">
                <video autoplay="" loop muted
                    class="feature__backgroud__video feature__3__backgroud__video">
                    <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                        type="video/mp4" />
                </video>
            </div>
        </div>
    </div>);
}

export default Feature3;