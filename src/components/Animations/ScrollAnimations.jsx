import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ScrollAnimations() {
    // Use the useScroll hook to get scrollYProgress
    const { scrollYProgress } = useScroll();

    // Use useTransform to create derived motion values
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);


    return (
        <div style={{ padding: "20px", textAlign: "center", color: "#fff", height: "300vh" }}>
            {/* Progress Bar */}
            <motion.div
                style={{
                    backgroundColor: "red",
                    transformOrigin: "left",
                    borderRadius: "9999px",
                    width: "100%",
                    height: "12px",
                    position: "fixed",
                    top: 48,
                    left: 0,
                    scaleX: scrollYProgress, // Bind scaleX to scrollYProgress
                }}
            />

            <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginTop: "60px" }}>
                Scrolling Animation
            </h2>

            {/* Section 1: Scaling Box */}
            <motion.div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    margin: "100px auto",
                    scale: scale, // Scale based on scroll progress
                }}
            >
                <p style={{ paddingTop: "80px", fontSize: "1.2rem" }}>Scale Up!</p>
            </motion.div>

            {/* Section 2: Fading Text */}
            <motion.div
                style={{
                    opacity: opacity, // Fade in and out based on scroll progress
                    margin: "100px auto",
                }}
            >
                <h3 style={{ fontSize: "2rem", fontWeight: "bold" }}>Fade In and Out</h3>
                <p style={{ fontSize: "1.2rem" }}>This text fades as you scroll.</p>
            </motion.div>

            {/* Section 3: Rotating Box */}
            <motion.div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: "green",
                    borderRadius: "20px",
                    margin: "100px auto",
                    rotate: rotate, // Rotate based on scroll progress
                }}
            >
                <p style={{ paddingTop: "80px", fontSize: "1.2rem" }}>Spin Me!</p>
            </motion.div>

            {/* Section 4: Final Message */}
            <div style={{ marginTop: "100vh", padding: "20px" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: "bold" }}>You've Reached the End!</h3>
                <p style={{ fontSize: "1.2rem" }}>Thanks for scrolling!</p>
            </div>
        </div>
    )
}

export default ScrollAnimations;
