import React from "react";

// import Navbar from "./components/Navbar";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
// import ToDoItem from "./components/ToDoItem";
import Joke from "./components/Joke";

function App() {


    return (
        <div>
            <Joke question="This is the 1st question?" answer="This is the 1st answer" />
            <Joke question="This is the 2nd question?" answer="This is the 2nd answer" />
            <Joke question="This is the 3rd question?" answer="This is the 3rd answer" />
            <Joke question="This is the 4th question?" answer="This is the 4th answer" />
            <Joke question="This is the 5th question?" answer="This is the 5th answer" />
        </div>
    )
}

export default App;
