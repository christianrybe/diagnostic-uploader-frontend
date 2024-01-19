import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

interface FileUploadProps {
    title: string;
  }

const FileUpload = ({title} : FileUploadProps) => {
    const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  if (process.env.REACT_APP_BACKEND_URL === undefined || process.env.REACT_APP_ARCHIVE_URL === undefined)   {
    throw new Error("REACT_APP_BACKEND_URL or REACT_APP_ARCHIVE_URL is not defined");
  }

  const archiveUrl = process.env.REACT_APP_BACKEND_URL + process.env.REACT_APP_ARCHIVE_URL;

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch(archiveUrl, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          alert('File uploaded successfully');
        } else {
          alert('File upload failed');
        }
      } catch (error) {
        alert('Error while uploading file');
        console.error('Upload error:', error);
      }
    }
  };

  return (
    <Grid container direction="column" spacing={3} alignItems="center">
      <Grid item>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <input
        accept="*/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFileChange}
      />
      <Grid item sx={{ width: '80%' }}>
        <TextField fullWidth label="Selected File" value={fileName} margin="normal" InputProps={{ readOnly: true }} disabled={true} />
      </Grid>
      <Grid item>    
      {!fileName && 
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Choose File
          </Button>
        </label>
        }
        {fileName && <Button variant="contained" color="primary" onClick={handleUpload} disabled={!file}>
          Upload File
        </Button>}
      </Grid>
      
    </Grid>
  );
};

export default FileUpload;
