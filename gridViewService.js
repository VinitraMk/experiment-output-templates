import packageJson from './config.json';
//const packageJson = require('./config.json')
import fs from 'fs';

const buildGridView = () => {
    //const fs = require('fs')
    const experimental_logs_path = packageJson.eog.experiment_logs_directory;
    const visualizations_path = packageJson.eog.visualizations_directory;
    const experimental_log_files = fs.readdirSync(experimental_logs_path);
    const visualization_files = fs.readdirSync(visualizations_path);
    let allFiles = [];
    for(let i = 0; i < experimental_log_files.length; i++) {
        const numReg = /[^0-9]/g
        const logFile = experimental_log_files[i];
        const dateString = logFile.replace(numReg, '');
        const fileNameSubstr = `${dateString.substr(0, 8)}-${dateString.substr(8)}`;
        const visFile = visualization_files.filter(x => x.includes(fileNameSubstr))[0];
        if (visFile !== null || visFile !== undefined) {
            var obj = {
                experimental_log_path: logFile,
                visualization_file_path: visFile
            }
            allFiles.push(obj);
        }
    }
    const rootElement = document.getElementById('root');
    allFiles.forEach(x => {
        const p1 = document.createElement('p')
        p1.innerHTML = `${x.experimental_log_path}: ${x.visualization_file_path}`;
        rootElement.appendChild(p1);
    })
}


buildGridView()