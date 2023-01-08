import "./Sub.css";
import React, { useEffect } from "react";

export const Sub = ({position, id, icon, subTypeEvent}) => {
    console.log(icon);
    useEffect(() => {
    }, [id, position])

    const emitSubTypeEvent = () => {
      subTypeEvent(position, id, icon)
    } 

    return (
       <div className={position === 1 ? 'sub s2 ' + icon : 'sub ' + icon} id={id} onClick={() => emitSubTypeEvent()}
       ></div>
    )
}