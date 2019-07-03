const Precio = (props) => {
  
  const {price, percent_change_1h, percent_change_7d, percent_change_24h} = props.precio;


  return ( 
    <div className="card text-white bg-success mb-3">
      <div className="card-header">
        Precio del Bitcoin
      </div>
      <div className="card-body">
        <h4 className="card-title">Precio actual: {price} $</h4>
      </div>
    </div>
  );
}

export default Precio;