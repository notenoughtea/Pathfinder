import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../store/cardSlice';
import axios from 'axios';

export default function AddRouteForm(props) {

  const {
    lat,
    lng,
    handleClose,
  } = props

  const [formdata, setFromData] = React.useState("");
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    // eslint-disable-next-line no-console
    axios.post("/routes", {  
      title: data.get('title'),
      length: data.get('length'),
      difficulty: data.get('difficulty'),
      address: data.get('address'),
      description: data.get('description'),
      lat: lat,
      lng: lng,
    }).then((res) => {
      dispatch(addCard(cards, {
        title: data.get('title'),
        length: data.get('length'),
        difficulty: data.get('difficulty'),
        address: data.get('address'),
        description: data.get('description'),
        lat: lat,
        lng: lng,
      }))
    });
    console.log({
      title: data.get('title'),
      length: data.get('length'),
      difficulty: data.get('difficulty'),
      address: data.get('address'),
      description: data.get('description'),
      lat: lat,
      lng: lng,
    });
    handleClose()
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: 'success.main' }}>
          <EmojiFlagsIcon />
        </Avatar>
        <br/>
        <Typography component="h1" variant="h5">
          Новый маршрут*
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Название маршрута"
            name="title"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Описание маршрута"
            type="text"
            id="description"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="length"
            label="Расстояние до цели(км)"
            type="text"
            id="length"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="difficulty"
            label="Сложность маршрута"
            type="text"
            id="difficulty"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Локация"
            type="text"
            id="address"
          />
          <br/>
          {/* Установите маркер */}
          <TextField
            value={lng}
            margin="normal"
            required
            fullWidth
            name="latitude"
            label="Широта"
            type="text"
            id="latitude"
          />
          <TextField
            value={lng}
            margin="normal"
            required
            fullWidth
            name="longitude"
            label="Долгота"
            type="text"
            id="longitude"
          />
          <Button type="submit" color="primary" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
           Добавить маршрут
          </Button>
          <Button type="click" onClick={handleClose} color="secondary" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Отмена
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
