// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Footer from "../src/components/footer/footer"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
