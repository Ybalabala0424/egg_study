module.exports =() =>{
    return async function getUrl(ctx,next) {
        ctx.body = {
            time:`${new Date().toLocaleString()}`,
            url: `${ctx.href}`,
            query:`${ctx.queries}`
        };
        // console.log(ctx.queries);
        await next();
    }
}
