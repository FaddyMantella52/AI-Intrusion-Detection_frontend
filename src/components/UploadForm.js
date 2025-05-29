// UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';
import '../App.css';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      setResult(response.data);
    } catch (err) {
      alert("Upload or prediction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Upload and Analyze</h1>
      <div className="upload-box">
        <label className="custom-file-upload">
          📂 Choose File
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </label>
        {file && <span style={{ display: 'block', marginTop: '10px' }}>{file.name}</span>}
        <button onClick={handleUpload}>🚀 Upload & Analyze</button>
        {loading && <p>⏳ Analyzing traffic...</p>}
        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default UploadForm;
