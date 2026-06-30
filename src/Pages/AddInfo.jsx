import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function Info() {
    return (
        <main className="max-w-xl mx-auto h-dvh bg-white flex flex-col overflow-hidden">

            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 shrink-0">
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

            {/* Scrollable Content */}
            <section className="flex-1 overflow-y-auto px-6">
                <div className="pb-4">
                    <h1 className="mt-14 text-2xl font-semibold text-center">
                        Add Information
                    </h1>

                    <div className="mt-6 space-y-3">
                        <input
                            type="text"
                            placeholder="MDN Number"
                            className="w-full h-10 rounded border border-gray-300 px-3 text-xs bg-transparent"
                        />

                        <input
                            type="text"
                            placeholder="Price"
                            className="w-full h-10 rounded border border-gray-300 px-3 text-xs bg-transparent"
                        />

                    </div>
                </div>
            </section>

            {/* Fixed Footer */}
            <div className="shrink-0 bg-white border-t border-gray-100 px-6 py-4">
                <div className="max-w-[300px] mx-auto grid grid-cols-2 gap-3">
                    <button
                        onClick={() => window.history.back()}
                        className="h-10 rounded-full border border-black px-4 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>

                    <Link
                        to="/term"
                        className="h-10 rounded-full bg-[var(--primary-color)] text-white text-xs font-semibold flex items-center justify-center"
                    >
                        Next
                    </Link>
                </div>
            </div>

        </main>
    );
}