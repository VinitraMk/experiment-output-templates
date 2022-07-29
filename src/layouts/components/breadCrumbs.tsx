import { NavLink, useLocation, useParams } from "react-router-dom"
import React from 'react';
import ChevronRight from "../../components/icon/chevronRight";

const BreadCrumbs = () => {
    const location = useLocation();
    return (
        <div className="eog-breadcrumbs">
            <NavLink to="/" className="eog-breadcrumbs__item">Report Templates</NavLink>
            {location.pathname.startsWith('/standard-report') && <>
                <ChevronRight className="mx-1"/>
                <NavLink to="/standard-report" className="eog-breadcrumbs__item">Standard Report</NavLink>
            </>}
            {location.pathname === '/standard-report-view' && <>
                <ChevronRight className="mx-1"/>
                <NavLink to="/standard-report-view" className="eog-breadcrumbs__item">View Report</NavLink>
            </>}
        </div>
    );
}

export default BreadCrumbs;
