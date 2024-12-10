import React, { useState } from "react";
import File from "./File";
import "../Folder.css";

function Folder({ name, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div className="folder-header" onClick={toggleFolder}>
        <span>{isOpen ? "-" : "+"}</span> {name}
      </div>
      {isOpen && (
        <div className="folder-content">
          {Array.isArray(items)
            ? items.map((item, index) => <File key={index} name={item} />)
            : Object.keys(items).map((folderName) => (
                <Folder
                  key={folderName}
                  name={folderName}
                  items={items[folderName]}
                />
              ))}
        </div>
      )}
    </div>
  );
}

export default Folder;
