module.exports.internalServerError = (err,moduleName)=>{
    // console.log(err);
    return {error:`${err}`,Message:`${moduleName} Internal Server Error.`}
}