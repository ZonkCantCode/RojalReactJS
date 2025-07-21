import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import './DayNavigation.css';

export default function DayNavigation() {
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    const day2options = [
        "array",
        "Calc",
        "Condition",
        "Multiplication",
        "Variable"
    ];

    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <button className="dropdown-toggle" onClick={handleToggle}>
                    Day 2 ▾
                </button>
                {open && (
                    <ul className="dropdown-menu">
                        {day2options.map((option, index) => (
                            <li key={index} className="dropdown-item">
                                <Link to={`/day2/${option.toLowerCase()}`}>{option}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
