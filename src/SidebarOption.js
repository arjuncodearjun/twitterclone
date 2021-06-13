import React from "react";
import "./SidebarOption.css";

// Option for one siedbar element like home, explore
// After developing one, we can define all of them
function SidebarOption({ active, text, Icon }) {
  return (
    // active is used to automatically make the home page side bar active
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon className="mIcons" />
      <h2 className="sideTexts">{text}</h2>
    </div>
  );
}

export default SidebarOption;
