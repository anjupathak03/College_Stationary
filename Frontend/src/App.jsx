import Paidservices from "./components/Paidservices"
import Home from "./home/Home"
import {Navigate, Route, Routes } from "react-router-dom"
import Market from "./Paid/Market"
import Signup from "./components/Signup"
import { Toaster } from 'react-hot-toast';
//import Login from "./Login";
import { useAuth } from "./components/context/AuthProvider"
import AdminPortal from "./components/AdminPortal"
import UserPortal from "./components/UserPortal"

//import Logout from "./Logout";


function App() {
const [authUser, setAuthUser] = useAuth();
console.log(authUser);
  return (
    <>    
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/AdminPortal" element={<AdminPortal/>} />
  <Route path="/UserPortal" element={<UserPortal/>} />
  <Route path="/paidservices" element={authUser ? <Market /> : <Navigate to="/signup" />} />
  <Route path="/signup" element={<Signup />} />
</Routes>

      <Toaster />
      </div>
      
    </>
    
  )
}

export default App