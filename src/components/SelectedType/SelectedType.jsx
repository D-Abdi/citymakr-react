import React, { useEffect } from "react";
import "./SelectedType.css"

const SelectedType = ({icon, id, x, y}) => {
    useEffect(() => {
        console.log(id);
        console.log(icon);
        console.log(x, "X");
        console.log(y, "Y");
    }, [x, y, icon, id])

    return (
        <div 
        className={'selected ' + icon} 
        style={{left: x, top: y,}}
        id={id} 
        ></div>
    )
}

export default SelectedType