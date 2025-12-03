import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
    const [authUser, setAuthUser] = useAuth();
    const [showLogin, setShowLogin] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const root = document.documentElement;
        const body = document.body;
        const reactRoot = document.getElementById("root");

        root.classList.remove("dark");
        body.classList.remove("dark");
        if (reactRoot) reactRoot.classList.remove("dark");

        root.removeAttribute("data-theme");
        body.removeAttribute("data-theme");
        body.style.backgroundColor = "";
        body.style.color = "";
        if (reactRoot) {
            reactRoot.style.backgroundColor = "";
            reactRoot.style.color = "";
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = (
        <>
            <li><a className="text-black" href="/">Home</a></li>
            <li><a className="text-black" href="/courses">Courses</a></li>
            <li><a className="text-black" href="/contact">Contact</a></li>
            <li><a className="text-black" href="/about">About</a></li>
        </>
    );

    const openLogin = () => setShowLogin(true);

    return (
        <>
            {/* FIXED NAVBAR WITH FULL OPAQUE BACKGROUND */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 
                transition-all duration-300 ease-in-out
                ${sticky ? "shadow-md bg-white" : "bg-white"}`}
            >
                <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
                    <div className="navbar h-20 flex items-center bg-transparent">

                        {/* LEFT */}
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost lg:hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-white z-50 mt-3 p-2 shadow rounded-box w-52 text-black"
                                >
                                    {navItems}
                                </ul>
                            </div>

                            <a className="font-bold text-2xl cursor-pointer text-black">
                                BookStore
                            </a>
                        </div>

                        {/* CENTER */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-black">
                                {navItems}
                            </ul>
                        </div>

                        {/* RIGHT */}
                        <div className="navbar-end flex items-center space-x-3 text-black">

                            {/* SEARCH */}
                            <div className="hidden md:block">
                                <label className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-2">
                                    <input
                                        type="search"
                                        className="grow bg-transparent outline-none text-black placeholder-gray-500"
                                        placeholder="Search"
                                    />
                                    <svg
                                        className="h-[1em] opacity-70 text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                </label>
                            </div>

                            {/* LOGIN / LOGOUT */}
                            {authUser ? (
                                <Logout />
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={openLogin}
                                        className="btn w-20 bg-orange-500 text-white hover:bg-orange-600 transition"
                                        aria-haspopup="dialog"
                                    >
                                        Login
                                    </button>

                                    {showLogin && (
                                        <Login
                                            isOpen={showLogin}
                                            onClose={() => setShowLogin(false)}
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* IMPORTANT: SPACE BELOW NAVBAR TO AVOID OVERLAP */}
            <div className="pt-24"></div>
        </>
    );
}

export default Navbar;
