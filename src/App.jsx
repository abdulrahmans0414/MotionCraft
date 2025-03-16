import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AnimationsPage from "./Pages/AnimationsPage";
import ScrollAnimationPage from "./Pages/ScrollAnimationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimationsPage />} />
        <Route path="/scroll" element={<ScrollAnimationPage />} />
      </Routes>
    </Router>
  )
}

export default App;
