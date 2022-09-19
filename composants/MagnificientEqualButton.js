import React from "react";

// j'appelle ma props dans Calculator.js
function MagnificientEqualButton({resultat}) { 
    return (
    <div>
        <button onClick={resultat} name="=">=</button>
    </div>
    );
}
export default MagnificientEqualButton;