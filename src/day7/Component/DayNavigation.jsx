import React from 'react';
import { Link } from 'react-router-dom';
import './DayNavigation.css';

// Reusable Dropdown Component
function DayDropdown({ label, options, path }) {
    const [open, setOpen] = React.useState(false);

    const toggleDropdown = () => setOpen(!open);

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {label} ▾
            </button>
            {open && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} className="dropdown-item">
                            <Link to={`/${path}/${option.toLowerCase()}`}>{option}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function DayNavigation() {
    return (
        <div className="dropdown-container">
            <DayDropdown
                label="Day 2"
                path="day2"
                options={["array", "Calc", "Condition", "Multiplication", "Variable"]}
            />
            <DayDropdown
                label="Day 3"
                path="day3"
                options={["Merge", "Object", "Result", "UserList"]}
            />
            <DayDropdown
                label="Day 4"
                path="day4"
                options={["EmojiPicker", "User"]}
            />
            <DayDropdown
                label="Day 5"
                path="day5"
                options={["FocusInput", "LiftingState", "LoginForm"]}
            />
                        <DayDropdown
                label="Day 6"
                path="day6"
                options={["Home",  "UserDetails"]}
            />

            <DayDropdown
                label="Day 8"
                path="day8"
                options={["Todo"]}
            />
        </div>
    );
}
