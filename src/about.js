import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
      <div
        style={{
          marginTop: "5%",
          border: "1px solid #051d41",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#051d41",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordionTabs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "1rem 5rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            fontSize: "150%",
            background: "black",
            color: "white",
            border: "none",
          }}
        >
          <span style={{ fontWeight: "600" }}>{title}</span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div style={{ padding: "1.5rem", background: "white" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CarOptionsSection = () => {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Discover something special today
      </h1>

      <div>
        <AccordionItem title="Custom made accessories" className="AccordionText">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Benefits of our accessories:
          </h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1rem" }}>
            <li>Handmade accessories, made with love and precision</li>
            <li>High quality handicraft with many years of experience of glass work</li>
            <li>Customize your desired accessory, left our expert create something that you will love</li>
            <li>Ideal for your loved ones!</li>
          </ul>
          <p>
            Having a custom accessory made, adds a layer of personality, love and history to that item. It adds sentimental value, and is a great way to show someone you care. Our accessories are made with love and precision, and are ideal for your loved ones.
          </p>
        </AccordionItem>

        <AccordionItem title="High quality materials" className="AccordionText">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Enjoy only the best materials:
          </h4>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1rem" }}>
            <li>Gems, stone and materials are sourced from the best</li>
            <li>Strict and thorough quality control and inspection for each and every one of our products</li>
            <li>Ensure that our materials are sourced sustainabily from non conflict zones</li>
            <li>Wide variety of materials available for you to pick and choose</li>
            <li>Potential for resale value</li>
            <li>Hundreds of other premade accessories for you to choose from</li>

          </ul>
          <p>
            We have hundreds of premade accessories, discover the perfect one for you today! Our materials are sourced from the best, and we ensure that they are sustainably sourced from non conflict zones. Our products are inspected thoroughly to ensure that only the best quality products are delivered to you. With hundreds of materials to choose from, you can be sure to find the perfect accessory for you.
          </p>
        </AccordionItem>

        <AccordionItem title="Rare Collectors items" className="AccordionText">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            A wide range to choose from
          </h4>
          <p>
            From traditional hand made accessories from Africa, to insects trapped in ember, we have a wide range of rare collectors items for you to choose from. Our items are unique and one of a kind, and are sure to be a conversation starter. Our items are also ideal for gifting, and are sure to be a hit with your loved ones, or even as a treat for yourself to add to your collection
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;