import React from "react";
import { motion } from "framer-motion";

function KeyframeAnimations() {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>

            {/* Box Div */}
            <motion.div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "rgb(106, 207, 110)",
                    border: "3px solid #fff",
                    marginTop: "20px",
                }}
                initial={{ x: 0, y: 0 }}
                animate={{
                    x: [0, 800, 800, 0, 0], // Keyframe animation
                    y: [0, 0, 200, 200, 0],
                    rotate: [0, 360, 0, -360, 0],
                }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    repeat: 3,
                }}
            ></motion.div>
        </div>
    )
}

export default KeyframeAnimations;
