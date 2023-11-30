import { Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import OnBoarding from './pages/OnBoarding/OnBoarding';
//import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import ImageAll from './pages/ImageAll/ImageAll';
import Redirect from './pages/Redirect/Redirect';
import RouteChangeTracker from './RouteChangeTracker';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
export default function Router() {
  RouteChangeTracker();

  return (
    <>
    <ScrollToTop />

      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/home/:ownerId" element={<Home />} />
        <Route path="/image-all/:ownerId" element={<ImageAll />} />

        {/* 다른 모든 경로 처리 */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
      </>
  );
}
