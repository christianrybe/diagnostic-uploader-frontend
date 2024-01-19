import { Box, Container } from "@mui/material";
import FileUpload from "../components/FileUpload";

export default function App() {
  return (
    <Container component="main" maxWidth="sm">
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
