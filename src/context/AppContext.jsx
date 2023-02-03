import { createContext, useReducer, useState, useEffect } from "react";
import { getProductsData } from "../utils/api";
import { funSuccessProducts } from "./actionCreators";
import { reducer } from "./reducer";

export const AppContext = createContext();
const initalState = {
    loading: false,
    error: false,
    products: [],
    cartItems: []
};
export function AppContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initalState);
    const [filtered, setFiltered] = useState({
        color: null,
        gender: null,
        price: null,
        type: null
    })
    useEffect(() => {
        AllFilters()
    }, [filtered]);
    //-----This function will check which value should have to filter-----
    const handleFilter = (value) => {
        if (value[1] == 'color') {
            setFiltered({
                ...filtered,
                color: value[0]
            })
        }
        if (value[1] == 'type') {
            setFiltered({
                ...filtered,
                type: value[0]
            })
        }
        if (value[1] == 'gender') {
            setFiltered({
                ...filtered,
                gender: value[0]
            })
        }
        if (value[1] == 'price') {
            setFiltered({
                ...filtered,
                price: value[0]
            })
        }
    };
    //-----This function will filtered  value that is checked by handleFilter()-----
    const AllFilters = async () => {
        let newProducts = await getProductsData();
        if (filtered.color != null) {
            newProducts = newProducts.filter((el) => el.color == filtered.color);
        }
        if (filtered.gender != null) {
            newProducts = newProducts.filter((el) => el.gender == filtered.gender);
        }
        if (filtered.type != null) {
            newProducts = newProducts.filter((el) => el.type == filtered.type);
        }
        if (filtered.price != null) {
            newProducts = newProducts.filter((el) => {
                if (filtered.price == 'up250') {
                    return el.price <= 250;
                } else if (filtered.price == 'up450') {
                    return el.price > 250 && el.price <= 450
                } else if (filtered.price == 'more450') {
                    return el.price > 450;
                }
            });
        }
        dispatch(funSuccessProducts(newProducts));
    }
    const value = { state, dispatch, handleFilter };
    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )

}