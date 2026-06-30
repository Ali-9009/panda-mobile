import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function Recharge() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [activeTab, setActiveTab] = useState("Local");

    const plans = {
        Local: [
            "Unlimited Saver",
            "Unlimited Saver",
            "Unlimited Saver",
            "Unlimited Saver",
        ],
        Regional: [
            "Regional Basic",
            "Regional Plus",
            "Regional Max",
            "Regional Unlimited",
        ],
        Global: [
            "Global Starter",
            "Global Plus",
            "Global Pro",
            "Global Unlimited",
        ],
    };

    return (

        <main className="max-w-xl mx-auto h-dvh bg-white flex flex-col">
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 z-20">
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

            <section className="flex-1 flex flex-col px-6 min-h-0">
                <h1 className="mt-14 text-2xl font-semibold text-center">
                    Select Desired Plan
                </h1>

                {/* Scrollable Plans */}
                <div className="mt-8 flex-1 overflow-y-auto pb-4">
                    <div className="grid grid-cols-2 gap-4">
                        {plans[activeTab].map((name, index) => (
                            <div
                                key={index}
                                className="rounded-md border border-gray-300 bg-white shadow-lg px-3 py-4 text-center"
                            >
                                <div className="text-(--primary-color) font-bold">
                                    <span className="align-top text-sm">$</span>
                                    <span className="text-4xl">35</span>
                                    <span className="text-xs">/mo</span>
                                </div>

                                <p className="mt-2 text-[9px] font-semibold leading-tight">
                                    30GB/mo. at max 3 Mbps, then speeds slowed to max 1.5 Mbps.
                                </p>

                                <h3 className="mt-3 text-sm font-bold">{name}</h3>

                                <button
                                    onClick={() => setSelectedPlan(name)}
                                    className="mt-3 rounded-full bg-(--primary-color) text-white text-[9px] font-bold px-5 py-1"
                                >
                                    View Details
                                </button>

                                <p className="mt-1 text-[8px]">
                                    Taxes & fees extra
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="w-full max-w-[300px] mx-auto py-4">

                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <button
                            onClick={() => window.history.back()}
                            className="h-10 rounded-full border border-black px-4 text-xs font-semibold flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        <Link
                            to="/add-information"
                            className="h-10 rounded-full bg-[var(--primary-color)] text-white text-xs font-semibold flex items-center justify-center"
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </section>

            {selectedPlan && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
                    onClick={() => setSelectedPlan(null)}
                >
                    <div
                        className="relative w-full max-w-[460px] rounded-lg bg-white text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-[460px] rounded-lg bg-white px-6 py-8 text-center">
                            <button
                                onClick={() => setSelectedPlan(null)}
                                className="absolute right-5 top-4 text-black text-xl font-bold"
                            >
                                ×
                            </button>

                            <div className="text-(--primary-color) font-bold">
                                <span className="align-top text-xl">$</span>
                                <span className="text-5xl">35</span>
                                <span className="text-sm">/mo</span>
                            </div>

                            <p className="mt-2 text-[10px] text-black">
                                Taxes & fees extra
                            </p>

                            <h2 className="mt-2 text-lg font-bold">
                                {selectedPlan}<sup>SM</sup>
                            </h2>

                            <ul className="mt-3 text-left text-sm list-disc pl-5">
                                <li>30GB/mo. at max 3 Mbps, then speeds slowed to max 1.5 Mbps.</li>
                                <li>T-Mobile Level Up<sup>SM</sup></li>
                            </ul>

                            <button className="mt-2 text-left block text-xs font-bold text-blue-600 underline">
                                Full Plan Details
                            </button>

                            <div className="border-t border-gray-300 mt-4 pt-4 text-left space-y-3 text-sm">
                                <p>↕️ 30GB data</p>
                                <p>🌐 Hotspot add-on available</p>
                                <p>
                                    🌍 Unlimited talk and text in the U.S. and unlimited text from the U.S.
                                    to over 230 countries and territories.
                                </p>
                            </div>

                            <div className="mt-5">
                                <h3 className="font-bold text-xs">Broadband Labels</h3>
                                <p className="text-[10px] text-(--primary-color) underline">
                                    https://www.att.com/broadbandlabels/NEDPPbfacts
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </main>
    );
}