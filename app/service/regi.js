const Service = require('egg').Service;

class RegisterService extends Service {
    async add(list) {
        const result = await this.app.mysql.insert('message',{userid:list[0],password:list[1]});
        console.log(result);
        return result;
    }
}

module.exports = RegisterService;
