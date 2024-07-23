import Paidservices from "./components/Paidservices"
import Home from "./home/Home"
import { Route, Routes } from "react-router-dom"
import Market from "./Paid/Market"
import Signup from "./components/Signup"

function App() {
  return (
    <>    
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Paidservices" element={<Market/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
      
    </>
    
  )
}

export default App