import React from "react";
import grid1 from "./Assets/GridAssets/Grid1.mp4";
import grid2 from "./Assets/GridAssets/Grid2.mp4";
import grid3 from "./Assets/GridAssets/Grid3.mp4";
import grid4 from "./Assets/GridAssets/Grid4.mp4";
import grid5 from "./Assets/GridAssets/Grid5.mp4";
import grid6 from "./Assets/GridAssets/Grid6.mp4";
import grid7 from "./Assets/GridAssets/Grid7.mp4";
import grid8 from "./Assets/GridAssets/Grid8.mp4";

function GridContainer() {
  const flexWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "3%",
    flexDirection: "column",
  };

  const gridWrapper = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Flexible columns
    gridGap: "30%",
    padding: "10px",
    width: "60%", // Increased width for better spacing
    marginTop: "3%",
    marginBottom: "5%",
  };

  const gridContainers = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div style={flexWrapper}>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid1}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid2}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
      </div>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid3}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid4}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
      </div>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid5}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
            loading="lazy"
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid7}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            playsInline
            autoPlay
            loop
            loading="lazy"
          />
        </div>
      </div>
      <div style={gridWrapper}>
        <div style={gridContainers}>
          <video
            src={grid6}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            playsInline
            loop
            loading="lazy"
          />
        </div>
        <div style={gridContainers}>
          <video
            src={grid8}
            className="grid-video"
            style={videoStyle}
            alt="Placeholder Video"
            muted
            autoPlay
            loop
            playsInline
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default GridContainer;
