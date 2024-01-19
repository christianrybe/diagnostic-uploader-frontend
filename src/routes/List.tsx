import { Card, CardContent, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
    <Container maxWidth="md">
      <Typography textAlign="center" variant="h4" component="h1" gutterBottom>
        Uploaded Files
      </Typography>
      {files.map((file: any) => (
        <a href={file.url} download key={file.id} style={{ textDecoration: "none" }}>
          <Card
            key={file.id}
            variant="outlined"
            sx={{
              marginBottom: 2,
              borderRadius: 3,
              transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardContent>
              <Typography variant="body1">{file.id}</Typography>
            </CardContent>
          </Card>
        </a>
      ))}
    </Container>
  );
};

export default FileListPage;
