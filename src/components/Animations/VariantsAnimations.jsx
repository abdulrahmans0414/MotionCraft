import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function VariantsAnimations() {
    const [isFlipped, setIsFlipped] = useState(false);

    // Define variants for the animation
    const boxVariants = {
        initial: { rotate: 0 },
        flip: { rotate: 360 },
    };

    // Reset the animation state after it completes
    useEffect(() => {
        if (isFlipped) {
            const timeout = setTimeout(() => {
                setIsFlipped(false); // Reset to initial state
            }, 2000); // Duration of the animation
            return () => clearTimeout(timeout);
        }
    }, [isFlipped]);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            {/* Animated Box */}
            <motion.div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "rgb(78, 80, 177)",
                    border: "3px solid #fff",
                    margin: "20px auto",
                    borderRadius: "10px", // Rounded corners for the box
                }}
                variants={boxVariants}
                initial="initial"
                animate={isFlipped ? "flip" : "initial"}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
            ></motion.div>

            {/* Stylish Button to Trigger Animation */}
            <button
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                    padding: "7px 30px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: isFlipped ? "#ff4757" : "#2ed573",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease, transform 0.2s ease",
                    outline: "none",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                {isFlipped ? "Reset" : "Flip"}
            </button>
        </div>
    )
}

export default VariantsAnimations;
