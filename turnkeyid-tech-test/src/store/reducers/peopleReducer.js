const initialState = {
  people: [],
  person: {}
};

function peopleReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type === 'people/setPeople') {
    return { ...state, people: payload };
  } else if (type === 'person/setPerson') {
    return { ...state, person: payload };
  }

  return state;
}

export default peopleReducer;