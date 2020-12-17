import React from "react";
import { usePersistentCanvas } from "../hooks/hooks";

export default function Canvas() {
  const [locations, setLocations, canvasRef] = usePersistentCanvas();

  function handleCanvasClick(e) {
    setLocations([...locations, { x: e.clientX, y: e.clientY }]);
  }

  function handleClear() {
    setLocations([]);
  }

  function handleUndo() {
    setLocations(locations.slice(0, -1));
  }

  return (
    <canvas
      ref={canvasRef}
      width="500"
      height="500"
      onClick={handleCanvasClick}
    />
  );
}
