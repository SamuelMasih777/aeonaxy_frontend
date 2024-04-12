export const SignUpReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIAL_STATE":
      return {
        ...state,
      };
    case "NAME":
      return {
        ...state,
        name: payload,
      };
    case "USERNAME":
      return {
        ...state,
        username: payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "IMAGE":
      return {
        ...state,
        image: payload,
      };
    case "DEFAULT_IMAGE":
      return {
        ...state,
        image: payload,
      };
    case "SELECT_OPTION":
      return {
        ...state,
        selectedOptions: payload,
      };
    case "LOAD_DATA":
      return {
        ...state,
        ...payload,
      };
    case "LOCATION":
      return {
        ...state,
        location: payload,
      };
    case "CLEAR_DATA":
      return {
        ...state,
        name: "",
        username: "",
        email: "",
        password: "",
        image: "",
        location: "",
        accessToken: "",
        selectedOptions: [],
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: payload,
      };
    default:
      return state;
  }
};
