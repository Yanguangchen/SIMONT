import { ElfsightWidget } from "react-elfsight-widget";
import GoogleReviews from "./reviewCarousell";

function Socials() {
  const flexContainer = {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
  };

  return (
    <div style={flexContainer}>
      <div>
        <GoogleReviews />
      </div>
    </div>
  );
}

export default Socials;
