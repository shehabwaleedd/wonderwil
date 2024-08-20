'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useAccess } from '@/context/AccessContext';

const List: React.FC = () => {
    const subItems: string[] = ['Brand Strategy', 'Art Direction', 'Digital Design & Development', 'Photography', 'Film'];
    const { navOpen } = useAccess();

    return (
        <AnimatePresence>
            {!navOpen && (
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {subItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    )
}

export default List