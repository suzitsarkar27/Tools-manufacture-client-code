import logo from './logo.svg';
import './App.css';
import Header from './Pages/SHAREit/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Home/AllRoutes/Login/Login';
import SingUp from './Pages/Home/AllRoutes/SingUp/SingUp';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/SHAREit/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
       <Route path='/'element={<Home></Home>}></Route>
       <Route path='/home'element={<Home></Home>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
       <Route path='/singup'element={<SingUp></SingUp>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer />
    </div>
  );
}

export default App;
