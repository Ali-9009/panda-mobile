import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function Review() {
    return (
        <main className="max-w-xl mx-auto h-dvh overflow-hidden bg-white flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-5 shadow-sm">
                <Link to="/">
                    <img
                        src="/assets/logo.png"
                        alt="Logo"
                        className="h-10 object-contain"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-5 h-5" />
                </div>
            </header>

            <section className="flex-1 overflow-y-auto px-6 py-8">
                <h1 className="text-center text-2xl mb-8">
                    Review <span className="font-bold">Your Purchase</span>
                </h1>

                {/* Customer Information */}
                <div className="mb-7">
                    <h2 className="border-l-4 border-(--primary-color) pl-2 text-sm font-bold mb-3">
                        Customer Information
                    </h2>

                    <div className="rounded-md border border-gray-200 shadow-md p-4">
                        <div className="flex justify-between gap-3">
                            <div>
                                <h3 className="font-bold text-lg">Carlos Fonte</h3>
                                <p className="text-xs text-gray-500">Carlosfonte@Gmail.Com</p>
                                <p className="text-xs text-gray-500">123 Miami Florida</p>
                            </div>

                            <p className="text-xs text-(--primary-color) whitespace-nowrap">
                                IMEI:9827772766166537388
                            </p>
                        </div>

                        <div className="flex justify-between mt-5 text-sm">
                            <span className="text-gray-500">YOUR PLAN</span>
                            <span className="font-bold">T-Mobile $35</span>
                        </div>
                    </div>
                </div>

                {/* Purchased Item */}
                <div className="mb-7">
                    <h2 className="border-l-4 border-(--primary-color) pl-2 text-sm font-bold mb-3">
                        Purchased Item
                    </h2>

                    <div className="rounded-md border border-gray-200 p-4">
                        <div className="flex gap-4">
                            <div className="w-28 rounded bg-white shadow-md p-3 text-center flex-shrink-0">
                                <div className="text-(--primary-color) font-bold">
                                    <span className="text-xs align-top">$</span>
                                    <span className="text-3xl">35</span>
                                    <span className="text-[9px]">/mo</span>
                                </div>

                                <p className="text-[7px] font-semibold leading-tight">
                                    30GB/mo. at max 3 Mbps, then speeds slowed to max 1.5 Mbps.
                                </p>

                                <h3 className="text-[9px] font-bold mt-2">
                                    Unlimited Saver
                                </h3>
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xs font-bold">
                                            T-Mobile $35 (Data Only)
                                        </h3>
                                        <p className="text-[10px] text-gray-500">standard</p>
                                        <p className="text-[10px] font-bold">15GB DATA ONLY</p>
                                    </div>

                                    <p className="text-(--primary-color) font-bold text-lg">
                                        $35.00
                                    </p>
                                </div>

                                <div className="mt-5 space-y-2">
                                    <AddOn label="International Talk & Text Feature · $15.00" />
                                    <AddOn label="Optional add-on: Canada & Mexico Feature · $5.00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Purchase Overview */}
                <div className="rounded-md border border-gray-200 shadow-md p-4">
                    <h2 className="font-bold text-sm mb-5">Purchase Overview</h2>

                    <PriceRow label="Sub Total" value="$68.00" />
                    <PriceRow label="Tax" value="$4.76" />
                    <PriceRow label="Processing Fee" value="$4.76" />
                    <PriceRow label="Total" value="$72.76" pink />
                </div>
            </section>

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
                        to="/request"
                        className="h-10 rounded-full bg-[var(--primary-color)] text-white text-xs font-semibold flex items-center justify-center"
                    >
                        Confirm
                    </Link>
                </div>
            </div>

        </main>
    );
}

function AddOn({ label }) {
    return (
        <div className="flex items-center justify-between bg-gray-100 rounded-full px-3 py-2">
            <span className="text-[9px]">{label}</span>
            <button className="w-7 h-4 rounded-full bg-gray-300 relative">
                <span className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-600" />
            </button>
        </div>
    );
}

function PriceRow({ label, value, pink }) {
    return (
        <div className="flex justify-between text-sm mb-3">
            <span className={pink ? "text-(--primary-color)" : "text-gray-500"}>
                {label}
            </span>
            <span className={pink ? "font-bold text-(--primary-color)" : "font-bold"}>
                {value}
            </span>
        </div>
    );
}