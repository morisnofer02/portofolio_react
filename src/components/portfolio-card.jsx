import React from "react"
export default function CardPortfolio({ img, title }) {
    return (
        <div className="w-full">
            <div className="bg-white h-full w-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
                <img src={img} alt="" className="min-h-[200px]" />
                <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                    <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                        <div className="bg-white rounded-full px-5 inline-block">
                            <h4 className="text-gradient">{title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
