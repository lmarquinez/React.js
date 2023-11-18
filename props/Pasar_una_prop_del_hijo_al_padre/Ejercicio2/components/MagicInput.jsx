import { useState } from "react";

const MagicInput = ({ updateValue }) => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setValue(value - 1);
          updateValue(value - 1);
        }}
      >
        -
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
          updateValue(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setValue(value + 1);
          updateValue(value + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default MagicInput;
