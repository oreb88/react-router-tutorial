import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import {Route, Router, Routes} from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profiles/:username" element={<Profile/>}/>
        </Routes>
    );
}

export default App;
