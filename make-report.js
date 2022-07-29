
const images_dest = './build/images';
const data_dest = './build/data';
const packageJson = require('./package.json');
const fs = require('fs');
const path = require('path');
const data_src_dir = path.resolve(__dirname, packageJson.eog.experiment_logs_directory);
const images_src_dir = path.resolve(__dirname, packageJson.eog.visualizations_directory);

const det_files_list = fs.readdirSync(data_src_dir);
const img_files_list = fs.readdirSync(images_src_dir);

det_files_list.forEach(x => {
    console.log('src file name', x);
    fs.copyFileSync(`${data_src_dir}/${x}`, `${data_dest}/${x}`);
});
img_files_list.forEach(x => {
    console.log('img file name', x);
    fs.copyFileSync(`${images_src_dir}/${x}`, `${images_dest}/${x}`);
});
