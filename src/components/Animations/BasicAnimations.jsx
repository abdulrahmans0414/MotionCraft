import React from "react";
import { motion } from "framer-motion";
function BasicAnimations() {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            {/* Box Div */}
            <motion.div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "rgb(140, 101, 236)",
                    border: "3px solid #fff",
                }}
                animate={{
                    x: 300,
                    rotate: 720,
                }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            ></motion.div>

            {/* Circle Div */}
            <motion.div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "rgb(82, 129, 232)",
                    borderRadius: "50%",
                    border: "3px solid #fff",
                    marginTop: "20px",
                }}
                initial={{ x: 300 }}
                animate={{
                    x: 800,
                    y: -100,
                }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    repeat: Infinity,
                }}
            ></motion.div>

            {/* Heading 1 */}
            <motion.h1
                style={{ marginTop: "20px" }}
                animate={{
                    x: 500,
                    scale: 1.5,
                }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                Abdul Rahman
            </motion.h1>
        </div>
    )
}

export default BasicAnimations;
