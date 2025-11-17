import { Db, MongoCLient } from "mongodb"
import dotenv from "dotenv"


dotenv.config()

const dbNmae = process.env.DB_NAME


export async function connectDb(){
    const uri = process.env.MONGODB_STRING
    const client = new MongoCLient(uri)
    await client.conect()
    console.log("DB connected successfully")
}


// create collection
export async function productCollection(){
    const database = await connectDb()
    return database.collection('products')
}

