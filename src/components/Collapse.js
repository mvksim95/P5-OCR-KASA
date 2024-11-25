import React, { useRef, useState } from 'react';
import '../styles/Collapse.sass';
import ChevronUp from '../assets/images/ChevronUp.png';

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img
                    src={ChevronUp}
                    alt="Chevron"
                    className={`chevron-icon ${isOpen ? 'rotate-down' : 'rotate-up'}`}
                />
            </div>
            <div
                className="collapse-content"
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
                    transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
                }}
                ref={contentRef}
            >
                {children}
            </div>
        </div>
    );
};

export default Collapse;
