import './App.css';
import * as ReactDOM from "react-dom";
import {Routes, Route} from "react-router-dom"
import Menu from "./pages/Menu"
import Home from "./pages/Home"
import Food from "./pages/Food"
import TopBar from "./util/TopBar"
import Navigation from "./util/Navigation"
import Events from "./pages/Events"
import PostEvent from "./pages/PostEvent"
import Verify from "./pages/Verify"
import PostEventTwo from './pages/PostEventTwo';
import QuickLinks from './pages/QuickLinks';

function App() {
  return (
    <div> 
      <Navigation/>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu/:id" element={<Menu/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/postevent/notification" element={<PostEventTwo/>}/>
        <Route path="/postevent" element={<PostEvent/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/quicklinks" element={<QuickLinks/>}/>
      </Routes>
    </div>
  );
}

export default App;
