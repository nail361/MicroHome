import React, { lazy, Suspense } from 'react';
import './App.scss';
import ToDo from './components/ToDo.jsx';

const Header = lazy(() => import('MicroApp/Header'));

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <ToDo />
    </>
  );
};

export default App;
