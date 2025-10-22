// // MotionWrapper.jsx
// "use client";

// import { motion } from "framer-motion";

// const ScrollMotion = ({ children }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             // viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}

//         >
//             {children}
//         </motion.div>
//     );
// };

// export default ScrollMotion;


"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScrollMotion = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 30 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollMotion;

