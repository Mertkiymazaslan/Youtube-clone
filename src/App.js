import Header from "./components/Header";
import ReccomendedVideos from "./components/ReccomendedVideos";
import SearchPage from "./components/SearchPage";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import SideVideoList from "./components/SideVideoList";
import { useState } from "react";
import { useVideo } from "./contexts/VideoContext";

function App() {
  const { sideBarShow } = useVideo();

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            exact 
            path="/"
            element={
              <div className="app__page">
                {sideBarShow && <Sidebar />}
                <ReccomendedVideos />
              </div>
            }
          />
          <Route
           exact
            path="/video"
            element={
              <div className="app__page">
                {sideBarShow && <Sidebar />}
                <VideoPlayer />
                <SideVideoList />
              </div>
            }
          />
          <Route
           exact
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                {sideBarShow && <Sidebar />}
                <SearchPage />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
