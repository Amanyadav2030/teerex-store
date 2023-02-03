export const getProductsData = async () => {
    let res = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
    let data = res.json();
    return data;
}  