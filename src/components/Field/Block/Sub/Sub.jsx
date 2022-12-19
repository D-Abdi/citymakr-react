import "./Sub.css";
import React, { useEffect } from "react";

export const Sub = ({position, id}) => {
    useEffect(() => {
        const sub = document.getElementById(id);
        sub.style.backgroundImage = `background: url("https://bassets.github.io/cam.svg") no-repeat 50%/50% #e8e8f3;`
    }, [])

    return (
        <div className={position === 1 ? 'sub s2' : 'sub'}></div>
    )
}