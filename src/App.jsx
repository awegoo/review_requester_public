import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Templates from "./components/Templates/Templates";
import MainPage from "./pages/MainPage/MainPage.jsx";
import NoteFound from "./pages/NoteFound/NoteFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NoteFound />} />
        <Route element={<Templates />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
