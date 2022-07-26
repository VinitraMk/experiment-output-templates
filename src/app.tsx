import React, { ReactElement } from 'react';
//import './scss/custom.scss'
import MainLayout from './layouts/mainLayout';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Landing from './modules/landing/landing';
import StandardReport from './modules/standardReport/standardReport';

function App(): ReactElement {
  return (
    <>
    <BrowserRouter>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/standard-report" element={<StandardReport/>}/>
            </Routes>
        </MainLayout>
  </BrowserRouter>
    {/*<div>{'react setup from scratch without cra testing ts'}</div>*/}
    </>
  );
}

export default App;
