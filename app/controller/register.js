'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
    async regi() {
        const { ctx} = this;
        const userid=ctx.query.userid;
        const password=ctx.query.password;
        let list=[];
        list.push(userid,password);
        // console.log(list);
        const result=await ctx.service.regi.add(list);
        ctx.body = result;
    }
}

module.exports = RegisterController;
