import React from 'react';
import Midbar from '../components/Midbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard(){
    return(
        <div className="pageContainer d-flex">
            <Sidebar/>
            <Midbar/>
        </div>
    );
}