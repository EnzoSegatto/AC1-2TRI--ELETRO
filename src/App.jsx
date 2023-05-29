import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.JSX";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
 return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  </div>
 )
}
export default App
