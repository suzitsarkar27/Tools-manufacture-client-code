import logo from './logo.svg';
import './App.css';
import Header from './Pages/SHAREit/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/AllRoutes/Login/Login';
import SingUp from './Pages/AllRoutes/SingUp/SingUp';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/SHAREit/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Abouts from './Pages/AllRoutes/Abouts/Abouts';
import Blogs from './Pages/AllRoutes/Blogs/Blogs';
import Parches from './Pages/AllRoutes/Parches/Parches';
import DashBord from './Pages/AllRoutes/DashBord/DashBord';
import MyOders from './Pages/AllRoutes/MyOders/MyOders';
import RequreAuth from './Pages/SHAREit/RequreAuth/RequreAuth';
import MyOrders from './Pages/AllRoutes/DashBord/MyOrders';
import MyProfile from './Pages/AllRoutes/DashBord/MyProfile';
import MyReview from './Pages/AllRoutes/DashBord/MyReview';
import 'react-toastify/dist/ReactToastify.css';
import AddItems from './Pages/AllRoutes/DashBord/AddItems';
function App() {
  return (
    <div  className="max-w-7xl mx-auto px-12">
     <Header></Header>
     <Routes>
       <Route path='/'element={<Home></Home>}></Route>
       <Route path='/home'element={<Home></Home>}></Route>
       <Route path='/service/:Id'element={

            <RequreAuth>
              <Parches></Parches>
            </RequreAuth>}></Route>
            
       <Route path='/dashbord'element={
              <RequreAuth>
                <DashBord></DashBord>
              </RequreAuth>}>
                <Route index element={<MyOrders></MyOrders>}></Route>
                <Route path='profile' element={<MyProfile></MyProfile>}></Route>
                <Route path='review' element={<MyReview></MyReview>}></Route>
                <Route path='additems' element={<AddItems></AddItems>}></Route>
              </Route>

       <Route path='/myoders'element={
              <RequreAuth>
                  <MyOders></MyOders>
              </RequreAuth>
      }></Route>

       <Route path='/about'element={<Abouts></Abouts>}></Route>
       <Route path='/blogs'element={<Blogs></Blogs>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
       <Route path='/singup'element={<SingUp></SingUp>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer />
    </div>
  );
}

export default App;
