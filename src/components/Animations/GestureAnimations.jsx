import React from "react";
import { motion } from "framer-motion";
function GestureAnimations() {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            {/* Hover Animation */}
            <motion.div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "rgb(155, 71, 81)",
                    border: "3px solid #fff",
                    margin: "30px",
                }}
                initial={{ x: 600, y: 0 }}
                whileHover={{ backgroundColor: "rgba(82, 17, 40, 0.67)" }}
                whileTap={{ scale: 0.9 }}
            ></motion.div>

            {/* Drag Animation */}
            <motion.div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "rgb(177, 136, 78)",
                    border: "3px solid #fff",
                    margin: "30px",
                }}
                drag
                whileDrag={{ scale: 1.5 }}
                dragConstraints={{ left: 0, right: 1200, top: 0, bottom: 500 }}
                dragDirectionLock
            ></motion.div>
        </div>
    )
}

export default GestureAnimations;
