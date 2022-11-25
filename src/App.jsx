// import Exercico01 from './components/exercicio01';
// import Exercico02 from './components/exercicio02';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Index } from './components/exercicio03/Index';
// import Index04 from './components/exercico04/Index';
// import Index05 from './components/exercicio05/Index';
import Index08 from './components/exercicio08/Index';
// import Home from './pages/home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index08 />} exact />
          {/* <Route path="/" element={<Index07 />} exact /> */}
          {/* <Route path="/" element={<Index06 />} exact /> */}
          {/* <Route path="/" element={<Index05 />} exact /> */}
          {/* <Route path="/" element={<Index04 />} exact /> */}
          {/* <Route path="/" element={<Home />} exact /> */}
          {/* <Route path="/product" element={<Index />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
