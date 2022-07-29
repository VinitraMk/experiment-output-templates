#! /usr/bin/env node
const fs = require('fs')
const { dirname, resolve } = require('path');
const appDir = dirname(require.main.filename);
const node_modules_index = appDir.indexOf('node_modules');
const project_root = node_modules_index !== -1 ? appDir.substring(0, node_modules_index - 1) : appDir;
const reports_build_path = resolve(__dirname, './reports');
const build_files = fs.readdirSync(reports_build_path);
const { execSync, exec } = require('child_process')
const config = require(`${project_root}\\ergconfig.json`);

// Build exp log files
const exp_logs = fs.readdirSync(`${project_root}/${config.erg["experiment_logs_directory"]}`)
const vis_files = fs.readdirSync(`${project_root}/${config.erg["visualizations_directory"]}`)
let all_files = []
exp_logs.forEach(fn => {
    const re = /\d/
    const ob = re.exec(fn);
    let filesubstr = '';
    if (ob !== null && ob !== undefined) {
        filesubstr = fn.substring(0, ob.index + 15);
        visfn = vis_files.filter(x => x.includes(filesubstr))[0];
        if (visfn !== null && visfn !== undefined && visfn !== '') {
            obj = {
                'details_file': fn,
                'image_file': visfn
            }
            all_files.push(obj)
        }
    }
})

// preparing ergconfig
config['files_list'] = all_files;
fs.writeFileSync(`${project_root}\\ergconfig.json`, JSON.stringify(config));
    
// copy all files
console.log('Copying files to project root', project_root)
console.log('\tCopying ergconfig.json')
fs.copyFileSync(`${project_root}/ergconfig.json`, `${project_root}/reports/ergconfig.json`)

build_files.forEach(x => {
    if (x.includes('.') && x !== 'ergconfig.json') {
        console.log('\tCopying', x)
        fs.copyFileSync(`${reports_build_path}/${x}`, `${project_root}/reports/${x}`)
    } else if (x === 'images') {
        const image_assets = fs.readdirSync(`${reports_build_path}/images`);
        image_assets.forEach(y => {
            console.log('\tCopying', y)
            fs.copyFileSync(`${reports_build_path}/images/${y}`, `${project_root}/reports/images/${y}`)
        })
    }
});

console.log('\nStartin app at port 5000 from ./reports')
const cmd = `python -m http.server 5000 -d ${project_root}/reports`
//const outlog = execSync(cmd).toString();
//console.log(outlog)
exec(cmd)