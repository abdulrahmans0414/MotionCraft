import React from "react";
import ScrollAnimations from "../components/Animations/ScrollAnimations";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function ScrollAnimationPage() {
    return (
        <div className="bg-[#222] text-white min-h-screen">
            <Header />
            <main className="flex-grow">
                <ScrollAnimations />
            </main>
            <Footer />
        </div>
    )
}

export default ScrollAnimationPage;
