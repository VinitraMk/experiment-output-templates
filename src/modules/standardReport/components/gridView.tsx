import React, { useEffect, useState } from 'react';
import { ModelConfig } from '../../../models/ModelConfig';
import { getModelConfig, getModelDetails } from '../../../services/apiService';
import { createNewArray } from '../../../services/utilities';

const GridView = () => {
    const [configJson, setConfig] = useState(new ModelConfig());
    const [allRunsDetails, setAllRunsDetails] = useState([]);
    useEffect(() => {
        getModelConfig().then(res => {
            setConfig(res);
            res.files_list.forEach((x: any) => {
                getModelDetails(x.details_file).then(res => {
                    allRunsDetails.push({ detailsJson: res, image_file: x.image_file} );
                    setAllRunsDetails(createNewArray(allRunsDetails));
                });
            })
        });
    }, [])
    return (
        <>
            <h4 className='title-4'>Experimental Outputs</h4>
            <div className='eog-grid'>
                {
                    allRunsDetails.map((x: any, i: number) => {
                        const detailsJson = x.detailsJson;
                        return (
                            <div key={`gridrow-${i}`} className='eog-card-img'>
                                <img key={`gridrowimg-${i}`} className='eog-card-img__img' src={`/images/${x.image_file}`}/>
                                {configJson.model_keys.map((y: any) => {
                                    const modelParams = JSON.parse(detailsJson['model_params'])
                                    if (y === 'final_accuracy' || y === 'average_loss') {
                                        return (<label key={`gridrowlabel-${y}`} className='eog-card-img__caption'>{y}: {detailsJson[y]}</label>)
                                    } else {
                                        return (<label key={`gridrowlabel-${y}`} className='eog-card-img__caption'>{y}: {modelParams[y]}</label>)
                                    }
                                })}
                            </div>
                        );
                    })}
            </div>
        </>
    )
}

export default GridView;