import { ArrowBigRight, ArrowRight, Check, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

const menuItems = [
    { label: "ACTIVATIONS", path: "/check-compatibility" },
    { label: "MOBILE TOP-UP", path: "/recharge" },
];

export default function StartS() {
    return (
        <main className="max-w-xl mx-auto relative h-dvh w-full overflow-hidden bg-white flex flex-col items-center">
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200  py-3 z-20">
                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-6 h-6" />
                </div>
            </div>

            {/* Logo */}
            <div className="relative z-10 text-center mt-28">
                <p className="text-lg font-medium text-black">Welcome To</p>

                <img
                    src="/assets/logo.png"
                    alt="T Mobile"
                    className="mx-auto mt-3 w-44 h-auto"
                />
            </div>

            {/* Buttons */}
            <div className="relative z-10 mt-10 w-full max-w-75 px-4 flex flex-col gap-3">
                {menuItems.map((item) => (
                    <Link key={item.label} to={item.path} className="block">
                        <button className="w-full h-10 rounded-xl bg-(--primary-color) hover:bg-black duration-300 text-white text-xs font-bold flex items-center justify-between px-5">
                            {item.label}
                            <span className="text-lg"><ArrowRight /></span>
                        </button>
                    </Link>
                ))}
            </div>

            <img src="/assets/bg-start.png" className="absolute w-100 -bottom-30 -left-30 z-99 rotate-30" alt="" />

            {/* Bottom Wave */}
            <img
                src="/assets/wave.png"
                alt=""
                className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
            />
        </main>
    );
}