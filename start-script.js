#! /usr/bin/env node
const {exec} = require('child_process')
const fs = require('fs')
const { dirname, resolve } = require('path');
const appDir = dirname(require.main.filename);
const node_modules_index = appDir.indexOf('node_modules');
const project_root = node_modules_index !== -1 ? appDir.substring(0, node_modules_index - 1) : appDir;
const reports_build_path = resolve(__dirname, './reports');
const build_files = fs.readdirSync(reports_build_path);
console.log('Copying files to project root', project_root)
build_files.forEach(x => {
    if (x.includes('.')) {
        console.log('\tCopying', x)
        if (x === 'eogconfig.json') {
            fs.copyFileSync(`${project_root}/eogconfig.json`, `${project_root}/reports/eogconfig.json`)
        } else {
            fs.copyFileSync(`${reports_build_path}/${x}`, `${project_root}/reports/${x}`)
        }
    } else if (x === 'images') {
        const image_assets = fs.readdirSync(`${reports_build_path}/images`);
        image_assets.forEach(y => {
            console.log('\tCopying', y)
            fs.copyFileSync(`${reports_build_path}/images/${y}`, `${project_root}/reports/images/${y}`)
        })
    }
});
