// MotionWrapper.jsx
"use client";

import { motion } from "framer-motion";

const LogoMotion = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default LogoMotion;
