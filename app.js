require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const router = require('./routes/products')

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products',router)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const PORT = process.env.PORT || 3000

const start = async (PORT) =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,()=>{
            console.log(`Sever is listening at PORT ${PORT}`)
        })
    }
    catch(err){
        console.log(err)
    }
}

start(PORT)