import { Types } from './../actions/character';

const INITIAL_STATE = {
  items: [],
};

export const CharactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_CHARACTERS_SUCCESS: {
      return { ...state, items: action.payload.items };
    }
    case Types.FILTER_CHARACTERS: {
      const filteredChars = state.items
        .map((item) => {
          // debugger;
          if (item) {
            return item;
          } else {
            console.log('nada aqui');
          }
        })
        .filter((item) => {
          console.log(item.name, action);
          return item.name.toLowerCase() === action.text.toLowerCase();
        });
      return {
        filteredChars,
      };
    }
    default:
      return state;
  }
};
