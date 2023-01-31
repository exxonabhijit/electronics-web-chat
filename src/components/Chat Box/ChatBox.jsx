import React from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";

export default function ChatBox() {
  const editor = useRef(null);
  return (
    <>
      <JoditEditor ref={editor}  />
    </>
  );
}
