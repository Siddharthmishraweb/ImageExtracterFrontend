import React from 'react';

const ImageUpload = ({ onImageUpload }) => {
  return (
    <div className="ImageUpload">
      <input type="file" accept="image/*" onChange={onImageUpload} className="btn btn-outline-primary" id="file-upload" style={{ display: 'none' }} />
      <label htmlFor="file-upload" className="btn btn-outline-primary">Upload Image to Extract Text</label>
    </div>
  );
};

export default ImageUpload;
