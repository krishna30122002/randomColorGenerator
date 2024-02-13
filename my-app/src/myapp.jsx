import React, { useEffect, useState } from "react";
// import '/'

const RandomColor = () => {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomUtil = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleRandomHex = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtil(hex.length)];
    }
    setColor(hexColor);
  };

  const handleRandomRgb = () => {
    const r = randomUtil(256);
    const g = randomUtil(256);
    const b = randomUtil(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (type === "rgb") handleRandomRgb();
    else handleRandomHex();
  }, [type]);

  return (
    <div
      className="container"
      style={{ height: "100vh", width: "100vw", background: color }}
    >
      <button
        onClick={() => setType("hex")}
        style={{
          margin: "0.5rem",
          marginTop: "1rem",
          padding: "0.3rem 0.5rem",
          backgroundColor: "gray",
          fontWeight: "bold",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          borderRadius: "0.3rem",
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => setType("rgb")}
        style={{
          margin: "0.5rem",
          marginTop: "1rem",
          padding: "0.3rem 0.5rem",
          backgroundColor: "gray",
          fontWeight: "bold",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          borderRadius: "0.3rem",
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={type === "hex" ? handleRandomHex : handleRandomRgb}
        style={{
          margin: "0.5rem",
          marginTop: "1rem",
          padding: "0.3rem 0.5rem",
          backgroundColor: "blue",
          opacity: "0.5rem",
          color: "white",
          fontWeight: "bold",
          borderRadius: "0.3rem",
        }}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "3.8rem",
          marginTop: "3.5rem",
        }}
      >
        <h3>{type !== "rgb" ? "HEX Color" : "RGB Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
