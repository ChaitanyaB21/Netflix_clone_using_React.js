import React from "react";

function Feature2() {
    return (
        <div class="feature">
            <div class="feature__details">
                <h3 class="feature__title">
                    Download your shows to watch offline.
                </h3>
                <h5 class="feature__sub__title">
                    Save your favourites easily and always have something to watch.
                </h5>
            </div>
            <div class="feature__image__container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                    alt="Feature" class="feature__image" />
                <div class="feature__2__poster__container">
                    <div class="poster__container">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                            alt="poster" class="poster" />
                    </div>
                    <div class="poster__details">
                        <h4>Stranger Things</h4>
                        <h6>Downloading...</h6>
                    </div>
                    <div class="download__gif__container">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                            alt="downloading gif" class="gif" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature2;