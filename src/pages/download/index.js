import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Replace 'sample.pdf' with the actual path to your PDF file
    const pdfPath = '/path/to/your/pdf/sample.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'younesCV.pdf'; // Set the downloaded file name
    link.click();
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default DownloadButton;