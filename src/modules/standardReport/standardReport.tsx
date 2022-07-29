import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getModelConfig, getPackageDetails } from '../../services/apiService';
import { PackageDetails } from '../../models/PackageDetails';
import { ModelConfig } from '../../models/ModelConfig';

const StandardReport = (props: any) => {
    const [configJson, setConfig] = useState(new ModelConfig());
    const [packageJson, setPackageConfig] = useState(new PackageDetails());
    const navigate = useNavigate()
    const buildReport = () => {
        navigate('/standard-report-view')
    }
    useEffect(() => {
        getModelConfig().then(res => {
            setConfig(res);
            setPackageConfig(res.erg);
        });
    }, [])
    
    return (<>
        <h3 className='title-3 mb-2'>Report Layout</h3>
        <p>{configJson.view}</p>
        <h3 className='title-3 mb-2'>Model Details</h3>
        {configJson.model_keys.map((x: any) => <p className='ma-0'>{x}</p>)}
        <h3 className='title-3 my-2'>Model Details Directories</h3>
        <div>
            <dt className='eog-list-data__label'>Experimental Logs Directory</dt>
            <dd className='eog-list-data__value'>
            {packageJson.experiment_logs_directory}
            </dd>
        </div>
        <div>
            <dt className='eog-list-data__label'>Output Directory</dt>
            <dd className='eog-list-data__value'>
            {packageJson.output_directory}
            </dd>
        </div>
        <div>
            <dt className='eog-list-data__label'>Visualizations Directory</dt>
            <dd className='eog-list-data__value'>
            {packageJson.visualizations_directory}
            </dd>
        </div>
        <span className='float-l d-iblock mt-4'>
            <button className='eog-btn eog-btn-primary' onClick={buildReport}>View Report Template</button>
        </span>
    </>);
}

export default StandardReport;
