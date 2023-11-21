import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Onboarding from './pages/Onboarding/Onboarding';
//import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Onboarding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home/:ownerId" element={<Home />} />


      </Routes>
    </BrowserRouter>
  );
}
