import './App.css';
import Landing from './pages/Landing';
import { LangProvider } from './context/LangContext';
import { ScrollProvider } from "./context/ScrollContext"
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Media from './pages/Media';
import Work from './pages/Work';
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
          <Routes>
            <Route path="/" element={<Landing firstMount={firstMount.current}/>} />
            <Route path="about" element={<About />} />
            <Route path="media" element={<Media />} />
            <Route path="work" element={<Work />} />
          </Routes>
        </LangProvider>
      </ScrollProvider>
  )
}

export default App;
