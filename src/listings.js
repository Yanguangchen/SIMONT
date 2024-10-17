import React from "react";

function Listings() {
  const h1Style = {
    marginTop: "3%",
    textAlign: "center",
    color: "black",
  };

  const containerWrapper = {
    marginTop: "3%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  };

  return (
    <>
      <div style={containerWrapper}>
        <h1 style={h1Style}>Media</h1>
        <div
          className="canva-embed"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            paddingTop: "56.2500%",
            paddingBottom: 0,
            marginTop: "1.6em",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGKsyL075w&#x2F;wYoxvEyOT9RiflGTVS8Wmg&#x2F;view?embed" 
            title="Car Listings"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGKsyL075w&#x2F;wYoxvEyOT9RiflGTVS8Wmg&#x2F;view?utm_content=DAGKsyL075w&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          rel="noopener noreferrer"
        ></a>
      </div>
    </>
  );
}

export default Listings;
