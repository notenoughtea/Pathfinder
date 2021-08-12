import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";

// вываливаем карточки с бэка: 
export const axiosMyCards = createAsyncThunk(
  'cards/axiosMyCards',
  async function(_, {rejectWithValue}) {
    try {
      const response = await axios('http://127.0.0.1:3001/routes/mycards');
      if (response.statusText !== 'OK') {
        throw new Error('Server Error!')
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const myCardSlice = createSlice({
  name: 'myCards',
  initialState: {
    myCards: [],
      status: null,
      error: null
  },
  reducers: {
  addCard (state, action) {
      state.myCards.push(action.payload)
  },
  deleteCard (state, action) {
    const {
      id
    } = action.payload
       const index = (state.myCards).indexOf(state.myCards.find((e)=>(e.id===id)));
        state.myCards.splice(index, 1)
    },
  updateCard (state, action) {
    const {
      title,
      length,
      difficulty,
      address,
      description,
      lat,
      lng,
      id
    } = action.payload
    state.myCards = state.myCards.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          title: title,
          length: length,
          difficulty: difficulty,
          address: address,
          description: description,
          lat: lat,
          lng: lng
         };
      }
      return e;
    })
  },
},
  extraReducers: {
    [axiosMyCards.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [axiosMyCards.fulfilled]: (state, action) => {
      state.status = 'resolve';
      state.myCards = action.payload;
    },
    [axiosMyCards.rejected]: setError,
  },
});

// export const {addCard} = cardSlice.actions
export default myCardSlice.reducer;
