import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

// вываливаем карточки с бэка: 
export const axiosCards = createAsyncThunk(
  'cards/axiosCards',
  async function(_, {rejectWithValue}) {
    try {
      const response = await axios('http://127.0.0.1:3001/routes');
      console.log(response);
      if (response.statusText !== 'OK') {
        throw new Error('Server Error!')
      }
      return response.data;// пуляем Routes.findAll() с бэка
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

// хелпер для ошибок 
const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
      cards: [],
      status: null,
      error: null
  },
  reducers: {

  },
  extraReducers: {
    [axiosCards.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [axiosCards.fulfilled]: (state, action) => {
      state.status = 'resolve';
      state.cards = action.payload;
    },
    [axiosCards.rejected]: setError,
  },
});

export default cardSlice.reducer;
