import { useState } from "react";
import { ArrowLeft, Check, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LanguageSelector from "../components/LanguageSelector";

import "swiper/css";
import "swiper/css/pagination";

export default function Recharge() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = [
        {
            title: "Unlimited Plus",
            oldPrice: "$45.00/mo",
            price: "$16.33",
            badge: "$49 for 3 months • Save $86",
            border: true,
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
            badge: "$39 for 3 Months • Save $66",
            border: true,
            features: [
                "Unlimited Data",
                "15GB Premium 5G Data",
                "Extra 5GB Promotional Data",
                "OnePool™ shared data across U.S. & China",
                "Unlimited US calls & texts",
                "Free international calls & texts to 229+ countries",
            ],
        },
        {
            title: "Starter",
            price: "$25.00",
            features: [
                "6GB of 5G data",
                "Unlimited US talk & text",
                "Free Unlimited calls and texts to China and 229+ countries",
            ],
        },
        {
            title: "Lite",
            price: "$15.00",
            features: [
                "3GB of 5G data",
                "Unlimited US talk & text",
            ],
        },
    ];

    return (
        <main className="max-w-xl mx-auto h-dvh bg-white flex flex-col overflow-hidden">
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200 py-3 shrink-0 z-20">
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

            <section className="flex-1 min-h-0 flex flex-col px-4 pt-8 pb-24 overflow-hidden">
                <h1 className="text-2xl font-semibold text-center shrink-0">
                    Select Desired Plan
                </h1>

                <div className="mt-6 flex-1 min-h-0 overflow-y-auto overflow-x-hidden pb-6">
                    <Swiper
                        spaceBetween={14}
                        slidesPerView={1.05}
                        className="recharge-swiper"
                    >
                        {plans.map((plan, index) => (
                            <SwiperSlide key={index} className="h-auto! pb-10">
                                <div className="pt-4 overflow-visible">
                                    <div
                                        className={`relative overflow-visible min-h-140 rounded-2xl bg-white px-4 pt-9 pb-24 shadow-sm border ${plan.border ? "border-(--primary-color)" : "border-gray-200"
                                            }`}
                                    >
                                        {plan.badge && (
                                            <div className="absolute z-20 -top-4 left-3 right-3 rounded-full bg-(--primary-color) py-2 text-center text-xs font-bold text-black">
                                                {plan.badge}
                                            </div>
                                        )}

                                        <h2 className="text-center text-lg font-medium text-red-500">
                                            {plan.title}
                                        </h2>

                                        {plan.oldPrice && (
                                            <p className="mt-2 text-center text-2xl font-semibold text-gray-400 line-through">
                                                {plan.oldPrice}
                                            </p>
                                        )}

                                        <div className="mt-4 flex items-end justify-center gap-1">
                                            <span className="text-4xl font-semibold">
                                                {plan.price}
                                            </span>
                                            <span className="mb-1 text-lg font-bold">/mo</span>
                                        </div>

                                        <button
                                            onClick={() => setSelectedPlan(plan)}
                                            className="mt-6 h-11 w-full rounded-lg bg-(--primary-color) text-sm font-bold text-black"
                                        >
                                            Get the Plan
                                        </button>

                                        <div className="my-5 h-px bg-gray-200" />

                                        <div className="space-y-4">
                                            {plan.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <Check className="mt-0.5 h-6 w-6 shrink-0 text-cyan-600" />
                                                    <p className="text-md font-semibold leading-snug">
                                                        {feature}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="absolute bottom-4 left-4 right-4 text-center mt-4 flex flex-col items-center justify-center gap-3">
                                            <button className="text-xs font-bold underline">
                                                Terms & Conditions
                                            </button>

                                            <button className="rounded-md border-2 border-black px-4 py-1.5 text-xs font-bold">
                                                Broadband Facts
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="fixed bottom-0 left-1/2 z-60 w-full max-w-xl -translate-x-1/2 bg-black py-4">
                    <div className="mx-auto grid max-w-75 grid-cols-2 gap-3 px-4">
                        <button
                            onClick={() => window.history.back()}
                            className="h-10 rounded-xl border border-white text-white px-4 text-xs font-semibold flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        <Link
                            to="/add-information"
                            className="h-10 rounded-xl bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </section>

            {selectedPlan && (
                <div
                    onClick={() => setSelectedPlan(null)}
                    className="fixed inset-0 z-70 flex items-end justify-center bg-black/50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-xl rounded-t-3xl bg-white p-6"
                    >
                        <h2 className="text-xl font-bold text-red-500">
                            {selectedPlan.title}
                        </h2>

                        <p className="mt-3 text-3xl font-extrabold">
                            {selectedPlan.price}
                            <span className="text-base font-bold">/mo</span>
                        </p>

                        <button
                            onClick={() => setSelectedPlan(null)}
                            className="mt-6 h-11 w-full rounded-full bg-black text-white text-sm font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}