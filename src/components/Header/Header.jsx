import React from "react";

export default function Header () {
    return (
        <div>
            <header className="flex items-center justify-center gap-2 py-5 bg-red-500 text-2xl text-white font-bold font-montserrat" >
                <span><svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 32 32"><path fill="white" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26.82A12.82 12.82 0 1 0 28.82 16A12.82 12.82 0 0 0 16 3.18"></path><path fill="white" d="M2.78 15.41h26.43v1.18H2.78zm13.54-4.94a44.78 44.78 0 0 1-11.9-1.55l.34-1.13c.11 0 11.28 3.32 22.43 0l.33 1.13a39.37 39.37 0 0 1-11.2 1.55M4.79 23.91l-.34-1.13c11.5-3.42 22.63-.14 23.1 0l-.34 1.13c-.11-.04-11.27-3.32-22.42 0"></path><path fill="white" d="M11.47 28.76a35.45 35.45 0 0 1-.74-25.71l1.08.46a34.23 34.23 0 0 0 .74 24.79Zm8.97 0l-1.08-.46a34.23 34.23 0 0 0 .74-24.78l1.08-.46a35.46 35.46 0 0 1-.74 25.7M15.41 2.78h1.18V29.7h-1.18z"></path></svg></span>
                <h1 className="">My travel journal </h1>

            </header>
        </div>
    )
}