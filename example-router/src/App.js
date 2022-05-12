import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3/Page3';

function App() {
  return (
    <div className='content'>
      This is a router example

      <Router>
        <nav>
          <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/Page1">Page1</NavLink>
          <NavLink to="/Page2">Page2</NavLink>
          <NavLink to="/Page3">Page3</NavLink>
        </nav>

        <Routes>
          <Route path="Page1" element={<Page1 />} />
          <Route path="Page2" element={<Page2 />} />
          <Route path="Page3/*" element={<Page3 />} />
          <Route path="*" element={<Navigate to="/Page1" replace />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
