import React from "react";

function GreatOperationButton({calculette}) {
    
    return (
    <div>
        <button onClick={calculette} name="+">+</button>
        <button onClick={calculette} name="-">-</button>
        <button onClick={calculette} name="/">/</button>
        <button onClick={calculette} name="*">*</button>
    </div>
    );
}
export default GreatOperationButton;