import React from "react";
import "css-doodle";

// Assign the component to a variable with a display name
const CssDoodleComponent: React.FC<{ rule?: string }> = ({ rule = "" }) => (
  <css-doodle>{rule}</css-doodle>
);

// Explicitly set the display name for the component
CssDoodleComponent.displayName = "CssDoodleComponent";

export default CssDoodleComponent;
