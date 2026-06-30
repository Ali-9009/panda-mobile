import { ArrowLeft, ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

export default function Receipt() {
    return (
        <main className="max-w-xl mx-auto h-dvh overflow-hidden bg-white flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-4 shadow-sm">
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

            {/* Content */}
            <section className="flex-1 overflow-y-auto px-8 py-7">
                <h1 className="text-center text-2xl mb-6">
                    Activation <span className="font-bold">Receipt</span>
                </h1>

                <ReceiptSection title="Transaction Details">
                    <Row label="Order ID" value="1367Bhj0cv3Dng5nw6vr9b" />
                    <Row label="Transaction Date & Time" value="02-03-2026 | 10:25:26 PM" />
                    <Row label="Status" value="Success" success />
                </ReceiptSection>

                <ReceiptSection title="Customer Info">
                    <Row label="First Name" value="Jane" />
                    <Row label="Last Name" value="Doe" />
                    <Row label="Email" value="janedoe123@gmail.com" />
                    <Row label="Address" value="12, Abc Street, Xyz" />
                </ReceiptSection>

                <ReceiptSection title="Product Details">
                    <Row label="Carrier" value="AT & T" />
                    <Row label="Plan" value="AT&T $35" />
                    <Row label="Activation Date" value="03-03-2026" />
                    <Row label="SIM No." value="1111100000" />
                    <Row label="IMEI" value="9827772766166537388" />
                </ReceiptSection>

                <ReceiptSection title="Payment Summary">
                    <Row label="Plan Amount" value="$35.00" />
                    <Row label="Add-On Amount" value="$0.00" />
                    <Row label="Processing Fee" value="$4.76" />
                    <Row label="Tax's & Fee" value="$4.76" />
                    <div className="border-t border-gray-200 mt-3 pt-3">
                        <Row label="Total" value="$44.00" total />
                    </div>
                </ReceiptSection>
            </section>

            {/* Bottom Buttons */}
            <div className="px-6 pb-6 flex items-center gap-2">
                <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center flex-shrink-0">
                    <Link to="/">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                </button>

                <button className="flex-1 h-10 rounded-full bg-(--primary-color) text-white text-xs font-bold">
                    PRINT
                </button>

                <button className="flex-1 h-10 rounded-full bg-(--primary-color) text-white text-xs font-bold">
                    EMAIL
                </button>

                <button className="flex-1 h-10 rounded-full bg-(--primary-color) text-white text-xs font-bold">
                    TEXT 
                </button>
            </div>
        </main>
    );
}

function ReceiptSection({ title, children }) {
    return (
        <div className="mb-5">
            <h2 className="border-l-4 border-(--primary-color) pl-2 text-sm font-bold mb-3">
                {title}
            </h2>
            <div className="space-y-1">{children}</div>
        </div>
    );
}

function Row({ label, value, success, total }) {
    return (
        <div className="flex justify-between gap-4 text-xs">
            <span className="text-gray-500">{label}</span>
            <span
                className={`text-right font-medium ${success || total ? "text-green-500 font-bold" : "text-black"
                    }`}
            >
                {value}
            </span>
        </div>
    );
}