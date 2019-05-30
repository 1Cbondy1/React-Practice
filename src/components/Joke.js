import React from "react";

function Joke(props) {

    const textStyle = {color: "red"};

    return (
        <div>
            <p style={textStyle}>Question: {props.question}</p>
            <p style={textStyle}>Answer: {props.answer}</p>
            <hr />
        </div>
    )
}

export default Joke;
