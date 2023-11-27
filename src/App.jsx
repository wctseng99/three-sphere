import React from "react";
import Sphere from "./Components/Sphere/Sphere";
import { Canvas } from "@react-three/fiber";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <Canvas style={{ position: "absolute", width: "100vw", height: "100vh" }}>
        <Sphere />
      </Canvas>
      <div className="flex items-center justify-center h-screen">
        <Home />
      </div>
    </>
  );
};

export default App;
