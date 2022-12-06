export const layerReducer = (initialState = "", action) => {
  switch (action.type) {
    case "case-wind-speed":
      return [
        ...initialState,
        action.payload,
        console.log("desde layerReducer", action.payload),
      ];

    case "case-precipitation":
      return [
        ...initialState,
        action.payload,
        console.log("desde layerReducer", action.payload),
      ];

    case "case-temperature":
      return [
        ...initialState,
        action.payload,
        console.log("desde layerReducer", action.payload),
      ];

    default:
      return initialState;
  }
};
