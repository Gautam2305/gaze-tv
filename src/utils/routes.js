import { Routes, Route } from "react-router-dom";
import {
    Login,
    Signup,
    Home,
    Explore,
    Error,
    History,
    Playlist,
    WatchLater,
    Liked
} from "../pages/index";

const RouterPath = () => {
    return(
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
    )
}

export {RouterPath};