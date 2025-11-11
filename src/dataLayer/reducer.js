// define all the application level and define action to make changes to the state

export const initialState = {
    basket : []  
}

// selector ??
// sum up basket 
export const getBaskeTotal = basket => {
    return basket?.reduce( (account, item) => item.price + account, 0 )
}

const reducer = (state, action) =>{
// state is the current state of data layer, while action is to make changes to the state
    console.log(" Reducer received:", action); 

        switch(action.type) {
            case "ADD_TO_BASKET":
                console.log(" Adding to basket:", action.item);
                return {
                    ...state,
                    basket : [...state.basket, action.item], //DNT ...action.item bcos its not [] but {}
                }
            case "REMOVE_FROM_BASKET" :
                // removal is based on targeting the ID of the product
                const index = state.basket.findIndex(
                    (baskekItem) => baskekItem.id === action.id
                );
                let newBasket = [...state.basket]
                if( index >=0){
                    newBasket.splice(index, 1) //??
                } else{
                    console.warn(`Can't remove product with id : ${action.id}`)
                }
                return {
                    ...state,
                    basket : newBasket
                }
        default : return state
    }
}

export default reducer