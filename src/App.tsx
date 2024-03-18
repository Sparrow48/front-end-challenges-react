import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import AgeCalculator from './pages/AgeCalculator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
