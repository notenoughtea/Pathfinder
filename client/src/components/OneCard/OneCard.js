import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom'

function Worm() {
  const { id } = useParams();

  const [one, setOne] = useState(null);

  useEffect(() => {
    axios.post('/one', { id })
      .then(res => setOne(res.data));
  }, [])

  return (
    <div>
      {one && <div className="center">
        <h2>Маршрут № {id}: {one.title}</h2>
        <img className="cardImg" src={one.url} alt={one.title} />
        <p>{one.description}</p>
        <Link className="nav-link" to="/">Скрыть</Link>
      </div>
      }
      </div>
  )
}
export default Worm;
