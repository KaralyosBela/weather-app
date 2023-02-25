import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/home.view';
import { Weather } from './pages/weather/weather.view';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather' element={<Weather />} />
    </Routes>
  )
};
