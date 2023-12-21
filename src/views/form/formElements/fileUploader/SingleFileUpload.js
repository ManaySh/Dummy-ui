
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudUpload } from '@mui/icons-material'; // Import CloudUpload icon from Material-UI

const SingleFileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = useCallback((acceptedFiles) => {
    // Handle the dropped file(s) here
    console.log('Accepted Files:', acceptedFiles);
    // Set the selected file
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: '', 
    maxFiles: 1, 
  });

  return (
    <div className="parent-card" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', overflow: 'hidden' }}>
      <h2>Upload Single File</h2>
      <div className="child-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer', height: '300px' }} {...getRootProps()}>
        {selectedFile ? (
          <div className={`dropzone ${isDragActive ? 'active' : ''}`} style={{ width: '100%', overflow: 'hidden' }}>
            {selectedFile.type.startsWith('image') ? (
              <img src={URL.createObjectURL(selectedFile)} alt="Selected File" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              <p>{selectedFile.name}</p>
            )}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default SingleFileUploader;




// import React, { useCallback, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { CloudUpload } from '@mui/icons-material'; // Import CloudUpload icon from Material-UI

// const SingleFileUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleDrop = useCallback((acceptedFiles) => {
//     // Handle the dropped file(s) here
//     console.log('Accepted Files:', acceptedFiles);
//     // Set the selected file
//     setSelectedFile(acceptedFiles[0]);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop: handleDrop,
//     accept: '', // Allow all types of files
//     maxFiles: 1, // Allow only a single file to be uploaded
//   });

//   return (
//     <div className="parent-card" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', overflow: 'hidden' }}>
//       <h2>Upload Single File</h2>
//       <div className="child-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer', height: '300px' }} {...getRootProps()}>
//         {selectedFile ? (
//           <div className={`dropzone ${isDragActive ? 'active' : ''}`} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
//             {selectedFile.type.startsWith('image') ? (
//               <img src={URL.createObjectURL(selectedFile)} alt="Selected File" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//             ) : (
//               <p>{selectedFile.name}</p>
//             )}
//           </div>
//         ) : (
//           <div className={`dropzone ${isDragActive ? 'active' : ''}`}>
//             <input {...getInputProps()} />
//             <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <CloudUpload style={{ fontSize: '64px' }} />
//             </div>
//             <p>
//               {isDragActive
//                 ? 'Drop your files here or click to initiate the upload.'
//                 : '(This serves as a demonstration drop zone. The chosen files won\'t be uploaded in this demonstration.)'}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SingleFileUploader;


