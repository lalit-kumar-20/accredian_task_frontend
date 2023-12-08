import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/login';
import SignUpPage from './Components/signUp';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/signUp" element={<SignUpPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
