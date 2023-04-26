import { useState, useEffect } from "react";
import React from "react";
import pikachuWinking from "../assets/pikachu-wink.gif";
import generateResult from "../assets/generate.png";
import { createTextStyle } from "../styles/content";


interface ImageGenProps {
  start: boolean;
  name: string;
}

const ImageGen: React.FC<ImageGenProps> = ({ start, name }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);
  }, [start]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {timeRemaining > 0 ? (
        <div>
          <p style={createTextStyle}>Task running in {timeRemaining} second{timeRemaining !== 1 && "s"}</p>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "300px",
            height: "300px",
          }}
          >
            <img 
              src={pikachuWinking} 
              alt="pikachu winking" 
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <p style={createTextStyle}>Task done</p>
          <p style={{
            ...createTextStyle,
            fontSize: "16px",
            color: "black",
            fontWeight: "normal",
          }}>{`Say hi to ${name}!`}</p>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "300px",
            height: "300px",
          }}
          >
            <img src={generateResult} alt="generate result" style={{
                width: "100%",
                height: "auto",
              }}/>
          </div>
        </div>
      )}
    </div>
  );
};


export default ImageGen;
