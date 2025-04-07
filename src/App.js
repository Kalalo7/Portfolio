import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const theme = {
  colors: {
    primary: '#0a192f',
    secondary: '#64ffda',
    text: '#8892b0',
    textLight: '#ccd6f6',
    background: '#0a192f'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
