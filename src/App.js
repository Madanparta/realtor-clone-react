import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import ForgotPassword from './pages/ForgotPassword'
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'
import CreateLinsting from './pages/CreateLinsting'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/profile' element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-listing" element={<CreateLinsting />} />
      </Routes>
    </>
  );
}

export default App
