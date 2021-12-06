const express =require('express')
const app =express()

const getRouter = require('./routes/index')
app.use(express.json());

app.use('/',getRouter)
app.listen(4000,()=>{
console.log('App listen on port 4000')
})
