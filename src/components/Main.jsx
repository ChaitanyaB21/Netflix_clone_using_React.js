import React from "react";
import Faq from "./Faq";
import HeroSection from "./HeroSection";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";

function Main() {
    return (<div>
        <main>
            <HeroSection />
            <section class="features__container">
                {/* <!-- Feature 1 --> */}
                <Feature1/>
                {/* <!-- Feature 2 --> */}
                <Feature2/>
                {/* <!-- Feature 3 --> */}
                <Feature3/>
                {/* <!-- Feature 4 --> */}
                <Feature4/>
            </section>
            <Faq />
        </main>
    </div>);
}

export default Main;