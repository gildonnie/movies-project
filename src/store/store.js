import { createStore } from 'redux';

const initialState = {
  search: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return { ...state, search: action.payload };
    default:
      return state;
}
}

const store = createStore(reducer);

export default store;