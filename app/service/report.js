const Service = require('egg').Service;

class ReportService extends Service {
    async find(url) {
        const chart = await this.ctx.curl(url,{method:'GET',dataType:'json'});
        const result=chart.data;
        // console.log(chart.data);
        return result;
    }
}
module.exports = ReportService;
