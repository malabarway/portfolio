import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { Projects } from './pages/Projects';
import { Thoughts } from './pages/Thoughts';
import { Travel } from './pages/Travel';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
        <Navigation />
        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/travel" element={<Travel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
