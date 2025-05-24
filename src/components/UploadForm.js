import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [result, setResult] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:5000/upload', formData);
    setResult(response.data);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default UploadForm;