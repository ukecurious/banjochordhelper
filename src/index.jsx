// Vanilla JS first to verify scripts run
const root = document.getElementById("root");
console.log("Vanilla JS test: root element is", root ? "found" : "NOT found");

if (root) {
  root.innerHTML = "<h1>Testing...</h1>";
}

// Now try React
import React from "react";
import ReactDOM from "react-dom/client";

setTimeout(() => {
  console.log("Attempting React render...");
  try {
    const root2 = document.getElementById("root");
    if (root2) {
      const reactRoot = ReactDOM.createRoot(root2);
      reactRoot.render(
        React.createElement("div", {
          style: {
            padding: "20px",
            fontFamily: "Arial",
            backgroundColor: "#f5f5f5"
          }
        },
          React.createElement("h1", null, "✓ React 18 is working!"),
          React.createElement("p", null, "The BanjoChordChart app is loading..."),
          React.createElement("p", { style: { color: "#666", fontSize: "12px" } },
            "Check the browser console for any errors."
          )
        )
      );
      console.log("React render successful");
    }
  } catch (error) {
    console.error("React error:", error);
    const root3 = document.getElementById("root");
    if (root3) {
      root3.innerHTML = `<div style="padding:20px;color:red;font-family:monospace;">
        <h1>Error</h1>
        <p>${error.message}</p>
      </div>`;
    }
  }
}, 100);

