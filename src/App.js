import './App.css';
import Header from './components/Header';
import Main from './Main';
import Footer from './Footer';
import Landing from './pages/Landing';
import { LangProvider } from './context/LangContext';
import { ScrollProvider } from "./context/ScrollContext"
import { Route, Routes } from 'react-router';
import About from './About';

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
