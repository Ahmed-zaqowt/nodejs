
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path :'config.env'});
const ApiError = require('./utils/ApiError');
const globalError = require('./app/middlewares/errorMiddleware');
const dbconnection = require('./app/Config/databaes');
const cate = require('./routes/task');
const auth = require('./routes/user')
dbconnection();


const app = express();
// middellware 

app.use(express.json());

if(process.env.NODE_ENV == "development"){
    app.use(morgan('dev'));
    console.log(`mode : ${process.env.NODE_ENV}`)
} 



// routes 
app.use("/api/task" , cate);
app.use("/api/auth" , auth);


app.all("*", (req ,res, next) =>{
  next(new ApiError(`Con't found this ruote ${req.originalUrl}` , 400))
})
app.use(globalError)


const PORT = process.env.PORT || 8000 ;
const server = app.listen(PORT , () => {
    console.log('App Running On The Port');
});


process.on('unhandledRejection' , (err) => {
    console.log(`Unhandled Rejection Errors : ${err.name} | ${err.message}`);
    server.close(()=>{
        console.log(`Shatting Down ... `);
        process.exit(1);
    })

});













