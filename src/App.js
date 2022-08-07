// import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
        
      
    </Router>
   
  );
}

export default App;
