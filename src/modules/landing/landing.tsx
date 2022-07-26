import React from 'react';
import standardReport from '../../assets/images/standard-report.png';
import { RouterProps, useNavigate } from 'react-router-dom';

type LandingProps = {};

const Landing = (props: LandingProps) => {
    const navigate = useNavigate();

    const handleStandardReportClick = () => {
        navigate('/standard-report');
    }

    return (
        <>
            <div className='eog-card' onClick={handleStandardReportClick}>
                <img src={standardReport} className='eog-card__img'/>
                <label className='eog-card__caption'>Standard Report</label>
            </div>
        </>
    )
}

export default Landing;