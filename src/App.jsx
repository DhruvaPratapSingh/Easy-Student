import Navbar from "./_components/Navbar"
import { Routes,Route} from "react-router"
import Faq from "./_components/page/Faq"
import Home from "./_components/page/Home"
import Internship from "./_components/page/Internship"
import Contact from "./_components/page/Contact"
import Contest from "./_components/page/Contest"
import  Learnmore  from "./_components/page/insiderpage/Learn_more"
import AppliedPage from "./_components/page/Appliedpage"
import  Hackthon  from "./_components/page/Hackthon"
export default function App() {
  return (<>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contest" element={<Contest/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/internship" element={<Internship/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/learn_more/:id" element={<Learnmore/>}/>
    <Route path="/applied" element={<AppliedPage/>} />
    <Route path="/hackthon" element={<Hackthon/>} />
   </Routes>
  </>
  )
}