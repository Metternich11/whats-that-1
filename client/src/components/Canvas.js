import React, { useState, useRef, useEffect } from "react";

// Component & Container Imports
import Button from "./Button";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/index";

// to convert array into SVG string
import quickdrawSvgRender from "../utils/quickdrawSvgRender/quickdrawSvgRender";
import Results from "../containers/Results";
import { nextTick } from "q";

const Canvas = ({ passDrawing, game, currentUser }) => {
  // arol tip: useReducer instead of having this mess of variables here.
  // arol tip #2: useReducer was just a cool way to handle this. But in order to fix this, it can be done with useState
  let isDrawing = false;
  let lastXCoordinate = 0;
  let lastYCoordinate = 0;
  const [drawing, setDrawing] = useState([]);
  let xCoordinate = [];
  let yCoordinate = [];
  let timestamp = [];

  const [locations, setLocations] = useState([]);
  const [count, setCount] = useState(0);
  const canvasRef = useRef(null);
  const [googleGuess, setGoogleGuess] = useState("Draw something...");

  useEffect(() => {
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
    canvas.addEventListener("mouseout", () => (isDrawing = false));

    // eventlisteners: touch
    canvas.addEventListener("touchstart", e => {
      isDrawing = true;
      let touch = e.touches[0];

      lastXCoordinate = touch.pageX - touch.target.offsetLeft;
      lastYCoordinate = touch.pageY - touch.target.offsetTop;
    });
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", () => postDrawingHelper());

    if (count > 0) {
      // We already passed through here
      if (game.endRound) {
        // The round has finishe
        const svg = quickdrawSvgRender(drawing, canvas.width, canvas.height);
        passDrawing(svg, "passFinalDrawing");
        setCount(0);
      }
    }
    setCount(1);
  }, [game.endRound]);

  useEffect(() => {
    if (game.rounds && count > 0) {
      let win = game.rounds
        .filter(round => {
          return round.roundNum === game.round;
        })
        .map(el => el.winners);
      if (win.flat().includes(currentUser.userId)) {
        const svg = quickdrawSvgRender(drawing, 375, 375);
        passDrawing(svg, "passFinalDrawing");
        setCount(0);
      }
      setCount(1);
    }
  }, [game.rounds]);

  // helper function to post to API
  const postDrawingHelper = () => {
    isDrawing = false;

    let xyCoordinates = [xCoordinate, yCoordinate, timestamp];
    setDrawing(prev => {
      const updatedDrawing = [...prev, xyCoordinates];
      passDrawing(updatedDrawing, "passDrawing");
      return updatedDrawing;
    });

    xCoordinate = [];
    yCoordinate = [];
    timestamp = [];
    xyCoordinates = [];
  };

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
    setDrawing([]);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        style={{
          border: "1px solid rgba(255,255,255,1)",
          backgroundColor: "#533497"
        }}
      />
      <Button clear onClick={handleClear}>
        <i className="far fa-trash-alt" />
      </Button>

      <div>
        {googleGuess !== "Draw something..." ? (
          <h4>
            {googleGuess === "Draw something..." ? "" : "Is it... "}
            {googleGuess === "Draw something..." ? "" : googleGuess}
            {googleGuess === "Draw something..." ? "" : "?"}
          </h4>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  game: state.game,
  currentUser: state.currentUser
});

const mapDispatchToProps = { passDrawing: Actions.passDrawing };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
