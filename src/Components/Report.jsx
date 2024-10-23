import React, { useState } from 'react';

const ReportUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("File uploaded: ", event.target.files[0].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Logic to upload file to the server can go here
      alert(`File "${selectedFile.name}" uploaded successfully!`);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Report</h2>
      <h1 className="text-gray-700 mb-4">Upload Your Report</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          accept=".pdf,.doc,.docx"
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ReportUpload;
