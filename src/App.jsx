import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Pages/Home';
import GlobalStyle from './globalStyles';
import Results from './Pages/Results';
import Movies from './Pages/Movies';
import Shows from './Pages/Shows';
import Info from './Pages/Info';
import ComingSoon from './Pages/ComingSoon';


function App() {
  const location = useLocation();
  return (
    <>
    {/* < NavBar /> */}
    <GlobalStyle />
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route index element={<Home/>}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/results" element={<Results />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
      </Routes>
    </AnimatePresence>
  </>
  );
}

export default App;
