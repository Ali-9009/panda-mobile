import { ArrowBigRight, ArrowRight, Check, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

const menuItems = [
    { label: "ACTIVATIONS", path: "/check-compatibility" },
    { label: "MOBILE TOP-UP", path: "/recharge" },
];

import {
    Zap,
    ShieldCheck,
    RadioTower,
    Headset,
    Smartphone,
    BadgeDollarSign,
    CreditCard,
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

export default function StartS() {
    return (
        <main className="max-w-xl mx-auto relative h-dvh w-full overflow-hidden bg-white flex flex-col items-center">
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200  py-3 z-20">
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

            {/* Logo */}
            <div className="relative z-10 text-center mt-28">
                <p className="text-lg font-medium text-black">Welcome To</p>

                <img
                    src="/assets/logo.png"
                    alt="T Mobile"
                    className="mx-auto mt-3 w-44 h-auto"
                />
            </div>


            <section className="mt-8 z-9 space-y-3">
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

                                {/* <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                                    {service.logos.map((logo) => (
                                        <img
                                            key={logo}
                                            src={logo}
                                            alt=""
                                            className="max-h-8 max-w-16 object-contain"
                                        />
                                    ))}
                                </div> */}
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

            {/* <img src="/assets/bg-start.png" className="absolute w-100 -bottom-30 -left-30 z-99 rotate-30" alt="" /> */}

            {/* Bottom Wave */}
            <img
                src="/assets/wave.png"
                alt=""
                className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
            />
        </main>
    );
}