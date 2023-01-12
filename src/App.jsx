import io from "socket.io-client";

import React, { useState, useEffect } from "react";
import Field from "./components/Field/Field";

const socket = io("https://citymakrserver.fly.dev/");

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [socketID, setSockedId] = useState(socket.id);

  useEffect(() => {
    

    socket.on("connect", () => {
      console.log("BLABLALB");
      setIsConnected(true);
      setSockedId(socket.id)
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      setSockedId(null);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);


  return (
    <div>
      <p></p>
      <Field socket={socket} />
    </div>
  );
};

export default App;
