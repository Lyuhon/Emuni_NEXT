// components/FixedPhoneButton.js
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FixedPhoneButton = () => {
    // Варианты анимации для кнопки
    const buttonVariants = {
        initial: {
            scale: 1,
        },
        animate: {
            scale: [1, 1.1, 1], // Пульсирующий эффект
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
        hover: {
            y: -10, // Подъем при наведении
            boxShadow: '0 10px 15px -3px rgba(107, 14, 85, 0.3)', // Тень при наведении с новым цветом
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
        tap: {
            scale: 0.95, // Легкое сжатие при клике
        },
    };

    return (
        <motion.a
            href="tel:+998781470007"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6b0e55] to-[#8f3178] rounded-full shadow-lg border-2 border-white"
            aria-label="Позвонить"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
            </svg>
        </motion.a>
    );
};

export default FixedPhoneButton;