import React from "react";
// import content from "./faqContent";

function Content(props) {
    return (
        <div class="FAQ__accordian">
            <button class="FAQ__title">
                {props.FAQ__title}<i class="fal fa-plus"></i>
            </button>
            <div class="FAQ__visible">
                <p>
                    {props.FAQ__visible1}
                </p>
                <p>
                    {props.FAQ__visible2}
                </p>
            </div>
        </div>
    )
}

export default Content;