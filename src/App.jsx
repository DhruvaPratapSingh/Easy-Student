import Navbar from "./_components/Navbar"
import { Routes,Route} from "react-router"
import Faq from "./_components/page/Faq"
import Home from "./_components/page/Home"
import Internship from "./_components/page/Internship"
import Contact from "./_components/page/Contact"
import Contest from "./_components/page/Contest"
import  Learnmore  from "./_components/page/insiderpage/Learn_more"
import AppliedPage from "./_components/page/Appliedpage"
import Preparation from "./_components/page/Preparation"
import CompanyCategory from "./_components/page/insiderpage/component/comanywise/CompanyCategory"
import TitlePage from "./_components/page/insiderpage/component/comanywise/CompanyDetails"
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
    <Route path="/preparation" element={<Preparation/>} />
    <Route path="/open_more/:id" element={<CompanyCategory />} />
    {/* <Route  path="/tcs" element={<Tcs/>}/> */}
    <Route path="/title/:title" element={<TitlePage/>} />
   </Routes>
  </>
  )
}