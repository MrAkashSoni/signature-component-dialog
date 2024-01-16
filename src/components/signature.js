import { Button } from "@mui/material";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const sigCanvas = useRef({});

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");

    // You can send the dataURL to your server or save it as needed
    console.log("Signature saved:", dataURL);

    // Clear the canvas after saving
    clearSignature();
  };

  return (
    <div
      style={{
        border: "1px dashed grey",
        // width: "300px",
        padding: "10px",
        // margin: "20px",
      }}
    >
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 500,
          height: 200,
          className: "sigCanvas",
        }}
      />
      <br />
      <Button variant="contained" onClick={saveSignature}>
        Save Signature
      </Button>
      <Button
        variant="outlined"
        onClick={clearSignature}
        style={{ marginLeft: "10px" }}
      >
        Clear Signature
      </Button>
    </div>
  );
};

export default SignaturePad;
