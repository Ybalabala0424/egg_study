'use strict';

const Controller = require('egg').Controller;

class WeatherController extends Controller{
    async report(){
        const {ctx}=this;
        const geturl=ctx.originalUrl;
        let array=geturl.split('=');
        let name=array[1];
        // console.log(name);
        const url=`http://v.juhe.cn/weather/index?cityname=`+name+`&dtype=&format=&key=15448dc543b57c3eb503a23803f3eb6d`;
        const result=await ctx.service.report.find(url);
        ctx.body = result;
    }
}
module.exports = WeatherController;
