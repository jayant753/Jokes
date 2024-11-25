import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import './styles/custom.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
};

export default App;

