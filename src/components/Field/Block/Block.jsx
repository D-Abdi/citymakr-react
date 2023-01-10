import "./Block.css"
import React, { useEffect, useState } from 'react';
import uniqid from "uniqid";
import { Sub } from "./Sub/Sub";
import SelectedType from "../../SelectedType/SelectedType";

const Block = ({id, x, y, remove, selectSubType, selected}) => {
    const [rotation, setRotation] = useState(0);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        console.log(id, "ID");
        const block = document.getElementById(id)
        block.style.left = x + "px";
        block.style.top = y + "px";
    }, [remove, x, y, id])

    const removeBlock = () => {
        remove(id)
    }

    const subTypeEventHandler = (id, icon) => {
        selected = true
        setIcon(icon)
        selectSubType({x, y}, id, icon, selected)
    }

    const rotateBlock = (newRotation) => {
        setRotation(newRotation)
        const block = document.getElementById(id);
        const circle = document.getElementById(`c-${id}`);
        block.style.transform = `rotate(${newRotation}deg)`
        circle.style.transform = `rotate(${-newRotation}deg)`
    }

    return (
        <>
            <div className="block" id={id}>
                <div className="arrow" style={{color: "black"}}></div>
                <div className="base" onClick={() => removeBlock()}></div>
                <div className="circle-container" id={`c-${id}`}>
                    <ul className="circle">
                        <li><div className="text" style={rotation === 0 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(0)}>1</div></li>
                        <li><div className="text" style={rotation === 30 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(30)}>2</div></li>
                        <li><div className="text" style={rotation === 60 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(60)}>3</div></li>
                        <li><div className="text" style={rotation === 90 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(90)}>4</div></li>
                        <li><div className="text" style={rotation === 120 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(120)}>5</div></li>
                        <li><div className="text" style={rotation === 150 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(150)}>6</div></li>
                        <li><div className="text" style={rotation === 180 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(180)}>7</div></li>
                        <li><div className="text" style={rotation === 210 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(210)}>8</div></li>
                        <li><div className="text" style={rotation === 240 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(240)}>9</div></li>
                        <li><div className="text" style={rotation === 270 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(270)}>10</div></li>
                        <li><div className="text" style={rotation === 300 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(300)}>11</div></li>
                        <li><div className="text" style={rotation === 330 ? {backgroundColor: 'red'} :  {backgroundColor: '#e8e8f3'}} onClick={() => rotateBlock(330)}>12</div></li>
                    </ul>
                </div>
                <div className="sub-container flex justify-between">
                <Sub position={0} id={id} icon={"tree"} subTypeEvent={(id, icon) => subTypeEventHandler(id, icon)}/>
                <Sub position={1} id={id} icon={"building"} subTypeEvent={(id, icon) => subTypeEventHandler(id, icon)}/>
                <Sub position={2} id={id} icon={"road"} subTypeEvent={(id, icon) => subTypeEventHandler(id, icon)}/>
                </div>
            </div>
        </>
    )
}

export default Block;