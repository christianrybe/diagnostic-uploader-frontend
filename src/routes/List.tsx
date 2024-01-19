import React, { useState, useEffect } from "react";
import { archiveUrl } from "../common/api";

const FileListPage = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(archiveUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFiles(data.data.files);
      } catch (error) {
        console.error("Could not fetch files:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h1>Uploaded Files</h1>
      <ul>
        {files.map((file: any) => (
          <li key={file.id}>{file.url}</li> // Adjust according to your file object structure
        ))}
      </ul>
    </div>
  );
};

export default FileListPage;
