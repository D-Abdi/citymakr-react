import "./Field.css";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Block from "./Block/Block";

const Field = () => {
  const [blockArray, setBlockArray] = useState([]);

  useEffect(() => {
    console.log(blockArray, "Block array")
  }, [blockArray]);

  const addBlock = (event) => {
    const classArray = Object.values(event.target.classList);
    console.log(classArray);
    console.log(event.target.id, "ID");
    const baseIsPresent = Boolean(classArray.find(item => item === "base" || item === "text" || item === "flex"));
    if (!event.target.id && !baseIsPresent) {
      setBlockArray((prev) => [
        ...prev,
        { x: event.pageX, y: event.pageY, id: uniqid() },
      ]);
    }
  };

  const removeBlock = (blockId) => {
    if (blockId) {
      setBlockArray(prev => prev.filter(item => item.id !== blockId))
    }
  }

  const subTypeSelectHandler = (position, id, icon) => {
    
  }

  return (
    <div className="App" onMouseDown={(event) => addBlock(event)}>
      {blockArray && blockArray.length > 0
        ? blockArray.map((data, index) => (
            <Block 
              id={data.id} 
              key={index} 
              x={data.x} 
              y={data.y} 
              remove={(blockId) => removeBlock(blockId)}
              select={(position, id, icon) => subTypeSelectHandler(position, id, icon)}
            />
          ))
        : null}
    </div>
  );
};

export default Field;
