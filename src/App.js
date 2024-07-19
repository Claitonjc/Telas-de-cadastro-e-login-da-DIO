import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Feed } from './pages/Feed';
import { Cadastro } from './pages/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Feed" element={<Feed />}/>
        <Route path="/Cadastro" element={<Cadastro />}/>
      </Routes>
    </Router>
  );
}

export default App;
