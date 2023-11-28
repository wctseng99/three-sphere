import React from "react";
import Sphere from "./Components/Sphere/Sphere";
import { Canvas } from "@react-three/fiber";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <div className="bg-zinc-300">
        <Canvas
          style={{ position: "absolute", width: "100vw", height: "100vh" }}
        >
          <Sphere />
        </Canvas>
          <Home />
      </div>
    </>
  );
};

export default App;
