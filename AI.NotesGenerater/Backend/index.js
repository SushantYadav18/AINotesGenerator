import express from 'express'
import dotenv from   "dotenv"
import connectDb from './utils/connectDb.js'

dotenv.config()

const app = express()

const PORT = 8000           

app.get('/',(req,res)=>{
    res.json({message:"Hello World"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDb()
})

