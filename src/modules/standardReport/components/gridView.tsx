import React from 'react';
import imgSrc from '../../../assets/data/alexnet_26072022-122806_loss_plot.png';
import detailsJson from '../../../assets/data/alexnet_26072022-122806.json';

const GridView = () => {
    const files_list = [0, 0, 0, 0, 0]
    return (
        <>
            <h4 className='title-4'>Experimental Outputs</h4>
            <div className='eog-grid'>
                {files_list.map(x => (
                    <div className='eog-card-img'>
                        <img className='eog-card-img__img' src={imgSrc}/>
                        <label className='eog-card-img__caption'>{detailsJson["final_accuracy"]}</label>
                        <label className='eog-card-img__caption'>{detailsJson["final_accuracy"]}</label>
                        <label className='eog-card-img__caption'>{detailsJson["final_accuracy"]}</label>
                        <label className='eog-card-img__caption'>{detailsJson["final_accuracy"]}</label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GridView;