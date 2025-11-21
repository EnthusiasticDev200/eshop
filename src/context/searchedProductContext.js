import { createContext } from "react";

// create context
const SearchedProductContext = createContext({
    product : null,
    setProduct : () => {}
})




export default SearchedProductContext