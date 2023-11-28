import React from 'react';

const CustomHeader = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="./CMSlogo.jpeg" alt="Bot Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            <span>Your Bot's Title</span>
        </div>
    );
};

export default CustomHeader;
