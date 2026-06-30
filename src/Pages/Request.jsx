import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Request() {
    return (
        <main className="max-w-xl mx-auto h-dvh overflow-hidden bg-white flex items-center justify-center">
            <div className="flex flex-col items-center">
                <LoaderCircle className="w-24 h-24 text-(--primary-color) animate-spin" />

                <p className="mt-6 text-sm font-bold text-black">
                    Requesting...
                </p>

                <Link
                    to="/success"
                    className="mt-4 px-6 h-9 rounded-full bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
                >
                    CANCEL PAYMENT
                </Link>
            </div>
        </main>
    );
}