import React, { useState, useEffect } from "react";

const TrafficLightSystem = () => {
  const [redLightActive, setRedLightActive] = useState(true);
  const [yellowLightActive, setYellowLightActive] = useState(false);
  const [greenLightActive, setGreenLightActive] = useState(false);

  const [redTimer, setRedTimer] = useState(10);
  const [yellowTimer, setYellowTimer] = useState(5);
  const [greenTimer, setGreenTimer] = useState(15);

  const [manualOverride, setManualOverride] = useState(false);

  const changeLights = () => {
    if (redLightActive) {
      setRedLightActive(false);
      setYellowLightActive(true);
    } else if (yellowLightActive) {
      setYellowLightActive(false);
      setGreenLightActive(true);
    } else if (greenLightActive) {
      setGreenLightActive(false);
      setRedLightActive(true);
    }
  };

  useEffect(() => {
    let timer;
    if (!manualOverride) {
      if (redLightActive) {
        timer = setTimeout(changeLights, redTimer * 1000);
      } else if (yellowLightActive) {
        timer = setTimeout(changeLights, yellowTimer * 1000);
      } else if (greenLightActive) {
        timer = setTimeout(changeLights, greenTimer * 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [
    redLightActive,
    yellowLightActive,
    greenLightActive,
    redTimer,
    yellowTimer,
    greenTimer,
    manualOverride,
  ]);

  const increaseTimer = (color) => {
    if (color === "red") {
      setRedTimer((prev) => prev + 5);
    } else if (color === "yellow") {
      setYellowTimer((prev) => prev + 5);
    } else if (color === "green") {
      setGreenTimer((prev) => prev + 5);
    }
  };

  const activateLight = (color) => {
    setManualOverride(true);
    if (color === "red") {
      setRedLightActive(true);
      setYellowLightActive(false);
      setGreenLightActive(false);
    } else if (color === "yellow") {
      setRedLightActive(false);
      setYellowLightActive(true);
      setGreenLightActive(false);
    } else if (color === "green") {
      setRedLightActive(false);
      setYellowLightActive(false);
      setGreenLightActive(true);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Traffic Light System</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          data-testid="red-light"
          style={{
            backgroundColor: redLightActive ? "red" : "gray",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            margin: "10px",
            opacity: redLightActive ? 1 : 0.5,
            transition: "background-color 0.3s ease",
          }}
        />
        <div
          data-testid="yellow-light"
          style={{
            backgroundColor: yellowLightActive ? "yellow" : "gray",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            margin: "10px",
            opacity: yellowLightActive ? 1 : 0.5,
            transition: "background-color 0.3s ease",
          }}
        />
        <div
          data-testid="green-light"
          style={{
            backgroundColor: greenLightActive ? "green" : "gray",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            margin: "10px",
            opacity: greenLightActive ? 1 : 0.5,
            transition: "background-color 0.3s ease",
          }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => activateLight("red")}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Activate Red
        </button>
        <button
          onClick={() => activateLight("yellow")}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Activate Yellow
        </button>
        <button
          onClick={() => activateLight("green")}
          style={{ padding: "10px 20px", margin: "5px" }}
        >
          Activate Green
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Adjust Timer</h3>
        <div>
          <button
            onClick={() => increaseTimer("red")}
            style={{ padding: "10px 20px", margin: "5px" }}
          >
            Increase Red Timer by 5s
          </button>
          <button
            onClick={() => increaseTimer("yellow")}
            style={{ padding: "10px 20px", margin: "5px" }}
          >
            Increase Yellow Timer by 5s
          </button>
          <button
            onClick={() => increaseTimer("green")}
            style={{ padding: "10px 20px", margin: "5px" }}
          >
            Increase Green Timer by 5s
          </button>
        </div>
        <div>
          <p>Red Timer: {redTimer}s</p>
          <p>Yellow Timer: {yellowTimer}s</p>
          <p>Green Timer: {greenTimer}s</p>
        </div>
      </div>
    </div>
  );
};

export default TrafficLightSystem;
