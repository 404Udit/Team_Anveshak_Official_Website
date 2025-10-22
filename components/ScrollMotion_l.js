"use client";

import { motion } from "framer-motion";

const ScrollMotion_l = ({ children, direction = "left" }) => {
    let initial = { opacity: 0 };
    let animate = { opacity: 1, y: 0, x: 0 };

    if (direction === "left") {
        initial.x = -50;
    } else if (direction === "right") {
        initial.x = 50;
    } else {
        initial.y = 30;
    }

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            exit={initial}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollMotion_l;
