# Dropdown 2

#### App.js

    import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';

    import Contents from './components/Contents';
    import './styles.css';

    // js에서 css style 적용
    const container = {
        background: 'yellow',
        width: '1200px',
        height: 'auto',
        border: '1px solid black',
        display: 'inline-block',
        overflow: 'hidden',
    };

    const dropdownVariants = {
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                opacity: { duration: 0.3 },
                height: { duration: 0.3 },
            },
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                opacity: { duration: 0.3 },
                height: { duration: 0.3 },
            },
        },
    };

    const App = () => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };

        return (
            <motion.div layout style={container}>
                <div>
                    <button onClick={toggleDropdown}>{!isDropdownOpen ? 'open' : 'close'}</button>
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                className="dropdown"
                                variants={dropdownVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                style={{ overflow: 'hidden' }}
                            >
                                <Contents />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        );
    };

    export default App;
