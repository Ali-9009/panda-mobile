import { ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import {
    Zap,
    ShieldCheck,
    RadioTower,
    Headset,
    Smartphone,
    BadgeDollarSign,
    CreditCard,
    ArrowRight
} from "lucide-react";


const services = [
    {
        title: "Activar un nuevo plan",
        description: "Activa tu línea en minutos con eSIM o SIM físico.",
        icon: Smartphone,
        to: "/check-compatibility",
        logos: [
            "/assets/att.png",
            "/assets/app-logo.png",
            "/assets/cricket.png",
        ],
    },
    {
        title: "Recargar tu teléfono",
        description: "Añade saldo a tu plan actual al instante.",
        icon: BadgeDollarSign,
        to: "/recharge",
        logos: [
            "/assets/simple-mobile.png",
            "/assets/Claro.png",
            "/assets/metro.png",
            "/assets/cubacel.png",
        ],
    },
    {
        title: "Compra tarjetas virtuales",
        description: "Compra tarjetas para tus servicios favoritos al instante.",
        icon: CreditCard,
        to: "/start-screen",
        logos: [
            "/assets/spotify.webp",
            "/assets/netflix.png",
            "/assets/hulu.webp",
        ],
    },
];

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
                    src="/assets/b-banner-4.png"
                    alt=""
                    className="w-full"
                />

                <section className="mt-4 space-y-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.title}
                                to={service.to}
                                className="group grid min-h-29 grid-cols-[76px_1fr_45px] items-center rounded-2xl border border-gray-200 bg-white px-3 py-3 shadow-[0_5px_16px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                {/* Icon */}
                                <div className="flex h-full items-center justify-center border-r border-gray-200 pr-3">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-(--primary-color) shadow-[0_5px_8px_rgba(185,0,0,0.25)]">
                                        <Icon
                                            strokeWidth={1.8}
                                            className="h-8 w-8 text-white"
                                        />
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="min-w-0 px-4">
                                    <h2 className="text-[16px] font-bold text-gray-950">
                                        {service.title}
                                    </h2>

                                    <p className="mt-2 text-[11px] text-gray-600">
                                        {service.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                                        {service.logos.map((logo) => (
                                            <img
                                                key={logo}
                                                src={logo}
                                                alt=""
                                                className="max-h-8 max-w-16 object-contain"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex items-center justify-center">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-(--primary-color) text-white shadow-md transition group-hover:translate-x-1">
                                        <ArrowRight
                                            strokeWidth={3}
                                            className="h-5 w-5"
                                        />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </section>

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