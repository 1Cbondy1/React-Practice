import React from "react";

function Joke(props) {

    return (
        <div>
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            <p>Answer: {props.answer}</p>
            <hr />
        </div>
    )
}

export default Joke;
