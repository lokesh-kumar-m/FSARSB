import React from "react";

const Button=({onClickEvent,children})=>{
    return(
        <>
            <button className="counterButton" onClick={onClickEvent}>{children}</button>
        </>
    );
}

export default Button;