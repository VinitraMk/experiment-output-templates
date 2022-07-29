const packageJson = require('./package.json');
const reportJson = require('./src/assets/data/model_details.json');
const fs = require('fs')
const http = require('http');
const nstatic = require('node-static');
const fileServer1 = new nstatic.Server('./dist/reports')
const fileServer2 = new nstatic.Server('./experimental_logs')
const fileServer3 = new nstatic.Server('./visualizations')

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
        fileServer1.serve(req, res);
        fileServer2.serve(req, res);
        fileServer3.serve(req, res);
    })

    server.listen(process.env.PORT || 5000)
}

const buildReport = () => {
    const reportPath = packageJson.eog.report_output_directory;
    if (!fs.existsSync(reportPath)) {
        fs.mkdir(reportPath, err => {
            if (err) throw err
        });
    }
    
    //buildReportsDirectory();
    const configJsonPath = `${reportPath}/config.json`;
    fs.writeFileSync(configJsonPath, JSON.stringify(reportJson), err => {
        if (err) throw err;
    })
    serveReport(reportPath);
}

buildReport();