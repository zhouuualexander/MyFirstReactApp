import React from "react"

function MainContent() {
    const name = "Alex"
    const date = new Date()
    const second = date.getSeconds()
    let around
    if (second<30){
        around = "first half of "
    }
    else if(second === 30){
        around = "half of "
    }
    else{
        around = "last half of "
    }
    return(
        <div>
            <h1 className="navbar">
                This is {name}'s first React App.
            </h1>
            <p className="minute">
                Now is {around + date.getSeconds()}
            </p>
        </div>
    )
}
export default MainContent