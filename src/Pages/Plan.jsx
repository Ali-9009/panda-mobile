import { useState } from "react";
import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function Plan() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [activeTab, setActiveTab] = useState("Local");

    const plans = {
        Local: [
            {
                title: "Unlimited Plus",
                oldPrice: "$45.00/mo",
                price: "$16.33",
                badge: "$49 for 3 months",
                features: [
                    "Unlimited Data",
                    "30GB Premium 5G Data",
                    "Extra 5GB Promotional Data",
                    "OnePool™ shared data across U.S. & China",
                    "Unlimited US Calls & Texts",
                    "Free International Calls & Texts to 229+ Countries",
                ],
            },
            {
                title: "Unlimited Plan",
                oldPrice: "$35.00/mo",
                price: "$13.00",
                badge: "$39 for 3 Months",
                features: [
                    "Unlimited Data",
                    "15GB Premium 5G Data",
                    "Extra 5GB Promotional Data",
                    "OnePool™ shared data across U.S. & China",
                    "Unlimited US Calls & Texts",
                    "Free International Calls & Texts to 229+ Countries",
                ],
            },
            {
                title: "Starter",
                price: "$25.00",
                features: [
                    "6GB of 5G Data",
                    "Unlimited US Talk & Text",
                    "Free Unlimited Calls & Texts to China & 229+ Countries",
                ],
            },
            {
                title: "Lite",
                price: "$15.00",
                features: [
                    "3GB of 5G Data",
                    "Unlimited US Talk & Text",
                ],
            },
        ],

        Regional: [
            {
                title: "Regional Plus",
                price: "$20.00",
                features: [
                    "10GB Premium Data",
                    "Unlimited Regional Calls",
                    "Free SMS",
                ],
            },
            {
                title: "Regional Max",
                price: "$30.00",
                features: [
                    "25GB Premium Data",
                    "Unlimited Calls",
                    "Free International SMS",
                ],
            },
        ],

        Global: [
            {
                title: "Global Unlimited",
                price: "$50.00",
                features: [
                    "Unlimited Global Data",
                    "Unlimited Calls",
                    "Worldwide Roaming",
                ],
            },
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

                </h1>

                <div className="text-center mt-2">
                    <p className="text-xl">Select</p>
                    <h2 className="text-2xl font-bold">Desired Plan</h2>
                </div>

                {/* Tabs */}
                <div className="mt-8 mx-auto flex rounded overflow-hidden border border-gray-200">
                    {["Local", "Regional", "Global"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-24 h-8 text-xs ${activeTab === tab
                                ? "bg-(--primary-color) text-white"
                                : "bg-white text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Scrollable Plans */}
                <div className="mt-8 flex-1 overflow-y-auto pb-4">
                    <div className="grid grid-cols-2 gap-4">
                        {plans[activeTab].map((plan, index) => (
                            <div
                                key={index}
                                className="relative mt-5 rounded-2xl border border-yellow-400 bg-white shadow-lg px-4 pt-10 pb-4"
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-yellow-400 px-5 py-1 text-[11px] font-bold text-black shadow">
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Title */}
                                <h3 className="text-center text-xl font-semibold text-red-400">
                                    {plan.title}
                                </h3>

                                {/* Old Price */}
                                {plan.oldPrice && (
                                    <p className="mt-2 text-center text-2xl font-semibold text-gray-400 line-through">
                                        {plan.oldPrice}
                                    </p>
                                )}

                                {/* Price */}
                                <div className="mt-1 text-center text-(--primary-color)">
                                    <span className="text-4xl font-semibold">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm font-semibold">/mo</span>
                                </div>

                                {/* Features */}
                                <ul className="mt-5 space-y-2 text-xs text-gray-700">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm gap-2">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-(--primary-color)" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <button
                                    onClick={() => setSelectedPlan(plan)}
                                    className="mt-6 w-full rounded-lg bg-(--primary-color) py-2 text-sm font-semibold text-white transition hover:opacity-90"
                                >
                                    View Details
                                </button>

                                <p className="mt-2 text-center text-[10px] text-gray-500">
                                    Taxes & fees extra
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto w-full bg-black py-4">
                    <div className="mx-auto max-w-75 grid grid-cols-2 gap-3 px-4">
                        <button
                            onClick={() => window.history.back()}
                            className="h-10 rounded-xl border border-white text-white px-4 text-xs font-semibold flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        <Link
                            to="/information"
                            className="h-10 rounded-xl bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
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
                        className="relative w-full max-w-115 rounded-lg bg-white text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full max-w-115 rounded-lg bg-white px-6 py-8 text-center">
                            <button
                                onClick={() => setSelectedPlan(null)}
                                className="absolute right-5 top-4 text-black text-xl font-bold"
                            >
                                ×
                            </button>

                            {selectedPlan.oldPrice && (
                                <p className="text-sm text-gray-400 line-through">
                                    {selectedPlan.oldPrice}
                                </p>
                            )}

                            <div className="text-(--primary-color) font-bold">
                                <span className="text-5xl">{selectedPlan.price}</span>
                                <span className="text-sm">/mo</span>
                            </div>

                            {selectedPlan.badge && (
                                <div className="mx-auto mt-3 inline-block rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                                    {selectedPlan.badge}
                                </div>
                            )}

                            <p className="mt-2 text-[10px] text-black">
                                Taxes & fees extra
                            </p>

                            <h2 className="mt-2 text-lg font-bold">
                                {selectedPlan.title}<sup>SM</sup>
                            </h2>

                            <ul className="mt-5 space-y-3 text-left">
                                {selectedPlan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 text-sm"
                                    >
                                        <span className="mt-1 h-2 w-2 rounded-full bg-(--primary-color)" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
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