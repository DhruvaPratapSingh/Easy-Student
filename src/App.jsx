import { Button } from "./components/ui/button"
import Navbar from "./_components/Navbar"
import { Routes,Route} from "react-router"
import Faq from "./_components/insiderpage/Faq"
import Home from "./_components/insiderpage/Home"
import Internship from "./_components/insiderpage/Internship"
import Contact from "./_components/insiderpage/Contact"
import Contest from "./_components/insiderpage/Contest"
export default function App() {
  return (<>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contest" element={<Contest/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/internship" element={<Internship/>}/>
    <Route path="/faq" element={<Faq/>}/>
   </Routes>
  </>
  )
}