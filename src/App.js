import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certifications from './certifications';


function App() {
  return ( 
    <Router>
      <Routes>
       
      <Route path='*' element={<Certifications />}  />
      </Routes>
    </Router>
  );
}

export default App;
