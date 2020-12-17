import { useState, useEffect, useRef } from "react";

const HOOK_SVG = "M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0";
const HOOK_PATH = new Path2D(HOOK_SVG);
const SCALE = 0.2;
const OFFSET = 0;

// TODO fix offset
export function draw(ctx, location) {
  if (location) {
    ctx.fillStyle = "blue";
    ctx.save();
    ctx.scale(SCALE, SCALE);
    ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
    ctx.fill(HOOK_PATH);
    ctx.restore();
  }
}

export function usePersistentState(init) {
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem("draw-app")) || init
  );

  useEffect(() => {
    localStorage.setItem("draw-app", JSON.stringify(locations));
  });

  return [locations, setLocations];
}

export function usePersistentCanvas() {
  const [locations, setLocations] = usePersistentState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    locations.forEach((location) => draw(ctx, location));

    if (locations.length) {
        const lastAdded = locations.slice(-1)[0];
        const firstAdded = locations[0];
        const proximityArray = getDistance(firstAdded, lastAdded)
        console.log(proximityArray);
      }
  });

  return [locations, setLocations, canvasRef];
}

function getDistance(point1, point2) {
    const a = point1.x - point2.x;
    const b = point1.y - point2.y;
    return Math.sqrt(a * a + b * b);
}