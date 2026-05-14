import './App.css';
import Landing from './pages/Landing';
import { LangProvider } from './context/LangContext';
import { ScrollProvider } from "./context/ScrollContext"
import { PlaybackProvider } from "./context/PlaybackContext"
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Media from './pages/Media';
import Work from './pages/Work';
import Contact from './pages/Contact';
import MainContact from './components/Contact/MainContact';
import ContactConfirmation from './components/Contact/ContactConfirmation';
import { useLocation } from 'react-router';
import { useEffect, useRef } from 'react';

function App() {
  const firstMount = useRef(true);

  useEffect(()=> {
    if (firstMount.current) {
      firstMount.current = false;
    }
  },[useLocation().pathname]);

  return (
      <ScrollProvider>
        <LangProvider >
          <PlaybackProvider>
            <Routes>
              <Route path="/" element={<Landing firstMount={firstMount.current}/>} />
              <Route path="about" element={<About />} />
              <Route path="media" element={<Media />} />
              <Route path="work" element={<Work />} />
              <Route path="contact" element={<Contact />}>
                <Route index element={<MainContact />} />
                <Route path="confirmation" element={<ContactConfirmation />} />
              </Route>
            </Routes>
          </PlaybackProvider>
        </LangProvider>
      </ScrollProvider>
  )
}

export default App;
