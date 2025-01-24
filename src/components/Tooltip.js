import React, { useState } from 'react';
import './../styles/Tooltip.css'; // Optional: For styling the tooltip

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
