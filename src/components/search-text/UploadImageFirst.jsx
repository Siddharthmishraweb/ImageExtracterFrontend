import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import OCRDisplay from "./OCRDisplay";
import { searchTextApi } from "./api/SearchText";

function UploadImageFirst() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [boldWords, setBoldWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedImage(URL.createObjectURL(file));
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await searchTextApi(formData);

      console.log("%c extracted response", "color: red", response);
      setExtractedText(response.data);
      setBoldWords(response.data.boldWords);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image: ", error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 style={{ padding: "24px", letterSpacing: "18px" }}>
        Image Text Extractor
      </h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        uploadedImage && (
          <OCRDisplay
            uploadedImage={uploadedImage}
            extractedText={extractedText}
            boldWords={boldWords}
          />
        )
      )}
    </div>
  );
}

export default UploadImageFirst;
