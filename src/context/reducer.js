export const reducer = (state, action) => {
    switch (action.type) { 
      case "GET_PRODUCTS_LOADING":
        return {
          ...state,
          loading: true,
        };
        case "GET_PRODUCTS_ERROR":
        return {
            ...state,
            loading: false,
            error:true,
        };
        case "GET_PRODUCTS_SUCCESS":
          return {
              ...state,
              loading: false,
              error:false,
              products:[...action.payload],   
          };
        case "ADD_CART_SUCCESS":
          return {
              ...state,
              loading: false,
              error:false,
              cartItems:[...state.cartItems,action.payload]
          };
        case "UPDATE_CART_SUCCESS":
          return {
              ...state,
              loading: false,
              error:false,
              cartItems:[...action.payload]
          };
      default:
        return state;
    }
  };