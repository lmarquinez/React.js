import { useState } from "react";
import linesData from "./db/lines.json";
import { HighlightParagraph } from "./app/styles";

const App = () => {
  const [currentLine, setCurrentline] = useState(0);

  return (
    <>
      <div>
        <div>
          <button onClick={() => setCurrentline(currentLine - 1)}>
            Previous
          </button>
          <button onClick={() => setCurrentline(currentLine + 1)}>Next</button>
        </div>
        {linesData.map((line, index) => (
          <HighlightParagraph key={index} highlighting={index === currentLine}>
            {line}
          </HighlightParagraph>
        ))}
      </div>
    </>
  );
};

export default App;
