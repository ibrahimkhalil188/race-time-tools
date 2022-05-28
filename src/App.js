import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllUser from './Pages/Dashboard/AllUser';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='container mx-auto overflow-x-hidden'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>} />
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="myorder" element={<MyOrder></MyOrder>} />
          <Route path='payment/:id' element={<Payment></Payment>} />
          <Route path='myprofile' element={<MyProfile></MyProfile>} />
          <Route path='addreview' element={<AddReview></AddReview>} />
          <Route path='alluser' element={<AllUser></AllUser>} />
          <Route path='manageorder' element={<ManageOrder></ManageOrder>} />
          <Route path='addproduct' element={<AddProduct></AddProduct>} />
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>} />
        </Route>
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
