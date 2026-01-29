import './App.css';
import Landing from './pages/Landing';
import { LangProvider } from './context/LangContext';
import { ScrollProvider } from "./context/ScrollContext"
import { Route, Routes } from 'react-router';
import About from './pages/About';

function App() {
  return (
      <ScrollProvider>
        <LangProvider >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="about" element={<About />} />
          </Routes>
        </LangProvider>
      </ScrollProvider>
  )
}

export default App;
