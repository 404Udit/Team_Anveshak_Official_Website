import { React, useState } from 'react'
import { motion } from 'framer-motion'

const Verticals_card_ani = ({ children }) => {

    const [rotation, setRotation] = useState(0)

    const handleHover = () => {
        setRotation(prev => prev + 360)
    }

    return (
        <motion.div
            className='flex flex-col'
            onHoverStart={handleHover}
            animate={{ rotateY: rotation }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{ perspective: 1000,
                transformStyle: 'preserve-3d',
             }}
        >
            {children}
        </motion.div>
    )
}

export default Verticals_card_ani
