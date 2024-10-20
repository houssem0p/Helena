import { createContext } from "react";
import { products } from "../assets/assets"; // Ensure the path and data are correct

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10; 

    const value = {
        products, // Products from the imported file
        currency,
        delivery_fee
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
