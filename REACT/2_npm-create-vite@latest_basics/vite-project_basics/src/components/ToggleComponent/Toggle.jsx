import { useState } from "react";

export const Toggle = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div style={{ height: "200px", padding: "20px" }}>
        <button
          style={{ padding: "20px" }}
          type="submit"
          id="button"
          onClick={handleClick}>
          Toggle
        </button>
        {visible === true && (
          <ul id="list">
            <li>uno</li>
            <li>dos</li>
            <li>tres</li>
            <li>cuatro</li>
          </ul>
        )}
      </div>
    </>
  );
};
