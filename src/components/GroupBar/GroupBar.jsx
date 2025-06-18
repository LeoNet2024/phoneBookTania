import React, { useState } from "react";
import classes from "./GroupBar.module.css";

export default function GroupBar({ onGroupChange }) {
  const [activeTab, setActiveTab] = useState("all");

  const handleClick = (group) => {
    setActiveTab(group);
    if (onGroupChange) {
      onGroupChange(group);
    }
  };

  return (
    <div>
      <h2>Groups</h2>
      <div className={classes.groupWrap}>
        {["all", "family", "work", "school"].map((group) => (
          <button
            key={group}
            onClick={() => handleClick(group)}
            style={activeTab === group ? { backgroundColor: "grey" } : {}}
          >
            {group.charAt(0).toUpperCase() + group.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
