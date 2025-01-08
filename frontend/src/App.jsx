import { Route,Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/adminsignup' element={<AdminSignup/>}/>
        </Routes>
        </div>     
    </>
  )
}

export default App
