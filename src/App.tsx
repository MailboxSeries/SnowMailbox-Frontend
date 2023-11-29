import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import AuthProvider from './components/AuthProvider/AuthProvider';
import {Suspense} from 'react';

const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        {/*   <AuthProvider> 
          <BrowserRouter>  TODO: 개발 시에만 주석 처리*/}
            <Router />
       {/*       </BrowserRouter>
     </AuthProvider> TODO: 개발 시에만 주석 처리*/}
      </Suspense> 
    </>
  );
};

export default App;
