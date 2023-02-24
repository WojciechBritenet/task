import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./component/Login";
import {AuthProvider} from "./context/AuthProvider";
import Home from "./component/Home";
import ProtectedRoutes from "./component/ProtectedRoutes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<Home />} />
        </Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
