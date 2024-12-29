import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);

export default App;
