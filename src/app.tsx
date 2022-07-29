import React, { lazy, ReactElement } from 'react';
//import './scss/custom.scss'
import MainLayout from './layouts/mainLayout';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Landing from './modules/landing/landing';
import StandardReport from './modules/standardReport/standardReport';
import GridView from './modules/standardReport/components/gridView';

function App(): ReactElement {
  return (
    <>
    <BrowserRouter>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/standard-report" element={<StandardReport/>}/>
                <Route path="/standard-report-view" element={<GridView/>}/>
            </Routes>
        </MainLayout>
  </BrowserRouter>
    </>
  );
}

export default App;
