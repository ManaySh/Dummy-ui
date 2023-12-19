import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudUpload, Close } from '@mui/icons-material'; // Import CloudUpload and Close icons from Material-UI

const MultipleFileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleDrop = useCallback((acceptedFiles) => {
    console.log('Accepted Files:', acceptedFiles);
    setSelectedFiles([...selectedFiles, ...acceptedFiles]);
  }, [selectedFiles]);

  const removeFile = (index) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  const removeAllFiles = () => {
    setSelectedFiles([]);
  };

  const handleUpload = () => {
    console.log('Uploading files:', selectedFiles);
    setSelectedFiles([]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: '', 
    multiple: true, 
  });

  return (
    <div>
      <div className="card" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', height: 'auto', display: 'flex', flexDirection: 'column', overflow: 'auto', minHeight: '400px' }}>
        <h2>File Uploader</h2>
        <div className="child-card" style={{ flex: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }} {...getRootProps()}>
          <div className={`dropzone ${isDragActive ? 'active' : ''}`}>
            <input {...getInputProps()} />
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CloudUpload style={{ fontSize: '64px' }} />
            </div>
            <p>
              {isDragActive
                ? 'Drop your files here or click to initiate the upload.'
                : '(This serves as a demonstration drop zone. The chosen files won\'t be uploaded in this demonstration.)'}
            </p>
          </div>
        </div>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          {selectedFiles.length > 0 && (
            <div className="card" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', overflow: 'auto' }}>
              {selectedFiles.map((file, index) => (
                <div key={index} className="child-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px', fontSize: '14px', width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    {/* Placeholder for file image - Replace 'fileImage' with your actual logic for file images */}
                    {/* <img src={fileImage} alt="file" style={{ width: '30px', height: '30px', marginRight: '10px' }} /> */}
                    <p>{file.name}</p>
                  </div>
                  <Close
                    style={{ cursor: 'pointer', fontSize: '18px', marginLeft: '10px', backgroundColor: hoveredIndex === index ? '#008CBA' : 'transparent', borderRadius: '4px', padding: '2px' }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => removeFile(index)}
                  />
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button onClick={removeAllFiles} style={removeButtonStyle}>Remove All</button>
                <button onClick={handleUpload} style={uploadButtonStyle}>Upload All</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const removeButtonStyle = {
  backgroundColor: '#FF4500',
  color: 'white',
  padding: '10px 20px',
  border: 'none', 
  borderRadius: '4px', 
  cursor: 'pointer', 
  fontSize: '16px', 
};

const uploadButtonStyle = {
  backgroundColor: '#008CBA', 
  color: 'white',
  padding: '10px 20px',
  border: 'none', 
  borderRadius: '4px', 
  cursor: 'pointer', 
  fontSize: '16px', 
};

export default MultipleFileUploader;
