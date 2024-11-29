import { useState } from "react";
import axios from "axios";  // Import axios

const UploadForm = ({ setLinks }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false); // State to show loading status

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (selectedFiles.length === 0) {
      alert("Please select at least one file to upload.");
      return;
    }
  
    const formData = new FormData();
    Array.from(selectedFiles).forEach((file) => {
      formData.append('file', file);
    });
  
    try {
      const response = await fetch('http://localhost:5000/api/files/upload', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      if (response.ok) {
        setLinks((prev) => [...prev, result.link]);
        setSelectedFiles([]);
      } else {
        alert('Error uploading file');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error uploading the file.');
    }
  };
  

  return (
    <div className="upload-form flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Upload Files or Folders</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          disabled={loading} // Disable the button while uploading
        >
          {loading ? "Uploading..." : "Upload & Generate Links"}
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
