import React, { useEffect, useState } from 'react';

const AppliedPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const files = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    setUploadedFiles(files);
  }, []);

  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Applied Files</h1>
      {uploadedFiles.length === 0 ? (
        <p>No files have been uploaded yet.</p>
      ) : (
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index} className="mb-2">
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppliedPage;
