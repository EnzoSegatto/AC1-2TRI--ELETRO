import Menu from "./Menu.JSX"
import Footer from "../inter/Footer"
import IndividualIntervalsExample from "../inter/slide"
import BasicExample from "../inter/product"
import "../css/main.css"
import Login from"../inter/login"

function Registro(){
    return(
        <div>
            <header className="header">
                <Menu/>
            </header>

            <Login/>
   
            <Footer/>
        
        </div>
    )
 
}
export default Registro