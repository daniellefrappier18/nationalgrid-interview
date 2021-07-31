import React from 'react';
import Filter from './Filter';

function Sidebar() {
        
    return (
        <div className="sidebar" style={{ float:'right', height: '100vh', width: '28%' }}>
            <h1>Job Filters</h1>
            <Filter/>
        </div>
    );
}

export default Sidebar;