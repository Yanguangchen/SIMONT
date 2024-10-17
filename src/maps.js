import React from "react";

function Maps() {
  const flexWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: "10%",
    overflow: "hidden",
  };

  const addressStyle = {
    fontSize: "1.5em",
  };

  const gridStyle = {
    display: "grid",
    width: "100%",
  };

  const gridMaps = {
    width: "100%",
    height: "600px",
    overflow: "hidden",
    border: "0 !important",
  };
  return (
    <div>
      <div style={flexWrapper} className="maps">
        <h1>Locate Us!</h1>
        <b>
        </b>
        <div style={gridStyle} className="GridMaps">
          <div className="grid1maps">
            <iframe
              style={{ ...gridMaps, border: "none" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63820.56372845003!2d103.904397!3d1.303884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1872f1619cd9%3A0x59818060341adbd0!2sSimont%20Silver%20%26%20Glass!5e0!3m2!1sen!2ssg!4v1720755107350!5m2!1sen!2ssg"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map 1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;