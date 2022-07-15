const express=require("express")

/* const Pizza=require('./models/pizzaModel') */


const app=express();

const db=require('./db')

app.use(express.json());

const pizzaRoute=require('./routes/pizzasRoute')
const userRoute=require('./routes/userRoute')
const ordersRoute=require('./routes/ordersRoute')

app.use('/api/pizzas',pizzaRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

app.get("/",(req, res)=>{
    res.send("Server running on port:" +port);
});



const port=process.env.PORT||5000;
app.listen(port,()=>`Server running on port ${port}`)