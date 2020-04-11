import produce from 'immer';

const INITIAL_STATE = {
  delivery: [],
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
    }
  });
}
