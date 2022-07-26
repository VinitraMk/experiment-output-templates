import packageJson from '../../../package.json';
import React from 'react';
import configJson from '../../assets/data/model_details.json';
import { reportBuildService } from './services/reportBuildService';

const StandardReport = (props: any) => {

    const buildReport = () => {
        reportBuildService.buildReport();
    }
    return (<>
        <h3 className='title-3 mb-2'>Report Layout</h3>
        <p>{configJson.view}</p>
        <h3 className='title-3 mb-2'>Model Details</h3>
        {configJson.model_keys.map(x => <p className='ma-0'>{x}</p>)}
        <h3 className='title-3 my-2'>Model Details Directories</h3>
        <div>
            <dt className='eog-list-data__label'>Experimental Logs Directory</dt>
            <dd className='eog-list-data__value'>
            {packageJson.eog.experiment_logs_directory}
            </dd>
        </div>
        <div>
            <dt className='eog-list-data__label'>Output Directory</dt>
            <dd className='eog-list-data__value'>
            {packageJson.eog.output_directory}
            </dd>
        </div>
        <div>
            <dt className='eog-list-data__label'>Visualizations Directory</dt>
            <dd className='eog-list-data__value'>
            {packageJson.eog.visualizations_directory}
            </dd>
        </div>
        <span className='float-l d-iblock mt-4'>
            <button className='eog-btn eog-btn-primary' onClick={buildReport}>Build Report</button>
        </span>
    </>);
}

export default StandardReport;
