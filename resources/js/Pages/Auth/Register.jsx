import React from 'react';
import { Head, Link } from '@inertiajs/react';
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import Step1 from "@/Pages/Auth/RegisterSteps/Step1.jsx";
import Step2 from "@/Pages/Auth/RegisterSteps/Step2.jsx";

export default function Register({step, validated}) {
    return (
        <>
        <nav className="bg-white border-b border-gray-100">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-10">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                            <span className="sm:hidden">
                                UBTEB
                            </span>
                            <span className="hidden lg:block md:block">
                                UGANDA BUSINESS AND TECHNICAL EXAMINATIONS BOARD
                            </span>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="shrink-0 sm:flex sm:items-center">
                            <div className="relative">
                                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook text-blue-700 text-xl mr-2"></i></a>
                                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-square-twitter text-blue-700 text-xl  mr-2"></i></a>
                                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram text-orange-500 text-xl mr-2"></i></a>
                                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin text-blue-700 text-xl mr-2"></i></a>
                                <a href="https://youtube.com" target="_blank"><i className="fa-brands fa-youtube text-red-600 text-xl mr-2"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
        <div className="min-h-screen px-20 py-10 flex flex-col sm:justify-center items-center pt-6 bg-gray-100">
            <Head title="Register" />
            <h1 className="text-center yellow font-bold text-xl mb-2"> ---- Get Started - Let us Keep in Touch! ----</h1>
            <p className="text-3xl text-center font-bold">Are you a former student of UBTEB and or its previous Institutions? Register Below.</p><br/>
            {step===1?<Step1 />:<Step2 validated={validated}/>}
        </div>
            </>
    );
}
