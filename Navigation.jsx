import { motion } from 'framer-motion';

const Navigation = ({ onBack, showLogo = true }) => {
    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                staggerChildren: 0.15
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 8
            }
        },
        tap: { 
            scale: 0.9,
            rotate: 0
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.5, rotateY: 180 },
        visible: { 
            opacity: 1, 
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 1
            }
        }
    };

    return (
        <motion.div 
            className="relative"
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="absolute inset-0">
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/50 to-transparent"
                    animate={{
                        background: [
                            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(20,20,40,0.5), transparent)",
                            "linear-gradient(to right, rgba(20,20,40,0.9), rgba(0,0,0,0.5), transparent)",
                            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(20,20,40,0.5), transparent)"
                        ]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-dark-900/30 to-transparent"
                    animate={{
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            <div className="flex items-center justify-between py-4 px-6 relative">
                <div className="flex items-center space-x-4">
                
                    <motion.button
                        onClick={onBack}
                        className="group flex items-center space-x-2 bg-dark-800/80 hover:bg-dark-700/90 
                                px-6 py-3 rounded-xl border border-dark-700 hover:border-primary-500/40
                                transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-primary-500/10
                                relative overflow-hidden"
                        variants={buttonVariants}
                        whileHover={{
                            scale: 1.05,
                            x: -5,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent"
                            animate={{
                                x: ['-100%', '100%']
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.span 
                            className="text-primary-400 group-hover:text-primary-300 text-xl font-bold"
                            animate={{
                                x: [-4, 0, -4],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            ←
                        </motion.span>
                        <motion.span 
                            className="text-gray-300 group-hover:text-white font-medium text-lg tracking-wide"
                            animate={{
                                textShadow: [
                                    "0 0 0px rgba(255,255,255,0)",
                                    "0 0 10px rgba(255,255,255,0.5)",
                                    "0 0 0px rgba(255,255,255,0)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        >
                            Back
                        </motion.span>
                    </motion.button>

                </div>

                <motion.div
    variants={logoVariants}
    className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3"
>
    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 group">
        <span className="sr-only">Visionary AI</span>
        <div className="relative">
            <svg 
                className="size-8 text-primary-400 transform transition-transform duration-300 group-hover:scale-110" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
            >
                <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.circle 
                    cx="12" 
                    cy="12" 
                    r="3"
                    strokeWidth={1.5}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                {[...Array(8)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1="12"
                        y1="12"
                        x2={12 + Math.cos(i * Math.PI / 4) * 16}
                        y2={12 + Math.sin(i * Math.PI / 4) * 16}
                        strokeWidth={1}
                        className="text-primary-400/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    />
                ))}
            </svg>
            <div className="absolute inset-0 rounded-full bg-primary-400/20 blur-lg transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-purple-400 bg-clip-text text-transparent">
            Visionary
        </div>
    </a>
</motion.div>

                <div className="flex items-center space-x-4">
                    {[
                        <svg className="w-5 h-5 text-primary-400 group-hover:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>,
                        <svg className="w-5 h-5 text-primary-400 group-hover:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    ].map((icon, index) => (
                        <motion.button
                            key={index}
                            className="bg-dark-800/80 hover:bg-dark-700 p-2 rounded-lg border border-dark-700 
                                     hover:border-primary-500/30 transition-all duration-300 group"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            animate={{
                                y: [0, -3, 0],
                                transition: {
                                    duration: 2,
                                    delay: index * 0.2,
                                    repeat: Infinity
                                }
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    transition: {
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }}
                            >
                                {icon}
                            </motion.div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Navigation;
