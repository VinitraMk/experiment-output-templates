import React, { useEffect, useState } from 'react';
import { ModelConfig } from '../../../models/ModelConfig';
import { ModelDetails } from '../../../models/ModelDetails';
import { getModelConfig, getModelDetails } from '../../../services/apiService';

const GridView = () => {
    const [configJson, setConfig] = useState(new ModelConfig());
    const [allRunsDetails, setAllRunsDetails] = useState([]);
    useEffect(() => {
        getModelConfig().then(res => {
            setConfig(res);
        });
    }, [])
    const files_list = configJson.files_list;
    return (
        <>
            <h4 className='title-4'>Experimental Outputs</h4>
            <div className='eog-grid'>
                {files_list.map((x: any) => {
                    let detailsJson = {} as any;
                    getModelDetails(x.details_file).then((res: any) => {
                        allRunsDetails.push(res);
                        setAllRunsDetails(allRunsDetails);
                    });
                    //const imgSrc = require(`/images/${x.image_file}`)
                    return (
                        <div className='eog-card-img'>
                            <img className='eog-card-img__img' src={`/images/visualizations/${x.image_file}`}/>
                            {configJson.model_keys.map((y: any) => (<label className='eog-card-img__caption'>{detailsJson[y]}</label>))}
                            {/*<label className='eog-card-img__caption'>{detailsJson["final_accuracy"]}</label>
                            <label className='eog-card-img__caption'>{detailsJson["final_accuracy"]}</label>
                        <label className='eog-card-img__caption'>{detailsJson["final_accuracy"]}</label>*/}
                        </div>
                    )
                    })}
            </div>
        </>
    )
}

export default GridView;