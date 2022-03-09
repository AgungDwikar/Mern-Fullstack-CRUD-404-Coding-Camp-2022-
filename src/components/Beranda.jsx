import React from "react";

function Beranda() {
    return (
        <div className=" bg-[#E7E7DE] ">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-700 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="">Mern</span>
                                </span>
                                stack crud di 404 coding camp
                            </h2>
                            <p className="text-base text-blue-600 md:text-lg">
                                Selamat datang di toko buku Camp 404!
                            </p>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none bg-blue-700"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Beranda;
