import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Restaurant from './components/Restaurant';
import AddRestaurant from './components/AddRestaurant';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Restaurant />} />
          <Route path='/add-restaurant' element={<AddRestaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
