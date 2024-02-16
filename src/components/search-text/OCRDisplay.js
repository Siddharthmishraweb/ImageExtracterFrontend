import React from "react";
import "./OCRDisplay.css";

const OCRDisplay = ({ uploadedImage, extractedText, boldWords }) => {
  return (
    <div className="OCRDisplay container">
      <div className="row" style={{ display: "contents" }}>
        <div className="col-md-6">
          <div className="ImageContainer">
            <img src={uploadedImage} alt="Uploaded" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 box">
          <div className="TextContainer">
            <h2 className="text-uppercase">Extracted Text</h2>
            <p>{extractedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCRDisplay;
