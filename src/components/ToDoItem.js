import React from "react";

function ToDoItem() {

    const textStyle = {color: "red"};

    return (
        <div>
            <p>
                <input type="checkbox" />
                <span style={textStyle}>  Placeholder text here.</span>
            </p>
        </div>
    )
}

export default ToDoItem;
