import { Box, Container, CssBaseline } from "@mui/material";
import FileUpload from "../components/FileUpload";

export default function App() {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FileUpload title={"Upload your .tgz file"} />
      </Box>
    </Container>
  );
}
