import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import {DynamicSeason} from "./pages/dynamic-season";
import TvSeriesUpload from "./pages/series-upload-page";


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/auth/login" element={<Login /> }></Route>
          <Route path="/auth/register" element={<SignUp /> }></Route>
        <Route path="/season/:Id" element={<DynamicSeason />}></Route>
        <Route path="/tvseries/upload" element={<TvSeriesUpload  />} />

      </Routes> 
      </Router>
    </div>
  );
}

export default App;
