import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "../feed/feed";
import Library from "../library";
import Player from "../player/player"; 
import Trendings from "../trendings/trendings";
import Favourites from "../favourite/favourites";
import './home.css';
import Sidebar from "../../components/sidebar";

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar/>
      <Routes>
          <Route path="/" element={<Library/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/trendings" element={<Trendings/>}/>
          <Route path="/player" element={<Player/>}/>
          <Route path="/favourites" element={<Favourites/>}/>

          
      </Routes>
      </div>
    </Router>
  );
}


