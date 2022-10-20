import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Account/Login';
import ProtectedRoute from './Routes/ProtectedRoute';
import NotFound from './pages/NotFound';
import Register from './pages/Account/Register';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path='' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;