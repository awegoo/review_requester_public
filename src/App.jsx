import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import MainPage from './pages/MainPage/MainPage';
import RequestPage from './pages/RequestPage/RequestPage';
import NoteFound from './pages/NoteFound/NoteFound';
import FetchData from './FetchData'

const App = () => {
  return (
    <FetchData />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/*' element={<NoteFound />} />
    //     <Route element={<Templates />}>
    //       <Route path='/' element={<MainPage />} />
    //       <Route path='/requests/*' element={<RequestPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
