import { useState } from 'react';

const initialState = {
    cart: [],
    lastIdRemoved: -1,
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        })
    };

    const removeFromCart = (payload) =>{
        // setState({
        //     ...state,
        //     cart: state.cart.filter((_, index) => index != indexValue)
        // })
        const idToDelete = state.cart.findIndex(({id}) => id === payload.id);

        if(idToDelete > -1){
            let cartUpdated = [...state.cart];
            cartUpdated.splice(idToDelete, 1); /*Empiece desde el id a elinar, elimine "1" */
            setState({
                ...state,
                cart: [...cartUpdated],
                lastIdRemoved: payload.id,
            })
        }
    }

    return {
        state, 
        addToCart,
        removeFromCart
    }
}

export default useInitialState;