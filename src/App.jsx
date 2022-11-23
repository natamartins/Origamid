// import Exercico01 from './components/exercicio01';
// import Exercico02 from './components/exercicio02';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from './components/exercicio03/Index';
import Index04 from './components/exercico04/Index';
// import Home from './pages/home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index04 />} exact />
          {/* <Route path="/" element={<Home />} exact /> */}
          <Route path="/product" element={<Index />} />
        </Routes>
      </BrowserRouter>
      {/* <Exercico01 />
      <Exercico02 /> */}
      {/* <Home /> */}
    </div>
  );
};

export default App;
