import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function CheckComp() {
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <main className="relative mx-auto flex h-dvh w-full max-w-xl flex-col overflow-hidden bg-white">
            {/* Header */}
            <div className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-100 bg-white px-4 py-3 shadow-md shadow-gray-200">
                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="h-6 w-6" />
                </div>
            </div>

            {/* Content */}
            <section className="relative z-20 flex flex-1 flex-col items-center overflow-y-auto px-6 pb-32 pt-6 text-center">
                <h1 className="text-2xl font-semibold">Refill Flow</h1>

                <div className="mt-8">
                    <p className="text-xl">Let's Check</p>
                    <h2 className="text-2xl font-semibold leading-tight text-(--primary-color)">
                        Your Device Compatibility
                    </h2>
                </div>

                <div className="mt-8 w-full max-w-75 rounded-2xl border border-gray-100 bg-white px-4 py-5 shadow-xl">
                    <h3 className="text-xl font-bold text-(--primary-color)">*#06#</h3>
                    <p className="mt-1 text-xs text-gray-600">
                        Your IMEI number will appear on the screen
                    </p>
                </div>

                <div className="mt-6 w-full max-w-75 rounded-2xl border border-(--primary-color)/20 bg-[#fff0f7] p-6 shadow-sm">
                    <p className="mb-3 text-[20px] font-bold uppercase tracking-widest text-gray-800">
                        CHECK YOUR DEVICE COMPATIBILITY
                    </p>

                    <input
                        type="text"
                        defaultValue="21902459038459032948"
                        readOnly
                        className="mb-4 w-full cursor-default rounded-full border border-gray-200 bg-white px-4 py-3 text-center text-[12px] focus:outline-none"
                    />

                    <button
                        type="button"
                        onClick={() => setShowSuccess(true)}
                        className="h-11 w-full rounded-xl bg-(--primary-color) text-xs font-semibold text-white transition-colors hover:bg-(--secondary-color)"
                    >
                        CHECK COMPATIBILITY
                    </button>
                </div>
            </section>

            {/* Bottom Image */}
            <img
                src="/assets/bg-ele.png"
                alt=""
                className="pointer-events-none fixed -bottom-10 left-1/2 z-10 w-130 max-w-xl -translate-x-1/2"
            />

            {/* Fixed Bottom Buttons */}
            <div className="fixed bottom-0 left-1/2 z-60 w-full max-w-xl -translate-x-1/2 bg-black py-4">
                <div className="mx-auto grid max-w-75 grid-cols-2 gap-3 px-4">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="flex h-10 items-center justify-center gap-2 rounded-xl border border-white px-4 text-xs font-semibold text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </button>

                    <Link
                        to="/plan"
                        className="flex h-10 items-center justify-center rounded-xl bg-(--primary-color) text-xs font-semibold text-white"
                    >
                        Skip
                    </Link>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 px-4">
                    <div className="relative z-1000 w-full max-w-90 rounded-3xl bg-white p-6 shadow-2xl">
                        <div className="flex justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-(--primary-color)">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="h-12 w-12"
                                >
                                    <path d="M9.75 17.25l-4.5-4.5 1.5-1.5 3 3 6-6 1.5 1.5-7.5 7.5z" />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                                YOUR PHONE ESIM IS COMPATIBLE
                            </h2>
                            <p className="mt-4 text-sm text-slate-500">
                                IMEI: 21902459038459032948
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowSuccess(false)}
                            className="mt-8 w-full rounded-xl bg-(--primary-color) px-4 py-3 text-sm font-semibold text-white hover:bg-(--secondary-color)"
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}