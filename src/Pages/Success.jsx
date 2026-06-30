import { CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Success() {
    return (
        <main className="max-w-xl mx-auto h-dvh overflow-hidden bg-white flex items-center justify-center">
            <div className="flex flex-col items-center">
                <CheckCheck className="w-24 h-24 text-(--primary-color)" />

                <p className="mt-6 text-sm font-bold text-black">
                    Your action means a lot to us.
                </p>

                <p className="mt-6 px-4 max-w-sm text-center mx-auto">
                    We appreciate your support and look forward to seeing you again soon!
                </p>

                <Link
                    to="/retry"
                    className="mt-4 px-6 h-9 rounded-full bg-(--primary-color) text-white text-xs font-semibold flex items-center justify-center"
                >
                    DONE
                </Link>
            </div>
        </main>
    );
}