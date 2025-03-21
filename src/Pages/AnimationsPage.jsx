import React from "react";
import BasicAnimations from "../components/Animations/BasicAnimations";
import KeyframeAnimations from "../components/Animations/KeyframeAnimations";
import GestureAnimations from "../components/Animations/GestureAnimations";
import VariantsAnimations from "../components/Animations/VariantsAnimations";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function AnimationsPage() {
    return (
        <div className="bg-[#222]  text-white min-h-screen p-5">
            <Header />
            <main className="flex-grow p-5 pt-24"> {/* Add pt-24 to account for the fixed header */}
                <h1 className="text-white text-center text-4xl font-bold mb-10">
                    Framer Motion Animations
                </h1>

                <section className="mb-10">
                    <h2 className="text-white text-3xl font-semibold mb-5">Basic Animations</h2>
                    <BasicAnimations />
                </section>

                <section className="mb-100">
                    <h2 className="text-white text-3xl font-semibold mb-5">Keyframe Animations</h2>
                    <KeyframeAnimations />
                </section>

                <section className="mb-10">
                    <h2 className="text-white text-3xl font-semibold mb-5">Gesture Animations</h2>
                    <GestureAnimations />
                </section>

                <section className="mb-10">
                    <h2 className="text-white text-3xl font-semibold mb-5">Variants Animations</h2>
                    <VariantsAnimations />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default AnimationsPage;
