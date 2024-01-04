import React from "react";
import WatchNow from "./component/WatchNow";
import Movies from "./component/Movies";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/WatchNow" element={<WatchNow />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
