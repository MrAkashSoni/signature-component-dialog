import { Button } from "@mui/material";
import React, { useState } from "react";

const FontSelector = ({ onSelectFont }) => {
  const fonts = ["Dancing Script", "Arial", "PT Sans Narrow", "Cursive"];

  return (
    <div className="select_font">
      <p className="title">Select Font:</p>
      {fonts.map((font, index) => (
        <Button
          className="fount_button"
          key={index}
          onClick={() => onSelectFont(font)}
        >
          <span style={{ fontFamily: font }}>{font}</span>
        </Button>
      ))}
    </div>
  );
};

const TextEditor = () => {
  const [text, setText] = useState("");
  const [selectedFont, setSelectedFont] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSelect = (font) => {
    setSelectedFont(font);
  };

  const handleSave = () => {
    console.log("Text:", text);
    console.log("Font:", selectedFont);
    setText("");
    setSelectedFont("");
  };

  return (
    <div className="font_selector_block">
      <p className="title">Enter Text:</p>
      <textarea
        value={text}
        onChange={handleTextChange}
        style={{ fontFamily: selectedFont }}
      />
      <FontSelector onSelectFont={handleFontSelect} />
      <Button
        variant="contained"
        className="submit_button"
        onClick={handleSave}
      >
        Save
      </Button>
    </div>
  );
};

export default TextEditor;
