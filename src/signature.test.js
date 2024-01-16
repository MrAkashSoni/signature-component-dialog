import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the jest-dom library
import TextEditor from "./components/fontSelector";

test("Updates text on input change", () => {
  const { container } = render(<TextEditor />);
  const textarea = container.querySelector("textarea");

  fireEvent.change(textarea, { target: { value: "test" } });

  expect(textarea.value).toBe("test");
});

test("Selects font", async () => {
  const { getByText, container } = render(<TextEditor />);
  const textarea = container.querySelector("textarea");

  fireEvent.click(getByText("Arial"));

  await waitFor(() => {
    expect(textarea).toHaveStyle("font-family: Arial");
  });
});

test("Saves text and font", () => {
  const { getByText, container } = render(<TextEditor />);
  const textarea = container.querySelector("textarea");

  fireEvent.change(textarea, { target: { value: "test" } });

  fireEvent.click(getByText("Arial"));

  // Spy on console.log
  const spyLog = jest.spyOn(console, "log");

  fireEvent.click(getByText("Save"));

  expect(spyLog).toHaveBeenCalledWith("Text:", "test");
  expect(spyLog).toHaveBeenCalledWith("Font:", "Arial");

  spyLog.mockRestore();

  expect(textarea.value).toBe("");
});
