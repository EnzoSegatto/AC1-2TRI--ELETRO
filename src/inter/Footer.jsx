import "../css/footer.css"


function Footer() {

    const instagram = "https://cdn.discordapp.com/attachments/1021540396381261985/1100205778943619142/instagram.png"
    const facebook = "https://cdn.discordapp.com/attachments/1021540396381261985/1100205779182682142/facebook.png"
    const youtube = "https://cdn.discordapp.com/attachments/1021540396381261985/1100205778712920084/youtube.png"
  
  return (
    <div>
      <footer className="footer">
        <div className="footer-nome">
          <h2 className="footer-nome-title">Eletro Enzo</h2>
          <h4 className="footer-nome-descricao">Seus eletrodomesticos aqui!</h4>
        </div>
  
        <div className="footer-contato">
          <h3 className="footer-contato-title">Ednilson</h3>
          <div className="footer-contato-dados">
            <p className="footer-contato-cidade">São Paulo - SP</p>
            <div className="footer-icons">
              <img width={32} height={32} src={instagram}/>
              <img width={32} height={32} src={facebook}/>
              <img width={32} height={32} src={youtube}/>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
    )
  }
  
  export default Footer;