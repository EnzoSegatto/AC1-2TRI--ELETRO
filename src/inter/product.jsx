
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../css/main.css'


function BasicExample() {
  const Prod1 = 'https://cdn.discordapp.com/attachments/826586755229810688/1112696437470408704/torradeira-de-aco-brilha-com-pao-recem-torrado-gerado-por-ia.jpg'
  const Prod2 = 'https://cdn.discordapp.com/attachments/826586755229810688/1112696795240353823/maquina-de-lavar-em-uma-lavanderia-minimalista.jpg'
  const Prod3 = 'https://carajas.vteximg.com.br/arquivos/ids/26630620-1000-1000/carjas-s3-ecommerce-carajasonline-7899882313383_1.jpg?v=638162844661170000'
  return (
    <Row xs={1} md={2} className="g-2">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img width={200} height={400}variant="top" src={Prod1} />
            <Card.Body>
              <Card.Title>AirFreyer</Card.Title>
              <Card.Text>
                A melhor AirFryer do Mercado, Adquira Já|!
              </Card.Text>
            </Card.Body>
            <Button variant="primary">R$:997</Button>{' '}
          </Card>
          <Card>
            <Card.Img width={200} height={400}variant="top" src={Prod2} />
            <Card.Body>
              <Card.Title>Maquina de Lavar</Card.Title>
              <Card.Text>
               Maquina de lavar com brutalidade e decadencia. Lava e seca!
              </Card.Text>
            </Card.Body>
            <Button variant="primary">R$:1489</Button>{' '}
          </Card>
          <Card>
            <Card.Img width={200} height={400}variant="top" src={Prod3} />
            <Card.Body>
              <Card.Title>Micro Wave</Card.Title>
              <Card.Text>
                Micro Ondas com funcionalidade unica
              </Card.Text>
            </Card.Body>
            <Button variant="primary">R$:557</Button>{' '}
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BasicExample;