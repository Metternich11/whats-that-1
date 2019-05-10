import React from "react";

let isDrawing = false;
let lastXCoordinate = 0;
let lastYCoordinate = 0;
let drawing = [];
let xCoordinate = [];
let yCoordinate = [];
let timestamp = [];
let zorbThinksYouAreDrawing = "";

const googleURL =
  // NOTE TO SELF THIS NEEDS TO BE A CALL TO THE BACKEND
  "https://inputtools.google.com/request?ime=handwriting&app=quickdraw&dbg=1&cs=1&oe=UTF-8";

const postDrawing = () => {
  fetch(googleURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      options: "enable_pre_space",
      requests: [
        {
          writing_guide: {
            writing_area_width: 400,
            writing_area_height: 400
          },
          ink: drawing,
          language: "quickdraw"
        }
      ]
    })
  })
    .then(res => res.json())
    .then(data => (zorbThinksYouAreDrawing = data[1][0][1][0]))
    .catch(err => console.error(err)); // eslint-disable-line no-console
};

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
      xCoordinate.push(e.x);
      yCoordinate.push(e.y);
      timestamp.push(e.timeStamp);

      ctx.beginPath();

      ctx.moveTo(lastXCoordinate, lastYCoordinate);

      ctx.lineTo(e.offsetX, e.offsetY);

      ctx.stroke();
      lastXCoordinate = e.offsetX;
      lastYCoordinate = e.offsetY;
    };

    canvas.addEventListener("mousedown", e => {
      isDrawing = true;
      lastXCoordinate = e.offsetX;
      lastYCoordinate = e.offsetY;
    });

    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("mouseup", () => {
      isDrawing = false;

      let xyCoordinates = [xCoordinate, yCoordinate, timestamp];
      drawing.push(xyCoordinates);

      postDrawing(drawing);

      xCoordinate = yCoordinate = timestamp = xyCoordinates = [];
    });

    canvas.addEventListener("mouseout", () => {
      isDrawing = false;
    });

    ctx.lineWidth = 5;
  });

  const handleCanvasClick = e => {
    const newLocation = { x: e.clientX, y: e.clientY };
    setLocations([...locations, newLocation]);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width="400px"
        height="400px"
        onClick={handleCanvasClick}
        style={{ border: "1px solid rgba(255,255,255,0.2)" }}
      />
      <h2>{zorbThinksYouAreDrawing}</h2>
    </>
  );
};

export default Canvas;
