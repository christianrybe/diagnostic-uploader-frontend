import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import ResultDialog from "../ResultDialog";
import { archiveUrl } from "../common/api";

interface FileUploadProps {
  title: string;
}

const FileUpload = ({ title }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(archiveUrl, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          setDialogContent("File uploaded successfully");
          setDialogOpen(true);
          setDialogTitle("Done");
        } else {
          const errorData = await response.json();
          setDialogContent(errorData.error.message);
          setDialogOpen(true);
          setDialogTitle("Error!");
        }
      } catch (error) {
        alert("Error while uploading file");
        console.error("Upload error:", error);
      }
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Grid container direction="column" spacing={3} alignItems="center">
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <input accept=".tgz" style={{ display: "none" }} id="contained-button-file" multiple type="file" onChange={handleFileChange} />
      <Grid item sx={{ width: "80%" }}>
        <TextField fullWidth label="Selected File" value={fileName} margin="normal" InputProps={{ readOnly: true }} disabled={true} />
      </Grid>
      <Grid item sx={{ width: "80%" }}>
        {!fileName && (
          <label htmlFor="contained-button-file">
            <Button fullWidth variant="contained" component="span">
              Choose File
            </Button>
          </label>
        )}
        {fileName && (
          <Button fullWidth variant="contained" color="primary" onClick={handleUpload} disabled={!file}>
            Upload File
          </Button>
        )}
      </Grid>
      <ResultDialog open={dialogOpen} handleClose={handleCloseDialog} title={dialogTitle} content={dialogContent} />
    </Grid>
  );
};

export default FileUpload;
