import React from "react";
import Sphere from "./Components/Sphere/Sphere";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
      </Canvas>
    </>
  );
};

export default App;
