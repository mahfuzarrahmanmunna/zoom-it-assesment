// src/layouts/RootLayouts.tsx
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const RootLayouts = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 bg-gray-50">
                <div className="">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RootLayouts;
