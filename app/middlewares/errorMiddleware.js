const globalError = (err , req ,res ,next) => {
    err.statusCode = err.statusCode || 500 ;
    err.status = err.status || 'error' ;
    if(process.env.NODE_ENV == "development"){
        sendErrorForDev(err , res);
    }else{
        sendErrorForProd(err ,res);
    }
    
}
const sendErrorForDev = (err , res) =>{
    return res.status( err.statusCode).json({
        message : err.message ,
        status : err.status ,
        statusCode : err.statusCode ,
        stack: err.stack ,
    });
}

const sendErrorForProd = (err , res) =>{
    return res.status( err.statusCode).json({
        message : err.message ,
        status : err.status ,
    });
}
module.exports = globalError ;