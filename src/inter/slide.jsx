import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function IndividualIntervalsExample() {
  const urlImg1 = "https://cdn.discordapp.com/attachments/826586755229810688/1112702238171873290/1.png"
  const urlImg2 = "https://cdn.discordapp.com/attachments/826586755229810688/1112702237504978984/2.png"
  const urlImg3 = "https://cdn.discordapp.com/attachments/826586755229810688/1112702237781807176/3.png"
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img width={1920} height={700} src={urlImg1}/>
        <Carousel.Caption>
          <h3>BlackFriday!!!</h3>
          <p>Você precisa adquirir agora</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img width={1920} height={700} src={urlImg2}/>
        <Carousel.Caption>
          <h3>Seus eletrodomesticos aqui!</h3>
          <p>Compre agora</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img width={1920} height={700} src={urlImg3}/>
        <Carousel.Caption>
          <h3>Sua casa perfeita</h3>
          <p>
           Compre agora
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;