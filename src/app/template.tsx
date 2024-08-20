'use client'
import { motion } from "framer-motion";
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{  duration: 0.6, ease: [0.4, 0, 0.2, 1] }}>
            {children}
        </motion.div>
    );
}
