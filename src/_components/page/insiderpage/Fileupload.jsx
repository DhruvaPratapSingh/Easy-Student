import React, { useRef } from 'react';

const FileUploadButton = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
      
      // Save file information to local storage
      const files = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
      files.push({ name: file.name, url: URL.createObjectURL(file) });
      localStorage.setItem('uploadedFiles', JSON.stringify(files));
      
      if (onFileUpload) {
        onFileUpload(files);
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="bg-blue-600 py-1 px-3 rounded-xl font-medium hover:bg-blue-400 mt-5"
      >
        Apply
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default FileUploadButton;
