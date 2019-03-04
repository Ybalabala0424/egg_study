module.exports=app=>{
    app.on('error',(err,ctx)=>{
        console.log(err);
    });
    app.on('request',ctx=>{
        console.log("Have a request!");
    });
}
