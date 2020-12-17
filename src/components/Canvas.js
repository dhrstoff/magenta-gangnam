import React from "react";
import { usePersistentCanvas } from "../hooks/hooks";

export default function Canvas() {
  const [locations, setLocations, canvasRef] = usePersistentCanvas();

  function handleCanvasClick(e) {
    // const message = await prompt("Please enter a message", "");
    const message = "hello!";
    setLocations([...locations, { x: e.clientX, y: e.clientY, message }]);
  }

  function handleClear() {
    setLocations([]);
  }

  function handleUndo() {
    setLocations(locations.slice(0, -1));
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        width="500"
        height="500"
        onClick={handleCanvasClick}
      />
      <div className="controls">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleUndo}>Undo</button>
      </div>
    </>
  );
}
