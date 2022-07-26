import { NavLink, useLocation, useParams } from "react-router-dom"
import React from 'react';
import ChevronRight from "../../components/icon/chevronRight";

const BreadCrumbs = () => {
    const location = useLocation();
    return (
        <div className="eog-breadcrumbs">
            <NavLink to="/" className="eog-breadcrumbs__item">Report Templates</NavLink>
            {location.pathname === '/standard-report' && <>
                <ChevronRight className="mx-1"/>
                <NavLink to="/standard-report" className="eog-breadcrumbs__item">Standard Report</NavLink>
            </>}
        </div>
    );
}

export default BreadCrumbs;
