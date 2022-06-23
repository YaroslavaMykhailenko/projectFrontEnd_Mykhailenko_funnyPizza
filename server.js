const cors = require('cors')
const express = require("express")

const Pizza = require('./models/pizzaModel')

const app = express()
app.use(cors())
const db = require("./db")

app.use(express.json())
const path = require('path')
const pizzasRoute = require('./routes/pizzasRoute')
const UserRoute = require('./routes/userRoute')
const ordersRoute  = require("./routes/ordersRoute")



app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', UserRoute)
app.use('/api/orders/', ordersRoute)

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static('client/build'))
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, '/client/build/index.html'))
    })

}


const port = process.env.PORT || 5000;
app.listen(port, () => 'Server running on port port');