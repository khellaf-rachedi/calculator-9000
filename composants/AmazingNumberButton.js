import React from "react";

let i = 0;

function AmazingNumberButton({calculette}) {
    return (
    <div>
    <h1>
        {/* {props.nombreName} */}
        <button onClick={calculette} name="1">1</button>
        <button onClick={calculette} name="2">2</button>
        <button onClick={calculette} name="3">3</button>
        <button onClick={calculette} name="4">4</button>
        <button onClick={calculette} name="5">5</button>
        <button onClick={calculette} name="6">6</button>
        <button onClick={calculette} name="7">7</button>
        <button onClick={calculette} name="8">8</button>
        <button onClick={calculette} name="9">9</button>
        <button onClick={calculette} name="0">0</button>
    </h1>
    </div>
    );
}
export default AmazingNumberButton;