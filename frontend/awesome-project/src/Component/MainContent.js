import React from "react"
import Clock from 'react-digital-clock';
function MainContent() {
    const name = "Alex"

    return(
        <div>
            <h1 className="navbar">
                This is {name}'s first React App.
            </h1>
            <p className="minute">
                Now is <Clock/>
            </p>
        </div>
    )
}
export default MainContent