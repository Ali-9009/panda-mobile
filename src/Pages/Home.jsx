import { ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import {
    Zap,
    ShieldCheck,
    RadioTower,
    Headset,
} from "lucide-react";

export default function Home() {
    return (
        <main className="max-w-xl mx-auto h-dvh overflow-hidden bg-white flex flex-col">

            {/* App Header */}
            <header className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shadow-md shadow-gray-200">
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
            </header>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4">

                <img
                    src="/assets/hero-banner.png"
                    alt=""
                    className="w-full rounded-xl"
                />

                <div className="grid grid-cols-2 gap-3 mt-4">
                    <Link to="/check-compatibility">
                        <img
                            src="/assets/b-banner-1.png"
                            alt=""
                            className="w-full rounded-xl"
                        />
                    </Link>

                    <Link to="/recharge">
                        <img
                            src="/assets/b-banner-2.png"
                            alt=""
                            className="w-full rounded-xl"
                        />
                    </Link>
                </div>

                <div className="mt-4">
                    <Link to="/start-screen">
                        <img
                            src="/assets/b-banner-3.png"
                            alt=""
                            className="w-full rounded-xl"
                        />
                    </Link>
                </div>

                <div className="flex items-center justify-center md:gap-12 mt-5 gap-2">
                    <img src="/assets/amex.png" alt="" className="h-8" />
                    <img src="/assets/visa.png" alt="" className="h-8" />
                    <img src="/assets/a-pay.png" alt="" className="h-8" />
                    <img src="/assets/g-pay.png" alt="" className="h-8" />
                    <img src="/assets/m-card.png" alt="" className="h-8" />
                </div>


                <section className="hidden md:block px-4 py-4 mt-5 shadow-xl border border-gray-300 rounded-xl">
                    <div className="grid grid-cols-4 flex-row items-center justify-between divide-x divide-gray-300">

                        <div className="flex flex-row items-center justify-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-(--primary-color) flex items-center justify-center shrink-0">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold">
                                    Take less
                                </h3>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-(--primary-color) flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold">
                                    Secure
                                </h3>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-(--primary-color) flex items-center justify-center shrink-0">
                                <RadioTower className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold">
                                    Carrier
                                </h3>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-2">
                            <div className="w-9 h-9 rounded-full bg-(--primary-color) flex items-center justify-center shrink-0">
                                <Headset className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold">
                                    Support
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}