'use strict';

const Controller = require('egg').Controller;

class CalculatorController extends Controller {
    async match() {
        const {ctx,service}=this;
        const str=ctx.query.str;
        const finalStr=str.replace(' ','+');
        console.log(finalStr);
        const result=eval(finalStr);
        ctx.body = result;
    }
}

module.exports = CalculatorController;
