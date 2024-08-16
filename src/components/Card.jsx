import "../styles/Card.css";


const Card = ({ customer }) => {
  return (
    <div className="card-container">
      <h3>Hola {customer.name}</h3>
      <h4>Veo que te gusta {customer.movie}, que buen gusto tienes!</h4>
    </div>
  );
};

export default Card;
