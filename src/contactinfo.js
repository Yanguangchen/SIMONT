import reviewUs from "./Assets/reviewUs.jpg";
function ContactInfo() {
  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "10%",
    marginBottom: "3%",
    overflow: "hidden",
    flexDirection: "column",
  };

  const bodyStyle = {
    width: "90%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    color: "white",
    overflow: "hidden",
    gridGap: "4%",
  };

  const subContent = {
    marginTop: "3%",
    background: "black",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const subContent1 = {
    marginTop: "3%",
    background: "black",
    padding: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };


  const reviewImg = {
    width: "100%",
  }

  return (
    <div style={containerWrapper} className="contact">
      <h1>Contact Information</h1>
      <div style={bodyStyle} className="contactBody">
        <div style={subContent} className="subcontent">
          <p className="pstyle">Phone: 9737 1617</p>
          <p className="pstyle">Simon Tay</p>
          <p className="pstyle">Roxy square 1 #01-54</p>
          <p className="pstyle">Opens daily: <br></br> 12.30 - 7:00pm</p>
          <p className="pstyle">simontgems@gmail.com</p>
        </div>

        <a href="https://g.page/r/CdDbGjRggIFZEBM/review">
        <div style={subContent1} className="subcontent">
          <img src={reviewUs} style={reviewImg} alt="reviewUs" />
        </div>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
