import './App.css';
import Login from './components/Login/Login';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import SingleMovie from './components/SingleMovie/SingleMovie';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import ProductRoute from './components/ProdectRoute/ProductRoute';


function App() {
  console.log(localStorage)

  

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <Routes>
     
    <Route path='*/' element={<Login/>} />


{/* This Route We Protact Them If User Dosn't Login Can't Show Them  */}
            <Route element={<ProductRoute/>}>
            <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/movie/:id' element={<SingleMovie/>} />



        

            </Route>


    </Routes>
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
