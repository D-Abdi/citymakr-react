import "./Field.css";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Block from "./Block/Block";
import TypeSelector from "../TypeSelector/TypeSelector";
import SelectedType from "../SelectedType/SelectedType";

const Field = ({socket}) => {
  const [blockArray, setBlockArray] = useState([]);
  const [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {
  }, [blockArray]);

  const addBlock = (event) => {
    const classArray = Object.values(event.target.classList);
    const baseIsPresent = Boolean(classArray.find(item => item === "base" || item === "text" || item === "flex"));
    if (!event.target.id && !baseIsPresent) {
      setBlockArray((prev) => [
        ...prev,
        { x: event.pageX, y: event.pageY, id: uniqid(), selected: false},
      ]);
    }
  };

  const removeBlock = (blockId) => {
    if (blockId) {
      setBlockArray(prev => prev.filter(item => item.id !== blockId))
    }
  }

  const subTypeSelectHandler = (position, id, icon, selected) => {
    setSelectedArray((prev) => [...prev, {x: position.x, y: position.y, id: id, icon: icon}])
    setBlockArray((prev) => prev.filter((x) => x.id !== id))
    socket.emit("place-event", {position: position, id: id, icon: icon})
  }

  return (
    <>
    <div className="App" onMouseDown={(event) => addBlock(event)}>
      {blockArray && blockArray.length > 0
        ? blockArray.map((data, index) => (
            <Block 
              id={data.id} 
              key={index} 
              x={data.x} 
              y={data.y}  
              selected={data.selected}
              remove={(blockId) => removeBlock(blockId)}
              selectSubType={(position, id, icon, selected) => subTypeSelectHandler(position, id, icon, selected)}
            />
          ))
        : null}
        {
          selectedArray.map((data, index) => (
            <SelectedType 
              id={data.id} 
              key={index} 
              x={data.x} 
              y={data.y}  
              icon={data.icon}
              selected={data.selected}
            />
          ))
        }
    </div>
  </>
  );
};

export default Field;
