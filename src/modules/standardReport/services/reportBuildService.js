import packageJson from '../../../../package.json';
import reportJson from '../../../assets/data/model_details.json';
//import { existsSync } from 'fs';
import http from 'stream-http';

const reportBuildService = (function() {

    const fs = require('fs')

    const buildReportsDirectory = reportPath => {
        const cssPath = `${reportPath}/custom.css`;
        const reportOutPath = `${reportPath}/standard-report.html`;
        const serviceOutPath = `${reportPath}/gridViewService.js`;
        fs.copyFileSync(`${packageJson.eog.report_template_directory}/custom.css`, cssPath);
        fs.copyFileSync(`${packageJson.eog.report_template_directory}/standard-report.html`, reportOutPath);
        fs.copyFileSync('./gridViewService.js', serviceOutPath);
    }

    const serveReport = reportPath => {
        const outputPath = `${reportPath}/standard-report.html`;
        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'content-type': 'text/html' })
            fs.createReadStream(outputPath).pipe(res)
        })

        server.listen(process.env.PORT || 5000)
    }

    const buildReport = () => {
        const reportPath = packageJson.eog.report_output_directory;
        //fs.mkdir(reportPath)
        //buildReportsDirectory();
        //const configJsonPath = `${reportPath}/config.json`;
        //fs.writeFileSync(configJsonPath, JSON.stringify(reportJson), err => {
            //if (err) throw err;
        //})
        //serveReport(reportPath);
    }
    return {
        buildReport: () => buildReport()
    }
})();

export { reportBuildService };
