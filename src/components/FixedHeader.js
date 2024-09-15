import "../css/Home3D.css";

import React from 'react';

import CanvasPicture from '../canvas/PictureCanvas';

const FixedHeader = () => {
    return (
        <header className="App-header">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "4%"
                }}>
                <CanvasPicture />
                <h2
                    className="title-header">TCET ACM</h2>
            </div>
            <div style={{
                pointerEvents: 'auto',
                paddingLeft: "25px",
                paddingRight: "4%"
            }}>
               
            </div>
        </header>
    )
}

export default FixedHeader;
