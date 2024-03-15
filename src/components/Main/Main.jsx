import React from "react";
// import image1 from "../../assets/australia.png"

// import Items from "../../data";

export default function Main (props) {
    return (
        <main className="py-10 px-5 flex gap-5 justify-center items-center font-montserrat text-black box-border">
            <img src={require('../../assets/'+props.item.img)} alt="japan img" className=" w-52 h-60 " />
            <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center text-sm font-light">
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16">
                        <path fill="red" d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11s5-8.2 5-11s-2.2-5-5-5m0 8C6.3 8 5 6.7 5 5s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></path>
                        </svg>
                        <p className="text-lg font-medium">{props.item.country}</p>
                    </span>
                    <button className="text-gray-600 underline decoration-gray-300 underline-offset-4">{props.item.link}</button>
                </div>
                <h2 className="font-bold text-xl"> {props.item.location}</h2>
                <h3 className="font-medium text-sm py-3">{props.item.date}</h3>
                <p className=" font-light text-md tracking-tight ">{props.item.description}</p>

            </div>
        </main>
    )
}