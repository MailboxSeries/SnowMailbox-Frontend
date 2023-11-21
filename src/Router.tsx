import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Onboarding from './pages/Onboarding/Onboarding';
//import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SignIn from './pages/SignIn/SignIn';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Onboarding />} />
        <Route path="/signin" element={<SignIn />} />


      </Routes>
    </BrowserRouter>
  );
}
