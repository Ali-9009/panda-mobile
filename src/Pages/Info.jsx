import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function Info() {
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

            {/* Scrollable Content */}
            <section className="relative z-20 flex-1 overflow-y-auto px-6 pt-6 pb-40
    bg-white/10 backdrop-blur-md">
                <h1 className="mt-14 text-center text-2xl font-semibold">
                    Refill Flow
                </h1>

                <div className="mt-2 text-center">
                    <h2 className="text-2xl font-bold">
                        <span className="text-xl font-light">Add</span>{" "}
                        Personal Info.
                    </h2>

                    <p className="text-sm text-gray-600">
                        Note : Required For SIM Activation &amp; Invoicing
                    </p>
                </div>

                <div className="mt-6 space-y-3">
                    <input
                        type="text"
                        placeholder="Physical SIM"
                        className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                    />

                    <input
                        type="text"
                        placeholder="SIM No"
                        className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Last Name"
                            className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email"
                        className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Address"
                        className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                    />

                    <div className="grid grid-cols-3 gap-3">
                        <input
                            type="text"
                            placeholder="City"
                            className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                        />

                        <input
                            type="text"
                            placeholder="State"
                            className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Zip Code"
                            className="h-10 rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="IMEI"
                        className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Contact"
                        className="h-10 w-full rounded border border-gray-300 bg-transparent px-3 text-xs outline-none"
                    />
                </div>
            </section>

            {/* Decorative Background */}
            <img
                src="/assets/bg-ele.png"
                alt=""
                className="pointer-events-none fixed -bottom-16 left-1/2 z-10 w-130 max-w-xl -translate-x-1/2"
            />

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-1/2 z-40 w-full max-w-xl -translate-x-1/2 bg-black px-6 py-4">
                <div className="mx-auto grid max-w-75 grid-cols-2 gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="flex h-10 items-center justify-center gap-2 rounded-xl border border-white px-4 text-xs font-semibold text-white"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </button>

                    <Link
                        to="/term"
                        className="flex h-10 items-center justify-center rounded-xl bg-(--primary-color) text-xs font-semibold text-white"
                    >
                        Next
                    </Link>
                </div>
            </div>
        </main>
    );
}