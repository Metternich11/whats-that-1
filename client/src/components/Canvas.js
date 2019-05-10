import React from "react";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let trace = [];
let tracePairX = [];
let tracePairY = [];
let timestamp = [];

// NOTE TO SELF THIS NEEDS TO BE A CALL TO THE BACKEND
const postDrawing = () => null;

const Canvas = () => {
  const [locations, setLocations] = React.useState([]);
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const draw = e => {
      if (!isDrawing) return;
      ctx.strokeStyle = "#fff";
      ctx.linecap = "round";
      tracePairX.push(e.x);
      tracePairY.push(e.y);
      timestamp.push(e.timeStamp);

      ctx.beginPath();

      ctx.moveTo(lastX, lastY);

      ctx.lineTo(e.offsetX, e.offsetY);

      ctx.stroke();
      lastX = e.offsetX;
      lastY = e.offsetY;
    };

    canvas.addEventListener("mousedown", e => {
      isDrawing = true;
      lastX = e.offsetX;
      lastY = e.offsetY;
    });

    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("mouseup", () => {
      isDrawing = false;

      let tracePairXY = [];
      tracePairXY.push(tracePairX);
      tracePairXY.push(tracePairY);
      tracePairXY.push(timestamp);
      trace.push(tracePairXY);

      postDrawing();

      tracePairX = [];
      tracePairY = [];
      timestamp = [];
      tracePairXY = [];
    });

    canvas.addEventListener("mouseout", () => {
      isDrawing = false;
    });

    ctx.lineWidth = 5;
  });

  const handleCanvasClick = e => {
    // console.log(e.clientX, e.clientY, e.timeStamp);
    const newLocation = { x: e.clientX, y: e.clientY };
    setLocations([...locations, newLocation]);
  };

  return (
    <canvas
      ref={canvasRef}
      width="400px"
      height="400px"
      onClick={handleCanvasClick}
      style={{ border: "1px solid cyan" }}
    />
  );
};

export default Canvas;
