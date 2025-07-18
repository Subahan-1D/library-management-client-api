
import type { IBook } from '@/redux/interfeces/interfaces'
import { createSlice,type PayloadAction } from '@reduxjs/toolkit'


interface BookState {
  list: IBook[]
}

const initialState: BookState = {
  list: [],
}

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<IBook[]>) {
      state.list = action.payload
    },
  },
})

export const { setBooks } = bookSlice.actions
export default bookSlice.reducer