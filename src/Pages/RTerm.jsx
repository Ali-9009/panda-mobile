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
                        Terms & Conditions
                    </h1>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden mt-10">
                        {/* Pink Header */}
                        <div className="bg-(--primary-color) text-white text-center text-sm font-semibold py-3">
                            For Digital ESIM Purchase
                        </div>

                        {/* Content */}
                        <div className="p-4 text-md font-normal leading-5 text-gray-700 space-y-4">
                            <p>
                                • This Product Is NON-REFUNDABLE.
                            </p>

                            <p>
                                • You May Be Able To Lower The Monthly Cost Of
                                Your Wireless Service If You Are Eligible For
                                The Federal Government's Affordable Connectivity
                                Program.
                            </p>

                            <p>
                                • <strong>AT&T PREPAID Service</strong> Is Subject
                                To The AT&T Consumer Service Agreement (Agreement)
                                located at att.com/ConsumerServiceAgreement.
                                Activation and/or use of AT&T PREPAID service
                                constitutes acceptance of the Agreement, which
                                includes dispute resolution by binding arbitration.
                                AT&T PREPAID cards and other account payments are
                                nontransferable and nonrefundable. See
                                att.com/broadbandinfo for information on AT&T
                                network management practices.
                            </p>

                            {/* Demo long content */}
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Voluptates, suscipit. Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Voluptates,
                                suscipit.
                            </p>

                            <button className="text-gray-500 font-semibold text-xs">
                                More...
                            </button>
                        </div>
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
                        to="/review"
                        className="h-10 rounded-full bg-[var(--primary-color)] text-white text-xs font-semibold flex items-center justify-center"
                    >
                        Next
                    </Link>
                </div>
            </div>

        </main>
    );
}