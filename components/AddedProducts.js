import { createContext, useContext, useState } from "react";
const AddedProductsContext = createContext({
    addedProducts: [],
    setAddedProducts: (products) => { },
});
export const useAddedProducts = () => useContext(AddedProductsContext);

export default function AddedProducts({ children }) {
    const [addedProducts, setAddedProducts] = useState([]);
    const value = { addedProducts, setAddedProducts };
    return (
        <AddedProductsContext.Provider value={value}>
            {children}
        </AddedProductsContext.Provider>
    );
}