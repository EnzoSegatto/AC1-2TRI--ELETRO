import Menu from "./Menu.JSX"
import Footer from "../inter/Footer"
import IndividualIntervalsExample from "../inter/slide"
import BasicExample from "../inter/product"
import "../css/main.css"

function Home(){
    return(
        <div>
            <header className="header">
                <Menu/>
            </header>
            <IndividualIntervalsExample/>
            <div className="produtohome"><h1>Produtos</h1></div>
            <div className="produtos"><BasicExample/></div>
            <Footer/>
        
        </div>
    )
 
}
export default Home