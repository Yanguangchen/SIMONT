import Listings from "./listings";
import Maps from "./maps";

function Midsection() {
  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const gridWrapper = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
  };

  return (
    <>
      <div style={containerWrapper}>
        <div style={gridWrapper}>
          <Listings />
          <Maps />
        </div>
      </div>
    </>
  );
}

export default Midsection;
