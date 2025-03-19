'use client'

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from 'framer-motion';

import leaderImage1 from '../images/Mohamed Abul Hassan A.jpg';
import leaderImage2 from '../images/Mahrooz.jpg';
import leaderImage3 from '../images/Subash Aravind T.jpg';

const leadershipTeam = [
    {
      name: 'Mohamed Abul Hassan A',
      role: 'GEN AI Engineer, Data Scientist',
      imageUrl: leaderImage1
    },
    {
      name: 'Mahrooz AM',
      role: 'AI & ML Engineer',
      imageUrl: leaderImage2
    },
    {
      name: 'Subash Aravind T',
      role: 'Comissioner of Police ,Chennai City ',
      imageUrl: leaderImage3
    }
  ];
  
  

  

  const LeadershipSection = () => {
    return (
      <div className="relative py-40 sm:py-52 overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-7xl font-bold bg-gradient-to-r from-primary-400 via-white to-accent-purple-400 bg-clip-text text-transparent tracking-tight mb-6">
              Innovators & Visionaries
            </h2>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {leadershipTeam.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="group relative"
              >
                <div className="relative flex flex-col items-center">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden"
                    >
                      <img
                        src={person.imageUrl}
                        alt={person.name}
                        className="h-80 w-80 object-cover"
                      />
                      <div className="absolute inset-0 border-2 border-primary-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </motion.div>
                  </div>
  
                  <motion.div
                    className="mt-10 text-center relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent mb-3">
                      {person.name}
                    </h3>
                    <p className="text-xl text-primary-400 font-medium tracking-wide mb-4">
                      {person.role}
                    </p>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-accent-purple-500 transition-all duration-300 mx-auto" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
  const SignUpSection = () => {
    return (
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-dark-900 to-accent-purple-500/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary-400 via-white to-accent-purple-400 bg-clip-text text-transparent mb-6">
              Join Our Innovation Journey
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Transform your experience with cutting-edge AI technology
            </p>
          </motion.div>
  
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-dark-800/80 backdrop-blur-xl p-8 rounded-2xl border border-primary-500/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark-700 border border-primary-500/20 rounded-lg px-4 py-3 text-gray-300 focus:ring-2 focus:ring-primary-500/40 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-dark-700 border border-primary-500/20 rounded-lg px-4 py-3 text-gray-300 focus:ring-2 focus:ring-primary-500/40 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-dark-700 border border-primary-500/20 rounded-lg px-4 py-3 text-gray-300 focus:ring-2 focus:ring-primary-500/40 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
  
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-purple-500 text-white font-semibold py-4 rounded-lg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all"
                >
                  Create Account
                </motion.button>
              </form>
  
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Already have an account?{' '}
                  <a href="#" className="text-primary-400 hover:text-primary-300 font-medium">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  
// Animated Background Component
const AnimatedBackground = () => {
    const rows = 5;
    const cols = 5;
    const circles = Array.from({ length: rows * cols });

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-3xl z-10"></div>
            <div className="grid grid-cols-5 gap-8 absolute inset-0 -z-20">
                {circles.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-purple-500/20"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <motion.div
        className="relative group bg-gradient-to-br from-dark-800 to-dark-700 p-8 rounded-2xl shadow-xl
                   hover:shadow-2xl transition-all duration-500 border border-primary-700/10
                   hover:border-primary-500/20 overflow-hidden"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-purple-500/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-100 text-transparent bg-clip-text">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>
    </motion.div>
);

const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: '#',
        priceMonthly: '$7',
        description: 'Perfect for individuals and small research projects.',
        features: [
            '100 searches per day',
            'Basic AI summaries',
            'Standard search analytics',
            '24-hour support response time',
        ],
        featured: false,
    },
    {
        name: 'Professional',
        id: 'tier-professional',
        href: '#',
        priceMonthly: '$28',
        description: 'Advanced features for professionals and teams.',
        features: [
            'Unlimited searches',
            'Advanced AI summaries',
            'Real-time analytics',
            'Priority support',
            'Custom AI training',
            'API access',
        ],
        featured: true,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const navigationItems = [
    {
        name: 'Features',
        href: '#features',
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
    {
        name: 'Pricing',
        href: '#pricing',
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        name: 'About',
        href: '#about',
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

const NavigationButtons = () => {
    return (
        <nav className="flex flex-wrap justify-center gap-4 p-4">
            {navigationItems.map((item) => (
                <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-dark-800/50 p-3 pr-6 backdrop-blur-sm transition-all duration-300 hover:bg-dark-700/50 hover:shadow-lg hover:shadow-primary-500/10"
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* Icon Container */}
                    <div className="relative flex size-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400 transition-all duration-300 group-hover:bg-primary-500/20 group-hover:text-primary-300">
                        {item.icon}
                    </div>

                    {/* Text Content */}
                    <div className="relative flex flex-col">
                        <span className="text-base font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white">
                            {item.name}
                        </span>
                    </div>

                    {/* Arrow Indicator */}
                    <motion.div
                        className="relative ml-2 text-primary-400 opacity-0 transition-all duration-300 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                    >
                        <svg
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </motion.div>

                    {/* Bottom Border Gradient */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary-500/50 to-accent-purple-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.a>
            ))}
        </nav>
    );
};

const SearchFlowBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Search Flow Lines */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                <svg width="100%" height="100%" className="stroke-primary-500/20">
                    <pattern
                        id="flow-pattern"
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                        className="opacity-30"
                    >
                        <path d="M0 20h40M20 0v40" fill="none" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#flow-pattern)" />
                </svg>
            </motion.div>

            {/* Animated Search Nodes */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute size-4 rounded-full bg-primary-500/30"
                    initial={{
                        x: -20,
                        y: Math.random() * window.innerHeight,
                        scale: 0
                    }}
                    animate={{
                        x: window.innerWidth + 20,
                        scale: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-primary-400/30 animate-ping" />
                </motion.div>
            ))}

            {/* Search Pulse Effects */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="absolute size-32 rounded-full border border-primary-500/20"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 2, opacity: [0, 0.1, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
                <motion.div
                    className="absolute size-32 rounded-full border border-accent-purple-500/20"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 2, opacity: [0, 0.1, 0] }}
                    transition={{
                        duration: 3,
                        delay: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
            </div>

            {/* Connection Lines */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`line-${i}`}
                    className="absolute h-px bg-gradient-to-r from-primary-500/20 via-accent-purple-500/20 to-primary-500/20"
                    style={{
                        top: `${30 + i * 20}%`,
                        left: 0,
                        right: 0,
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.3 }}
                    transition={{
                        duration: 2,
                        delay: i * 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Floating Search Icons */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`icon-${i}`}
                    className="absolute text-primary-500/20"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: 0
                    }}
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 4,
                        delay: i * 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg
                        className="size-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

const DynamicBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-[10%] left-[15%] size-[500px] rounded-full bg-gradient-to-r from-primary-500/30 to-transparent blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.2, 0.3],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-[40%] right-[15%] size-[600px] rounded-full bg-gradient-to-l from-accent-purple-500/30 to-transparent blur-[100px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.3, 0.2],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Animated Grid */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
            >
                <svg width="100%" height="100%" className="stroke-primary-500/10">
                    <pattern
                        id="grid-pattern"
                        x="0"
                        y="0"
                        width="50"
                        height="50"
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M0 50h50M50 0v50" strokeWidth="0.5" fill="none" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </motion.div>

            {/* Floating Elements */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute size-1 bg-primary-400/40 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Geometric Shapes */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`hex-${i}`}
                        className="absolute size-32 opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        initial={{ rotate: 0, scale: 0 }}
                        animate={{
                            rotate: 360,
                            scale: [0, 1, 0],
                            opacity: [0, 0.2, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            delay: i * 3,
                            ease: "linear",
                        }}
                    >
                        <svg viewBox="0 0 100 100" className="size-full text-primary-500/20">
                            <polygon points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25" fill="currentColor"/>
                        </svg>
                    </motion.div>
                ))}
            </div>

            {/* Light Streaks */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`streak-${i}`}
                    className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
                    style={{
                        top: `${10 + i * 10}%`,
                        left: '-100%',
                        right: 0,
                        width: '200%',
                        transform: `rotate(${-20 + i * 5}deg)`,
                    }}
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 20 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-900/50 to-dark-900/80" />
        </div>
    );
};

const links = [
    // { 
    //     name: 'API Documentation', 
    //     href: '#',
    //     icon: (
    //         <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    //         </svg>
    //     )
    // },
    { 
        name: 'Developer Resources', 
        href: '#',
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    { 
        name: 'Case Studies', 
        href: '#',
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    { 
        name: 'Community Forum', 
        href: '#',
        icon: (
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
        )
    },
]

const stats = [
    { name: 'Searches Processed', value: '1M+' },
    { name: 'Accuracy Rate', value: '99.9%' },
    { name: 'Response Time', value: '<100ms' },
    { name: 'Active Users', value: '50K+' },
]

const testimonials = [
    {
        content: "The AI search capabilities have transformed how we handle data analysis. The speed and accuracy are unprecedented, and the insights we've gained have been invaluable for our business decisions.",
        author: "Sarah Chen",
        role: "CTO at TechForward",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        content: "Implementation was seamless, and the results were immediate. Our team's productivity has increased significantly since we started using this AI search solution.",
        author: "Michael Rodriguez",
        role: "Head of Engineering at DataFlow",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        content: "The accuracy of search results and the speed of analysis have exceeded our expectations. This tool has become indispensable for our research team.",
        author: "Emily Zhang",
        role: "Research Director at InnovateLab",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

const AchievementsSection = () => {
    return (
        <div className="relative isolate overflow-hidden bg-dark-900 py-24 sm:py-32">
            {/* Neural Network Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-dark-900/90" />
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute size-2 rounded-full bg-primary-500/30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: i * 0.1,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Gradient Overlays */}
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary-500/30 to-accent-purple-500/30 opacity-20"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-2xl lg:mx-0"
                >
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        Powering the Future of Search
                    </h2>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                        Our AI-powered search technology is transforming how businesses find and analyze information, 
                        delivering unprecedented accuracy and speed at scale.
                    </p>
                </motion.div>

                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    {/* Resource Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {links.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl bg-dark-800/50 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-dark-700/50 hover:shadow-lg hover:shadow-primary-500/10"
                            >
                                {/* Background Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                
                                {/* Shine Effect */}
                                <div className="absolute inset-0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                </div>

                                {/* Content Container */}
                                <div className="relative flex items-center gap-4">
                                    {/* Icon Container */}
                                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400 transition-all duration-300 group-hover:bg-primary-500/20 group-hover:text-primary-300">
                                        {link.icon}
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-1 items-center justify-between">
                                        <span className="text-base font-semibold text-gray-200 transition-colors duration-300 group-hover:text-white">
                                            {link.name}
                                        </span>
                                        
                                        {/* Arrow */}
                                        <motion.span
                                            className="ml-2 text-primary-400 transition-all duration-300"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <svg
                                                className="size-5 transform transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Bottom Border Gradient */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary-500/50 to-accent-purple-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Statistics */}
                    <motion.dl
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="relative overflow-hidden rounded-lg bg-dark-800/50 p-6 backdrop-blur-sm"
                            >
                                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                                <dd className="mt-2 text-4xl font-semibold tracking-tight text-primary-400">
                                    {stat.value}
                                </dd>
                                {/* Decorative gradient line */}
                                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary-500/50 to-accent-purple-500/50" />
                            </motion.div>
                        ))}
                    </motion.dl>
                </div>
            </div>
        </div>
    )
}

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative isolate overflow-hidden bg-dark-900 px-6 py-24 sm:py-32 lg:px-8">
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem 50rem_at_top,theme(colors.primary.500/20),transparent)]" />
            
            {/* Animated Diagonal Background */}
            <motion.div
                initial={{ opacity: 0, skewX: -30 }}
                animate={{ opacity: 1, skewX: -30 }}
                transition={{ duration: 1 }}
                className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left bg-dark-800/50 ring-1 ring-primary-500/10 backdrop-blur-sm sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
            />

            {/* Neural Network Effect */}
            <div className="absolute inset-0 -z-5">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute size-2 rounded-full bg-primary-500/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>

            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                {/* Company Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto h-12 w-auto text-primary-400"
                >
                    <svg
                        className="h-full w-auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                    </svg>
                </motion.div>

                <div className="relative mt-10">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full z-10 hidden lg:block">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="group rounded-full p-3 bg-dark-800/50 text-gray-400 hover:text-primary-400 transition-colors"
                        >
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>
                    </div>

                    <div className="absolute top-1/2 right-0 translate-x-full -translate-y-1/2 z-10 hidden lg:block">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="group rounded-full p-3 bg-dark-800/50 text-gray-400 hover:text-primary-400 transition-colors"
                        >
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* Testimonial Carousel */}
                    <AnimatePresence mode="wait">
                        <motion.figure
                            key={currentIndex}
                            initial={{ opacity: 0, x: direction * 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -direction * 100 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <blockquote className="relative">
                                {/* Quote marks remain the same */}
                                
                                <div className="relative">
                                    <p className="text-center text-xl/8 font-semibold text-gray-200 sm:text-2xl/9">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                </div>
                            </blockquote>

                            <figcaption className="mt-10">
                                <img
                                    className="mx-auto size-10 rounded-full ring-2 ring-primary-500/20"
                                    src={testimonials[currentIndex].image}
                                    alt=""
                                />
                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-200">
                                        {testimonials[currentIndex].author}
                                    </div>
                                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-200">
                                        <circle r={1} cx={1} cy={1} />
                                    </svg>
                                    <div className="text-primary-400">{testimonials[currentIndex].role}</div>
                                </div>
                            </figcaption>
                        </motion.figure>
                    </AnimatePresence>

                    {/* Testimonial Navigation Dots */}
                    <div className="mt-10 flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`size-2 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-primary-400' : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                            >
                                <span className="sr-only">Go to testimonial {index + 1}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="mt-10 flex justify-between px-4 lg:hidden">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={prevTestimonial}
                    className="rounded-lg bg-dark-800/50 p-2 text-gray-400 hover:text-primary-400"
                >
                    Previous
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={nextTestimonial}
                    className="rounded-lg bg-dark-800/50 p-2 text-gray-400 hover:text-primary-400"
                >
                    Next
                </motion.button>
            </div>
        </section>
    );
};

const HomePage = ({ onStartSearch }) => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        controls.start({
            y: [0, -10, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [controls]);

    const features = [
        {
            icon: "🔍",
            title: "Smart Search",
            description: "Powerful search capabilities enhanced by AI to find exactly what you need."
        },
        {
            icon: "💡",
            title: "Intelligent Summaries",
            description: "Get concise, relevant summaries of search results powered by advanced NLP."
        },
        {
            icon: "💬",
            title: "Interactive Chat",
            description: "Engage in meaningful conversations about your search results with our AI assistant."
        }
    ];

    const handleExploreClick = async (e) => {
        e.preventDefault();
        setIsExploding(true);
        
        // Wait for enhanced animation to complete
        await new Promise(resolve => setTimeout(resolve, 800));
        
        onStartSearch();
    };

    return (
        <div className="min-h-screen bg-dark-900 relative">
            <DynamicBackground />
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                        <span className="sr-only">Visionary AI</span>
                        <div className="relative">
                            {/* Animated Eye Icon */}
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
                                {/* Decorative Rays */}
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
                            {/* Glowing Effect */}
                            <div className="absolute inset-0 rounded-full bg-primary-400/20 blur-lg transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-purple-400 bg-clip-text text-transparent">
                            Visionary
                        </div>
                    </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <NavigationButtons />
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative inline-flex items-center overflow-hidden rounded-full bg-dark-800 px-6 py-2.5 transition-all duration-300"
                            >
                                {/* Gradient Background Effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-purple-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-gradient-x"></span>
                                
                                {/* Shine Effect */}
                                <span className="absolute inset-0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700">
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                                </span>

                                {/* Border Gradient */}
                                <span className="absolute inset-0 rounded-full ring-1 ring-primary-400/20 group-hover:ring-primary-400/40 transition-all duration-300"></span>

                                {/* Icon */}
                                <svg
                                    className="mr-2 size-5 text-primary-400 transition-transform duration-300 group-hover:scale-110"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                                    />
                                </svg>

                                {/* Text */}
                                <span className="relative font-medium text-gray-300 transition-colors group-hover:text-white">
                                    Log in
                                </span>
                                

                                {/* Arrow
                                <span className="relative ml-2 text-primary-400 transition-all duration-300 group-hover:translate-x-1">
                                    →
                                </span> */}
                            </motion.a>
                            
                        </motion.div>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Visionary AI</span>
                                <div className="text-2xl font-bold text-primary-400">Visionary</div>
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-300"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/25">
                                <div className="space-y-2 py-6">
                                    <NavigationButtons />
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-300 hover:bg-dark-700 hover:text-primary-400 transition-colors"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-500 to-accent-purple-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hidden sm:mb-8 sm:flex sm:justify-center"
                    >
                        <div className="group relative overflow-hidden rounded-full px-6 py-3 text-sm/6 text-gray-300 ring-1 ring-white/10 transition-all duration-500 hover:ring-primary-400/50 hover:text-white hover:shadow-lg hover:shadow-primary-500/20">
                            {/* Dynamic Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-purple-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.2),transparent_50%)]" />
                            </div>
                            
                            {/* Animated Particles */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute size-1 rounded-full bg-primary-400/60"
                                        initial={{ x: 0, y: 0, opacity: 0 }}
                                        animate={{
                                            x: [0, (i + 1) * 20, (i + 1) * 40],
                                            y: [0, -(i + 1) * 10, 0],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.2
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Premium Shine Effect */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                            </div>

                            {/* Pulsing Ring */}
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                                <div className="absolute inset-0 rounded-full ring-2 ring-primary-400/20 animate-ping" />
                            </div>

                            <span className="relative flex items-center gap-2">
                                <span className="text-base font-medium">Discover the power of AI-driven search</span>
                                <span className="font-semibold text-primary-400 inline-flex items-center gap-2 group-hover:text-primary-300">
                                    Learn more
                                    <motion.svg
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        animate={{
                                            x: [0, 5, 0],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </motion.svg>
                                </span>
                            </span>

                            {/* Bottom Gradient Line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary-500/50 via-accent-purple-500/50 to-primary-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </motion.div>

                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"
                        >
                            Transform Your Search Experience with AI
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
                        >
                            Experience the next generation of search with our advanced AI technology. Get instant insights, 
                            intelligent summaries, and interactive conversations all in one place.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-10 flex items-center justify-center gap-x-6"
                        >
                            <motion.a
                                href="#"
                                onClick={handleExploreClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center gap-x-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300"
                            >
                                {/* Enhanced explosion effects */}
                                

                                    {isExploding && (
                                        <>
                                            {/* Supernova burst */}
                                            <motion.div
                                                className="absolute"
                                                initial={{ scale: 1, opacity: 1 }}
                                                animate={{ scale: 40, opacity: 0 }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            >
                                                <div className="size-4 rounded-full bg-gradient-to-r from-primary-400 to-accent-purple-400 blur-md" />
                                            </motion.div>

                                            {/* Multi-layered particle rings */}
                                            {[...Array(3)].map((_, ringIndex) => (
                                                <motion.div
                                                    key={`ring-${ringIndex}`}
                                                    className="absolute"
                                                    initial={{ scale: 1 }}
                                                    animate={{ scale: 30 - ringIndex * 5, opacity: 0 }}
                                                    transition={{ duration: 0.8 + ringIndex * 0.2, ease: "easeOut" }}
                                                >
                                                    {[...Array(24)].map((_, i) => (
                                                        <motion.div
                                                            key={`particle-${ringIndex}-${i}`}
                                                            className={`absolute size-${2 + ringIndex} rounded-full ${
                                                                ringIndex === 0 ? 'bg-primary-400' :
                                                                ringIndex === 1 ? 'bg-accent-purple-400' :
                                                                'bg-white'
                                                            }`}
                                                            initial={{ 
                                                                x: 0, 
                                                                y: 0,
                                                                opacity: 1,
                                                                scale: 1
                                                            }}
                                                            animate={{ 
                                                                x: Math.cos(i * 15 * Math.PI / 180) * (100 + ringIndex * 30),
                                                                y: Math.sin(i * 15 * Math.PI / 180) * (100 + ringIndex * 30),
                                                                opacity: 0,
                                                                scale: 0
                                                            }}
                                                            transition={{ 
                                                                duration: 1 + ringIndex * 0.2,
                                                                ease: "circOut"
                                                            }}
                                                        />
                                                    ))}
                                                </motion.div>
                                            ))}

                                            {/* Energy waves */}
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={`wave-${i}`}
                                                    className="absolute -inset-1 rounded-full"
                                                    style={{
                                                        background: `radial-gradient(circle, ${
                                                            i % 2 === 0 ? 'rgba(147, 51, 234, 0.3)' : 'rgba(59, 130, 246, 0.3)'
                                                        } 0%, transparent 70%)`
                                                    }}
                                                    initial={{ scale: 1, opacity: 0.8 }}
                                                    animate={{ scale: [1, 10 - i], opacity: 0 }}
                                                    transition={{
                                                        duration: 1.2,
                                                        delay: i * 0.1,
                                                        ease: "easeOut"
                                                    }}
                                                />
                                            ))}

                                            {/* Spiral particles */}
                                            {[...Array(36)].map((_, i) => (
                                                <motion.div
                                                    key={`spiral-${i}`}
                                                    className="absolute size-1.5 rounded-full bg-gradient-to-r from-primary-400 to-accent-purple-400"
                                                    initial={{ 
                                                        x: 0, 
                                                        y: 0,
                                                        opacity: 1,
                                                        scale: 1,
                                                        rotate: 0
                                                    }}
                                                    animate={{ 
                                                        x: Math.cos(i * 10 * Math.PI / 180) * 200 * (1 + Math.random()),
                                                        y: Math.sin(i * 10 * Math.PI / 180) * 200 * (1 + Math.random()),
                                                        opacity: 0,
                                                        scale: Math.random() * 2,
                                                        rotate: 360
                                                    }}
                                                    transition={{ 
                                                        duration: 0.8 + Math.random() * 0.5,
                                                        ease: "circOut"
                                                    }}
                                                />
                                            ))}

                                            {/* Glowing core */}
                                            <motion.div
                                                className="absolute size-8 rounded-full bg-white"
                                                initial={{ scale: 1, opacity: 1 }}
                                                animate={{ scale: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                style={{
                                                    boxShadow: '0 0 60px 20px rgba(255, 255, 255, 0.8), 0 0 100px 40px rgba(147, 51, 234, 0.5)'
                                                }}
                                            />

                                            {/* Light trails */}
                                            {[...Array(8)].map((_, i) => (
                                                <motion.div
                                                    key={`trail-${i}`}
                                                    className="absolute h-px w-40 origin-left"
                                                    style={{ 
                                                        background: 'linear-gradient(90deg, white, transparent)',
                                                        rotate: `${i * 45}deg`
                                                    }}
                                                    initial={{ scaleX: 0, opacity: 1 }}
                                                    animate={{ scaleX: 1, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                                />
                                            ))}
                                        </>
                                    )}


                                {/* Button content */}
                                <span className="relative">Start Exploring</span>
                                <svg
                                    className="relative size-5 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </motion.a>
                            
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative inline-flex items-center gap-x-2 rounded-full px-6 py-3 text-sm font-semibold text-gray-300 ring-1 ring-primary-400/20 transition-all duration-300 hover:ring-primary-400/40"
                            >
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></span>
                                <svg
                                    className="relative size-5 text-primary-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="relative">Watch demo</span>
                                <span className="relative text-primary-400 transition-transform group-hover:translate-x-1">&rarr;</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-500 to-accent-purple-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 
                                 text-transparent bg-clip-text tracking-tight">
                        Powerful Features for Enhanced Search
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Experience a new way of searching and understanding information with our
                        cutting-edge features.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pricing Section */}
            <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
                {/* Background gradient effect */}
                <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                    <div
                        style={{
                            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary-500/30 to-accent-purple-500/30 opacity-30"
                    />
                </div>

                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base/7 font-semibold text-primary-400">Pricing</h2>
                    <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                        Choose your search plan
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                    Select a plan that fits your needs with our powerful AI search features, comprehensive analytics, and dedicated support.
                </p>

                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.featured ? 'relative bg-dark-800 shadow-2xl' : 'bg-dark-700/60 sm:mx-8 lg:mx-0',
                                tier.featured
                                    ? ''
                                    : tierIdx === 0
                                        ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                        : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                                'rounded-3xl p-8 ring-1 ring-white/10 sm:p-10'
                            )}
                        >
                            <h3 id={tier.id} className={classNames(
                                tier.featured ? 'text-primary-400' : 'text-primary-500',
                                'text-base/7 font-semibold'
                            )}>
                                {tier.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span className={classNames(
                                    tier.featured ? 'text-white' : 'text-gray-200',
                                    'text-5xl font-semibold tracking-tight'
                                )}>
                                    {tier.priceMonthly}
                                </span>
                                <span className={classNames(
                                    tier.featured ? 'text-gray-400' : 'text-gray-500',
                                    'text-base'
                                )}>/month</span>
                            </p>
                            <p className={classNames(
                                tier.featured ? 'text-gray-300' : 'text-gray-400',
                                'mt-6 text-base/7'
                            )}>
                                {tier.description}
                            </p>
                            <ul role="list" className={classNames(
                                tier.featured ? 'text-gray-300' : 'text-gray-400',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10'
                            )}>
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon
                                            className={classNames(
                                                tier.featured ? 'text-primary-400' : 'text-primary-500',
                                                'h-6 w-5 flex-none'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.featured
                                        ? 'bg-primary-500 text-white hover:bg-primary-400'
                                        : 'text-primary-400 ring-1 ring-primary-400/20 hover:ring-primary-400/30',
                                    'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 transition-all duration-200'
                                )}
                            >
                                Get started
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <AchievementsSection />

            <TestimonialSection />
            <LeadershipSection />
            {/* <SignUpSection /> */}

            {/* Footer Section */}
            <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-dark-700/50 relative z-10">
                <div className="text-center">
                    <p className="text-gray-500 hover:text-gray-400 transition-colors duration-300">
                        © 2025 Visionary. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
