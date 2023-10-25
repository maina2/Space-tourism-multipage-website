import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
   <div className='main'>
   

    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/Destination" element={<Destination/>}></Route>
      <Route path="/Crew" element={<Crew/>}></Route>
      <Route path="/Technology" element={<Technology/>}></Route>

    </Routes>
    </BrowserRouter>
    
    
    
    

   </div>
  )
}

export default App
