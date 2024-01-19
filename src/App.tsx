import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import './App.css';
import FileUpload from './FileUpload';

export default function App() {


  return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <FileUpload title={'Upload your .tgz file'}  />
        </Box>
      </Container>
  );
}