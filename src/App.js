import React, { useState } from 'react';
import './App.css';
import ImageText from './components/search-text/ImageText';

function App() {
  // const [uploadedImage, setUploadedImage] = useState(null);
  // const [extractedText, setExtractedText] = useState('');
  // const [boldWords, setBoldWords] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const handleImageUpload = async (event) => {
  //   const file = event.target.files[0];
  //   setUploadedImage(URL.createObjectURL(file));
  //   setLoading(true);
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const response = await axios.post('http://localhost:8080/ocr', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     console.log("%c extracted response", 'color: red', response)
  //     setExtractedText(response.data);
  //     setBoldWords(response.data.boldWords);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error uploading image: ', error);
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="App">
      <ImageText />
      {/* <h1>Image Text Extractor</h1>
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
      )} */}
    </div>
  );
}

export default App;
