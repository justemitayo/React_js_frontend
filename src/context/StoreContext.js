import { createContext, useEffect, useState } from "react";
import { food_list } from "../assests/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});

    const addToCart = (termId) => {
        if(!cartItem[termId]){
            setCartItem((prev) => ({...prev,[termId]:1}))
        }
        else{
            setCartItem((prev) => ({...prev,[termId]:prev[termId]+1}))
        }
    }

    const removeFromCart = (termId) =>{
        setCartItem((prev) => ({...prev,[termId]:prev[termId]-1}))
    }

    const getTotalCart = () => {
        let totalAmount = 0;
        for (const term in cartItem)
            {
                if (cartItem[term] >0)
                    {
                        let itemInfo = food_list.find((product) => product._id === term);
                        totalAmount += itemInfo.price* cartItem[term];          
                    }
            } 
            return(
                totalAmount
            )
    }    

    useEffect (() => {
        console.log(cartItem);
    }, [cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider