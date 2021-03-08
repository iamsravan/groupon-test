const intialState = {
  addRequested: false,
  bookList: []
};
const bookreducer = createReducer((intialState) => {
  [ADD_ACTION_REQUESTED]: (state, payload) => {
    return {
      ...state, 
      addRequested: true
    }
  },
  [ADD_ACTION_RESPONDED]: (state, payload) => {
    return {
      ...state, 
      addRequested: false,
      bookList: payload.bookList
    }
  },

  [GET_ALL_RECORDS]: (state, payload) => {
   return {
      ...state, 
      addRequested: false,
      bookList: payload.bookList
    }
  },
  return state;
}) 