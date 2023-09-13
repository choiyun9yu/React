# Dropdown 2

#### App.js (요약)

    import { motion, AnimatePresence } from 'framer-motion';

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
            <motion.div layout style={container}>   // 가장 밖에 motion.div layout
                <div>
                    <button onClick={toggleDropdown}>{!isDropdownOpen ? 'open' : 'close'}</button>
                    <AnimatePresence>               // && 연산 밖에 AnimatePresence
                        {isDropdownOpen && (
                            <motion.div             // && 연산 안에 motion.div
                                className="dropdown"
                                variants={dropdownVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                style={{ overflow: 'hidden' }}
                            >
                                <보여줄 컴포넌트 />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        );
    };

    export default App;
