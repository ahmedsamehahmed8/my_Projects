
import Login from './components/login/Login'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import Home_sginin from './components/Home/home_sginin';
import Login_admin from './components/Login_admin/Login_admin';
import Admin_page from './components/adminpage/admin_page';


import { BrowserRouter , Route,Routes } from "react-router-dom";

function App() {



  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Login_admin/>}/>
        <Route  path='/admin/:username' element={<Admin_page/>}/>
        <Route path=":username" element={<Home_sginin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
