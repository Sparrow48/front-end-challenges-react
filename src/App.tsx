import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import AgeCalculator from './pages/AgeCalculator';
import Apps from './pages/Apps';
import UIDesign from './pages/UIDesign';
import BrowserExtension from './pages/UI/BrowserExtension';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Apps />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/UI-designs" element={<UIDesign />} />
        <Route path="/browser-extension" element={<BrowserExtension />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
