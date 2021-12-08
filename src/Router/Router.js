import { Routes, Route } from 'react-router-dom';

import MainLayout from '../components/Layout/MainLayout'
import Home from '../components/Home';
import Misdemeanors from '../components/Misdemeanors';
import Confess from '../components/Confess';
import Error404 from '../components/Error404';


const Router = () =>
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/misdemeanors' element={<Misdemeanors />} />
      <Route path='/confess' element={<Confess />} />
      <Route path='*' element={<Error404 />} />
    </Route>
  </Routes>

export default Router