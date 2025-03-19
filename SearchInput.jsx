import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchInput = ({ onSearch, onNormalChat }) => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [mode, setMode] = useState('chat');
    const inputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        setIsLoading(true);
        try {
            if (mode === 'search') {
                await onSearch(message);
            } else {
                await onNormalChat({
                    message: message,
                    mode: 'chat'
                });
            }
            setMessage('');
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const containerVariants = {
        hidden: { 
            opacity: 0, 
            y: 100,
            rotateX: 90
        },
        visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            transition: { 
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const glowingBorderAnimation = {
        animate: {
            boxShadow: [
                "0 0 5px rgba(var(--color-primary-500), 0.5)",
                "0 0 20px rgba(var(--color-primary-500), 0.8)",
                "0 0 5px rgba(var(--color-primary-500), 0.5)"
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseAnimation = {
        scale: [1, 1.02, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            boxShadow: "0px 0px 20px rgb(var(--color-primary-500))",
            transition: { 
                duration: 0.3,
                type: "spring",
                stiffness: 300
            }
        },
        tap: { 
            scale: 0.9,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const inputVariants = {
        focus: { 
            scale: 1.02,
            boxShadow: [
                "0 0 10px rgba(var(--color-primary-500), 0.3)",
                "0 0 20px rgba(var(--color-primary-500), 0.5)",
                "0 0 30px rgba(var(--color-primary-500), 0.3)"
            ],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <motion.form 
            onSubmit={handleSubmit} 
            className="w-full perspective-1000"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <AnimatePresence mode="wait">
                <motion.div 
                    className="flex justify-center mb-4"
                    animate={pulseAnimation}
                >
                    <motion.div 
                        className="bg-dark-800 rounded-xl p-1 flex space-x-1"
                        whileHover={{ 
                            scale: 1.05,
                            rotate: [0, 1, -1, 0],
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.button
                            type="button"
                            onClick={() => setMode('chat')}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                mode === 'chat'
                                    ? 'bg-primary-500 text-white'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            layout
                        >
                            <motion.span
                                animate={{ 
                                    scale: mode === 'chat' ? [1, 1.2, 1] : 1,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Chat
                            </motion.span>
                        </motion.button>
                        <motion.button
                            type="button"
                            onClick={() => setMode('search')}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                mode === 'search'
                                    ? 'bg-primary-500 text-white'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            layout
                        >
                            <motion.span
                                animate={{ 
                                    scale: mode === 'search' ? [1, 1.2, 1] : 1,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Search
                            </motion.span>
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="relative"
                    {...glowingBorderAnimation}
                >
                    <motion.textarea
                        ref={inputRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your query...."
                        className="w-full bg-dark-800 text-white rounded-xl px-4 py-3 pr-16
                                border border-dark-700 focus:border-primary-500/50
                                shadow-lg resize-none transition-all duration-300"
                        style={{ 
                            minHeight: '22px',
                            maxHeight: '120px',
                        }}
                        variants={inputVariants}
                        whileFocus="focus"
                        animate={isLoading ? "loading" : "idle"}
                    />

                    <motion.button
                        type="submit"
                        disabled={!message.trim() || isLoading}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        whileHover={{ 
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.5 }
                        }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <motion.svg 
                            className="w-6 h-6"
                            animate={isLoading ? {
                                rotate: 360,
                                scale: [1, 1.2, 1],
                                transition: { duration: 1, repeat: Infinity }
                            } : {}}
                        >
                            {mode === 'search' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            )}
                        </motion.svg>
                    </motion.button>
                </motion.div>
            </AnimatePresence>

            {/* <motion.div 
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <motion.kbd 
                    className="px-3 py-2 bg-dark-700 rounded-lg shadow-lg"
                    whileHover={{ 
                        scale: 1.3,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 }
                    }}
                >
                    Enter you Query
                </motion.kbd>
            </motion.div> */}
        </motion.form>
    );
};

export default SearchInput;