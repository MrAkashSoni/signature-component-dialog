import { Box, Button, Modal, Typography } from "@mui/material";
import "./App.css";
import SignatureScreen from "./pages/SignatureScreen";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    borderRadius: "10px",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="App">
      <h1>Signature Pad</h1>
      <Button onClick={handleOpen}> Add Signature </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Signature
          </Typography>

          <SignatureScreen />
        </Box>
      </Modal>
    </div>
  );
}

export default App;
