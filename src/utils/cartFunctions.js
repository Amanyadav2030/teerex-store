// -----This function will check product exists in cart or not-----
export const checkCartItem = (id,cartItems) => {
    let check = cartItems.filter((el) => el.id == id);
    return check.length == 0 ? false : true
}
// -----This function will displayquantity of product in cart-----
export const displayQuantity = (id,cartItems) => {
    let item = cartItems.filter((el) => el.id == id);
    return item[0].quantity;
}
// -----This function will check if quantity is exceeded or not-----
const checkExceeded = (quantity, id, products) => {
    let check = products.filter((el) => el.id == id && el.quantity == quantity);
    return check.length == 1 ? true : false;
}
// -----This function will update quantity -----
export const updateCart = (id,value,cartItems,products)=>{
    let updated = cartItems?.map((el) => {
        if (id == el.id) {
            if (value == -1 && el.quantity == 1) {
                return el;
            } else if (value == -1) {
                return { ...el, quantity: el.quantity - 1 };
            } else if (value == 1) {
                if (checkExceeded(el.quantity,id,products)) {
                    alert("Item limit is exceeded");
                    return el;
                } else {
                    return { ...el, quantity: el.quantity + 1 };
                }
            }
        } else {
            return el;
        }
    })
    return updated
}