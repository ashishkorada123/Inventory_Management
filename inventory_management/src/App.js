
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link, Routes} from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Profile from './components/Profile';


function App() {
  return (
    <Router>
    <div className="App">
      < Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home/*" element={<Home />}></Route>
          <Route path="/inventory/*" element={<Inventory />}></Route>
          <Route path="/profile/*" element={<Profile />}></Route>
          <Route path="/signup/*" element={ <SignupForm />}></Route>
        </Routes>
      
      
     
    </div>
    </Router>
  );
}

export default App;
