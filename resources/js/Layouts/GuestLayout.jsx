import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="grid grid-cols-2 max-w-sm">
                <Link
                    href='/'
                    className="row-span-2"
                >
                    <ApplicationLogo />
                </Link>
                <div className="font-bold">UGANDA BUSINESS AND TECHNICAL EXAMINATIONS BOARD</div>
                <div className="text-red-600">Setting pace for quality Assessment.</div>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
