import '../css/cima.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu() {
  const Logo = 'https://cdn.discordapp.com/attachments/826586755229810688/1112700233193898067/Enzo.png'

  return (
    <Navbar bg="gray" expand="lg">
      <Container>
      <div className="head"><img width={100} height={100} src={Logo}/></div>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

   export default Menu
   