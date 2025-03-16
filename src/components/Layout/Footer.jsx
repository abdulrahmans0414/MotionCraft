import React from "react";

function Footer() {
    return (
        <footer className="bg-[#333] text-white p-4 text-center mt-auto">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Framer Motion Playground by Abdul Rahman. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer;
