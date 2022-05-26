import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='container mx-auto'>
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
          <Route path='myorder' element={<MyOrder></MyOrder>} />
          <Route path='myprofile' element={<MyProfile></MyProfile>} />
          <Route path='addreview' element={<AddReview></AddReview>} />
        </Route>
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />

      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
