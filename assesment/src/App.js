import React from "react";
// Library Imports

// Local Imports
import Dashboard from "./Pages/Dashboard/Dashboard";
import PostPage from "./Pages/PostPage/PostPage";

// Style Imports
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <PostPage /> */}
    </div>
  );
}

export default App;
