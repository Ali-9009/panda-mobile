import { OctagonAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function Retry() {
    return (
        <main className="max-w-xl mx-auto h-dvh overflow-hidden bg-white flex items-center justify-center">
            <div className="flex flex-col items-center">
                <OctagonAlert className="w-24 h-24 text-(--primary-color)" />

                <p className="mt-6 text-sm font-bold text-center">
                    Unfortunately, we couldn’t process your order at this time.
                </p>

                <p className="mt-6 max-w-sm text-center mx-auto">
                    Please check your details and try again.
                </p>

                <Link
                    to="/receipt"
                    className="mt-4 px-6 h-9 rounded-xl bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
                >
                    RETRY
                </Link>
            </div>
        </main>
    );
}