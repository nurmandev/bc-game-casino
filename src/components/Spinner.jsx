import React from 'react';
import './Spinner.css'; // Import the CSS file for the spinner

const Spinner = () => {
    return (
        <div className="spinner ">
            {Array.from({ length: 12 }).map((_, index) => (
                <div
                    key={index}
                    className="spinner-blade"
                    style={{ animationDelay: `${index * 0.083}s`, transform: `rotate(${index * 30}deg)` }}
                ></div>
            ))}
        </div>
    );
};

export default Spinner;