import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Header() {

    return (
        <motion.header
            className="bg-[#333] text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Framer Motion Playground</h1>
                <p className="text-sm mt-2">Crafting Smooth Animations with Framer Motion</p>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-purple-400 transition-colors duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/scroll"
                                className="hover:text-purple-400 transition-colors duration-300"
                            >
                                Scroll Animation
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    )
}

export default Header;
