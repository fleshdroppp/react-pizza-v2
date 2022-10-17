import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://630e0a0ab37c364eb71187f7.mockapi.io/items/${id}`);
        console.log(data);
        setPizza(data);
      } catch (error) {
        console.log(error);
        alert('Error while fetching pizza!');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
