export const GET_PRODUCTS_LOADING ={type:"GET_PRODUCTS_REQUEST"};
export const GET_PRODUCTS_ERROR ={type:'GET_PRODUCTS_ERROR'};
export const funSuccessProducts =(data)=>{ 
    return{
        type:"GET_PRODUCTS_SUCCESS",
        payload:data
    }
}  
export const funAddSuccessCart =(data)=>{ 
    return{
        type:"ADD_CART_SUCCESS",
        payload:data
    }
}
export const funUpdateSuccessCart =(data)=>{ 
    return{
        type:"UPDATE_CART_SUCCESS",
        payload:data
    }
}
