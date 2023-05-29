import Menu from "./Menu.JSX"
import Footer from "../inter/Footer"
import "../css/main.css"
import Contato from "../inter/Contato"



function Contato(){
    return(
        <div>
            <header className="header">
                <Menu/>
            </header>

            <Contato/>
   
            <Footer/>
        
        </div>
    )
 
}
export default Contato