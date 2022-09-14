import './App.css';
import Login from './components/Login/Login';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import SingleMovie from './components/SingleMovie/SingleMovie';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ProductRoute from './components/ProdectRoute/ProductRoute';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Rigester';


function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <Routes>
     
    <Route index path='*/' element={<Login/>} />
    <Route index path='/rigister' element={<Register/>} />



{/* This Route We Protact Them If User Dosn't Login Can't Show Them  */}
            <Route element={<ProductRoute/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/*' element={<Home/>} />

              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/movie/:id' element={<SingleMovie/>} />



              <Route  element={<Footer/>} />

            </Route>


    </Routes>
    <Footer/>

    </BrowserRouter>

    </div>
  );
}

export default App;











// <BrowserRouter>
// <Navbar/>
// {
// localStorage.id ? <>
// <Routes>
  
//    <Route path="/home" element={<Home />} />
//    <Route  path='/movie/:id' element={<SingleMovie  />}  />
//    <Route  path='/about' element={<About  />}  />
//    <Route  path='/contact' element={<Contact  />}  />



   




 
//  </Routes>

// </>:
// <>

// <Routes>

//  <Route  path="/" element={<Login/> } />
 
 

// </Routes>
// </>
 
// }
