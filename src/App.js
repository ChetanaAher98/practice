import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginUser from './Components/LoginUser';
import LoginAdmin from './Components/LoginAdmin'
import LoginHead from './Components/LoginHead'
import Registration_Admin from './Components/Registration_Admin'
import Registration_Head from './Components/Registration_Head'
import Registration_User from './Components/Registration_User';
import { Route, Routes } from 'react-router-dom';
import Front from './Components/Front'



function App() {
  return (
   <>
   
 {/* <Login/> */}
   <Routes>
    <Route path='/' element={<Front/>}/>
    <Route path='/loginadmin' element={<LoginAdmin/>}/>
    <Route path='/loginhead' element={<LoginHead/>}/>
    <Route path='/loginuser' element={<LoginUser/>}/>
    <Route path='/regadmin' element={<Registration_Admin/>}/>
    <Route path='/reghead' element={<Registration_Head/>}/>
    <Route path='/reguser' element={<Registration_User/>}/>
   </Routes>
  
  
   </>
  )
}

export default App;
