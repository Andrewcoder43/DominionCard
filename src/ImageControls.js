import React, { useState, useEffect } from 'react';

const ImageControls = ({ onUpdateImage }) => {
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [zoom, setZoom] = useState(100);

    useEffect(() => {
        onUpdateImage({ x: positionX, y: positionY, scale: zoom / 100 });
    }, [positionX, positionY, zoom, onUpdateImage]);

    const handleReset = () => {
        setPositionX(0);
        setPositionY(0);
        setZoom(100);
    };

    return (
        <div className="image-controls">
            <div>
                <label htmlFor="position-x">Position X:</label>
                <input
                    type="range"
                    id="position-x"
                    min="-100"
                    max="100"
                    value={positionX}
                    onChange={(e) => setPositionX(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="position-y">Position Y:</label>
                <input
                    type="range"
                    id="position-y"
                    min="-100"
                    max="100"
                    value={positionY}
                    onChange={(e) => setPositionY(Number(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="zoom">Zoom:</label>
                <input
                    type="range"
                    id="zoom"
                    min="100"
                    max="300"
                    value={zoom}
                    onChange={(e) => setZoom(Number(e.target.value))}
                />
            </div>
            <button onClick={handleReset}>Reset Image</button>
        </div>
    );
};

export default ImageControls;