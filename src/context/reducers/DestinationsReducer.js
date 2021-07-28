import { DETAILS } from "../types/DestinationType";

const DestinationsReducer = (state, action) => {
  const { type, payload } = action;
  if (type === DETAILS) {
    const destination = state.destinations.find(
      (destination) => destination.id === parseInt(payload)
    );

    return {
      ...state,
      details: destination,
    };
  }
  //
  else {
    return state;
  }
};

export default DestinationsReducer;
