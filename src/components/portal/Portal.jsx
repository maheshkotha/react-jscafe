import React, { useState } from "react";
import { createPortal } from "react-dom";
import './portal.css';

const Portal = () => {
  const [showModel, toggleModel] = useState(false);

  const handleToggle = () => {
    toggleModel((prev) => !prev)
  }
  return (
    <div>
      <button onClick={handleToggle}>
        {showModel ? "Hide Model" : "Open Model"}
      </button>
      {
        showModel && createPortal(<>
        <div id="model">
          <div className="close"
            onClick={handleToggle}
          >X</div>

          <div className="content">
            <span>Hey..., I'm Dialog Box</span>
          </div>
        </div>
        </>, document.body)
      }
      
    </div>
  );
};

export default Portal;
