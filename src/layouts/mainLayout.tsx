import Header from './components/header';
import React, { ReactElement } from 'react';
import BreadCrumbs from './components/breadCrumbs';

interface MainLayoutProps {
    children: ReactElement
}

const MainLayout = (props: MainLayoutProps) => {
    return (<div className="h-100">
        <Header/>
        <BreadCrumbs/>
        <main className='eog-main'>
            {props.children}
        </main>
    </div>);
}

export default MainLayout;
