import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';

const Index = (props) => (
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio del bitcoin</h2>
        <Precio
          precio={props.precioBitcoin}
        />
      </div>
      <div className="col-md-8">
        <h2>Noticias sobre bitcoin</h2>
      </div>
      <div className="col-md-4">
        <h2>Proximos eventos bitcoin</h2>
      </div>
    </div>
  </MasterPage>
);

Index.getInitialProps = async () => {
  const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');

  const resPrecio = await precio.json();

  return {
    precioBitcoin: resPrecio.data.quotes.USD
  }
} 

export default Index;