'use client';

// Imports
// ------------
import React, { useRef, useEffect, useState } from 'react';

// Styles
// ------------
import { Jacket, Container } from './styles';

// Component
// ------------
const Visualisation = ({ events }) => {
    // NOTE • Data
    const hdsSize = events ? events.square_width : 32;
    const shares = events ? events.shares : null;

    // NOTE • Refs
    const containerRef = useRef(null);

    // NOTE • States
    const [activeCoords, setActiveCoords] = useState([]);

    // NOTE • Functions
    useEffect(() => {
        if(shares) {
            setActiveCoords(shares);
        }
    }, [events]);

    const isActive = (x, y) => {
        return activeCoords.some(coord => coord[0] === x && coord[1] === y);
    };

    const renderGrid = (gridCount) => {
        const rows = [];
        for (let i = 0; i < gridCount; i++) {
            const cols = [];
            for (let j = 0; j < gridCount; j++) {
                const key = `${i}-${j}`;
                cols.push(
                    <span key={key} className={`grid-item ${isActive(i, j) ? 'active' : ''}`}></span>
                );
            }
            rows.push(
                <div key={i} className="row">
                    {cols}
                </div>
            );
        }
        return rows;
    };

    return (
        <Jacket>
            <Container ref={containerRef}>{renderGrid(hdsSize)}</Container>
        </Jacket>
    );
}

export default Visualisation;
