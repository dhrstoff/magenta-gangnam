import React, { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    ctx.font = "16px Arial";

    canvas.addEventListener("mousemove", function (e) {
      var cRect = canvas.getBoundingClientRect(); // Gets the CSS positions along with width/height
      var canvasX = Math.round(e.clientX - cRect.left); // Subtract the 'left' of the canvas from the X/Y
      var canvasY = Math.round(e.clientY - cRect.top); // positions to get make (0,0) the top left of the
      ctx.clearRect(0, 0, canvas.width, canvas.height); // canvas
      ctx.fillText("X: " + canvasX + ", Y: " + canvasY, 10, 20);
    });
  });

  return <canvas ref={canvasRef}></canvas>;
}
