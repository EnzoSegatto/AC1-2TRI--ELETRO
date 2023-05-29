import Menu from "./Menu.JSX"
import Footer from "../inter/Footer"
import BasicExample from "../inter/product"
import "../css/main.css"

function Produtos(){
 return(
    <div>
      <Menu/>
      <div className="produtohome"><h1>Produtos</h1></div>
      <div className="produtos">
        <BasicExample/>
      </div>
      <Footer/>
    </div>
 )
}
export default Produtos