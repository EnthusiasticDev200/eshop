import express from "express"

import { createProduct, getProduct, searchProductByTitle } from "../controller/product.js"


const router = express.Router()



//product route
router.post("/product/create", createProduct)

router.get("/product/:id", getProduct)

router.get("/product/search", searchProductByTitle)




export default router

