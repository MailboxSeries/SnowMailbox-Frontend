import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import AuthProvider from './components/AuthProvider/AuthProvider';
import {Suspense} from 'react';

const App = () => {
  return (
    <>
       <Suspense>
          <BrowserRouter> 
            <Router />
            </BrowserRouter>
      </Suspense> 
    </>
  );
};

export default App;
