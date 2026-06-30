import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function CheckComp() {
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <main className="max-w-xl mx-auto h-dvh w-full overflow-y-auto bg-white flex flex-col items-center relative custom-scrollbar">
            
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 sticky top-0 bg-white z-20">
                <Link to="/">
                    <img src="/assets/logo.png" alt="Logo" className="h-10 object-contain" />
                </Link>
                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-6 h-6" />
                </div>
            </div>

            {/* Content */}
            <section className="flex-1 flex flex-col items-center text-center px-6 z-10 w-full pt-6">
                <h1 className="text-2xl font-semibold">Refill Flow</h1>
                
                <div className="mt-8">
                    <p className="text-xl">Let's Check</p>
                    <h2 className="text-2xl font-semibold leading-tight text-(--primary-color)">Your Device Compatibility</h2>
                </div>

                {/* Instruction Box */}
                <div className="mt-8 w-full max-w-[300px] rounded-2xl bg-white shadow-xl py-5 px-4 border border-gray-100">
                    <h3 className="text-xl font-bold text-(--primary-color)">*#06#</h3>
                    <p className="text-xs mt-1 text-gray-600">Your IMEI number will appear on the screen</p>
                </div>

                {/* IMEI Input Section */}
                <div className="mt-6 mb-6 w-full max-w-[300px] rounded-2xl bg-[#fff0f7] border border-(--primary-color)/20 p-6 shadow-sm">
                    <p className="text-[20px] font-bold text-gray-800 uppercase tracking-widest mb-3">CHECK YOUR DEVICE COMPATIBILITY</p>
                    <input 
                        type="text" 
                        defaultValue="21902459038459032948"
                        readOnly
                        className="w-full bg-white border border-gray-200 rounded-full px-4 py-3 text-[12px] text-center mb-4 focus:outline-none cursor-default" 
                    />
                    <button
                        onClick={() => setShowSuccess(true)}
                        className="w-full h-11 rounded-full bg-(--primary-color) text-white text-xs font-semibold hover:bg-(--secondary-color) transition-colors"
                    >
                        CHECK COMPATIBILITY
                    </button>
                </div>
            </section>

            {/* Bottom Buttons Section */}
            <div className="mt-auto mb-8 w-full max-w-[300px] z-10">
                <div className="grid grid-cols-2 gap-3">
                    <button 
                        onClick={() => window.history.back()} 
                        className="h-10 rounded-full border border-black px-4 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <Link 
                        to="/plan" 
                        className="h-10 rounded-full bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center hover:bg-(--secondary-color)"
                    >
                        Skip
                    </Link>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
                        <div className="flex justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-(--primary-color)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-12 w-12">
                                    <path d="M9.75 17.25l-4.5-4.5 1.5-1.5 3 3 6-6 1.5 1.5-7.5 7.5z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <h2 className="text-xl font-semibold tracking-tight text-slate-900">YOUR PHONE ESIM IS COMPATIBLE</h2>
                            <p className="mt-4 text-sm text-slate-500">IMEI: 21902459038459032948</p>
                        </div>
                        <button 
                            onClick={() => setShowSuccess(false)} 
                            className="mt-8 w-full rounded-full bg-(--primary-color) px-4 py-3 text-sm font-semibold text-white hover:bg-(--secondary-color)"
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}