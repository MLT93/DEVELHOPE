import PropTypes from "prop-types";
import React from "react";

export function Contenedor({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        backgroundColor: "lightskyblue",
        color: "black",
        padding: "20px",
      }}>
      {React.Children.map(children, (element) => {
        return React.cloneElement(element, {
          style: {
            color: "white",
            borderRadius: "20px",
            padding: "10px",
          },
        });
      })}
    </div>
  );
}

Contenedor.propTypes = {
  children: PropTypes.node.isRequired,
};
