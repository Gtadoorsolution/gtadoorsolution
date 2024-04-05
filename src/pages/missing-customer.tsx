import React from 'react';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
};

const contentStyle = {
    textAlign: 'center',
};

export default function MissingCustomer() {
    return (
        <div style={containerStyle}>
            <div>
                <img src='/websiteForgonen.webp' alt="websiteForgonen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                <div>The client of the website disappeared without a trace.</div>
            </div>
        </div>
    );
}
