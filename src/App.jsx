
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'

import PageNotFound from './Pages/PageNotFound'
import RegisterPage from './Pages/RegisterPage'
import Login from './Pages/Login'
import Info from './Pages/Info'
import View from './Pages/View'
import Saved from './Pages/Saved'
import Download from './Pages/Download'



function App() {
  

  return (
    <>
     <Header/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/registerpage' element={<RegisterPage/>}/>
      <Route path='/loginpage' element={<Login/>}/>
       <Route path='/all-workouts' element={<Saved/>}/>
        <Route path='/all-downloads' element={<Download/>}/>
      <Route path='/workout-details' element={<Info/>}/>
     <Route path='/savedDetails/:id' element={<View/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
     </Routes>

     <Footer/>

     
    </>
  )
}

export default App
