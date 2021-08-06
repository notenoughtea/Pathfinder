import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

// вываливаем карточки с бэка: 
export const axiosCards = createAsyncThunk(
  'cards/axiosCards',
  async function(_, {rejectWithValue}) {
    try {
      const response = await axios();
      console.log(response);
      if (response.statusText !== 'OK') {
        throw new Error('Server Error!')
      }
      return response.data;//!
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
      state.status = 'loasding';
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
