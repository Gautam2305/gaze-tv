import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import {Login,
  Signup,
  Error,
  Explore,
  History,
  Home,
  Liked,
  Playlist,
  WatchLater} from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
