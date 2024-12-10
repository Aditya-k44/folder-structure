import React from "react";
import Folder from "../src/components/Folder";
import "./App.css";

const data = {
  Documents: ["Document1.jpg", "Document2.jpg", "Document3.jpg"],
  Desktop: ["Screenshot1.jpg", "videopal.mp4"],
  Downloads: {
    Drivers: ["Printerdriver.dmg", "cameradriver.dmg"],
  },
  Applications: [
    "Webstorm.dmg",
    "Pycharm.dmg",
    "FileZilla.dmg",
    "Mattermost.dmg",
    "chromedriver.dmg",
  ],
};

function App() {
  return (
    <div className="App">
      <h1>File Manager</h1>
      <Folder name="Documents" items={data.Documents} />
      <Folder name="Desktop" items={data.Desktop} />
      <Folder name="Downloads" items={data.Downloads} />
      <Folder name="Applications" items={data.Applications} />
    </div>
  );
}

export default App;
