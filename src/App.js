import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurahList from './components/SurahList';
import SurahDetail from './components/SurahDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurahList />} />
        <Route path="/surah/:nomor" element={<SurahDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
