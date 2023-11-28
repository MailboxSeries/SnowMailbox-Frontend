import {BrowserRouter} from 'react-router-dom';
import Router from './Router';
import AuthProvider from './components/AuthProvider/AuthProvider';
import {Suspense} from 'react';

const App = () => {
  return (
    <>
      {/* <Suspense>
        <AuthProvider> TODO: 개발 시에만 주석 처리*/}
          <BrowserRouter> 
            <Router />
            </BrowserRouter>
      {/* </AuthProvider>
      </Suspense> TODO: 개발 시에만 주석 처리*/}
    </>
  );
};

export default App;
