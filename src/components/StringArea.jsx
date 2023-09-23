import { useState } from "react";

const StringArea = ({ text, maxChar }) => {
  const [showFull, setShowFull] = useState(false);
  let shortText = text;
  if (text.length > maxChar && !showFull) {
    shortText = text.slice(0, maxChar) + "  ...More";
  }
  return (
    <p onClick={() => setShowFull(!showFull)}>
      {shortText?.split("\n").map((descline, index) => (
        <span key={index}>
          {descline}
          <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
