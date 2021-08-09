import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom'
import { server } from '../../constants';

function Worm() {
  const { id } = useParams();

  const [one, setOne] = useState(null);

  useEffect(() => {
    axios.post('/one', { id })
      .then(res => setOne(res.data));
  }, [])

  return (
    <div>
      {one && <div className="center gradient" style={{ position: 'relative' }}>
        {/* <div className="info" style={{
          position: 'absolute',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          bottom: '10px',
          color: 'white',
          "&::before": {
            content: `''`,
            display: 'block',
            position: 'absolute',
            background: `linear-gradient(0deg, black, transparent 50%)`,
            left: '0',
            top: '0',
            bottom: '0',
            right: '0'
          }
        }}>
          <h2 style={{ color: 'white' }}>Маршрут № {id}: {one.title}</h2>
          <p>{one.description}</p>
          <Link className="nav-link" to="/">Назад</Link>
        </ div> */}
        <img className="cardImg" src={`${server}${one.url}`} alt={one.title} style={{ position: 'relative' }} />
      </div>
      }
    </div>
  )
}
export default Worm;
