import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Onboarding from './pages/Onboarding/Onboarding';
//import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Onboarding />} />
        

      </Routes>
    </BrowserRouter>
  );
}
