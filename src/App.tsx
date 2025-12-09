import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Elite Journeys | Luxury Travel Concierge';
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          <Chatbot />
        </Router>
      )}
    </>
  );
}

export default App;
