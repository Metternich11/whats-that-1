import React from "react";

// Component & Container Imports
import Button from "./Button";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";
import CanvasFooter from "./CanvasFooter";
import CanvasFooterItem from "./CanvasFooterItem";

// to convert array into SVG string
import quickdrawSvgRender from '../utils/quickdrawSvgRender/quickdrawSvgRender';

// arol tip: useReducer instead of having this mess of variables here.
let isDrawing = false;
let lastXCoordinate = 0;
let lastYCoordinate = 0;
let drawing = [];
let xCoordinate = [];
let yCoordinate = [];
let timestamp = [];


const Canvas = ({ passDrawing }) => {
  const [locations, setLocations] = React.useState([]);
  const canvasRef = React.useRef(null);
  const [googleGuess, setGoogleGuess] = React.useState('Draw something...');

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // canvas size
    canvas.width = 375;
    canvas.height = 375;
    canvas.style.width = "375px";
    canvas.style.height = "375px";

    // canvas settings
    ctx.strokeStyle = "#fff";
    ctx.linecap = "round";
    ctx.lineWidth = 3;

    const draw = e => {
      if (!isDrawing) return;
      e.preventDefault();
      e.stopPropagation();

      if (e.x || e.y) {
        xCoordinate.push(e.layerX);
        yCoordinate.push(e.layerY);
        timestamp.push(e.timeStamp);

        ctx.beginPath();
        ctx.moveTo(lastXCoordinate, lastYCoordinate);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        lastXCoordinate = e.offsetX;
        lastYCoordinate = e.offsetY;
      } else {
        let touch = e.touches[0];
        let x = touch.pageX - touch.target.offsetLeft;
        let y = touch.pageY - touch.target.offsetTop;
        xCoordinate.push(x);
        yCoordinate.push(y);
        timestamp.push(e.timeStamp);

        ctx.beginPath();
        ctx.moveTo(lastXCoordinate, lastYCoordinate);
        ctx.lineTo(x, y);
        ctx.stroke();

        lastXCoordinate = x;
        lastYCoordinate = y;
      }
    };

    // eventlisteners: mouse
    canvas.addEventListener("mousedown", e => {
      isDrawing = true;
      lastXCoordinate = e.offsetX;
      lastYCoordinate = e.offsetY;
    });
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => postDrawingHelper());
    canvas.addEventListener("mouseout", () => isDrawing = false);

    // eventlisteners: touch
    canvas.addEventListener("touchstart", e => {
      isDrawing = true;
      let touch = e.touches[0];

      lastXCoordinate = touch.pageX - touch.target.offsetLeft;
      lastYCoordinate = touch.pageY - touch.target.offsetTop;
    });
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", () => postDrawingHelper());
  }, []);

  // helper function to post to API
  const postDrawingHelper = () => {
    isDrawing = false;

    let xyCoordinates = [xCoordinate, yCoordinate, timestamp];
    drawing.push(xyCoordinates);

    postDrawing(setGoogleGuess);

    xCoordinate = [];
    yCoordinate = [];
    timestamp = [];
    xyCoordinates = [];
  }

  const handleCanvasClick = e => {
    const newLocation = { x: e.clientX, y: e.clientY };
    setLocations([...locations, newLocation]);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setGoogleGuess("Draw something...");
    setLocations([]);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        style={{
          border: "1px solid rgba(255,255,255,0.2)",
          backgroundColor: "#764ad7"
        }}
      />
      <CanvasFooter>
        <CanvasFooterItem>
          <Button clear onClick={handleClear}>
            Clear
          </Button>
        </CanvasFooterItem>
        <CanvasFooterItem right>
          <h4>
            {googleGuess === "Draw something..." ? "" : "Is it... "}
            {googleGuess === "Draw something..." ? "" : googleGuess}
            {googleGuess === "Draw something..." ? "" : "?"}
          </h4>
        </CanvasFooterItem>
      </CanvasFooter>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  passDrawing: (drawing) => dispatch(Actions.passDrawing(drawing))
});
// For now this function is not used, revise when FE and BE are connected

export default connect(
  null,
  mapDispatchToProps
)(Canvas);