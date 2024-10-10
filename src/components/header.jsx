import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Header() {
    return (
        <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
            <div className="flex justify-between items-center">
                {/* Bagian kiri */}
                <div
                    className="text-gradient font-secondary"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
                    <a href="#">
                        <h1 className="text-[30px] leading-none font-bold">MORIS</h1>
                        <h4 className="font-normal leading-none">NOFER</h4>
                    </a>
                </div>
                {/* Bagian kanan */}
                <div
                    className="flex items-center space-x-3"
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
                    <a href="https://github.com/morisnofer02" target="_blank">
                        <BsGithub className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/moris-nofer-nanda-alim-2b3559293/" target="_blank">
                        <BsLinkedin className="text-2xl" />
                    </a>
                </div>
            </div>
        </div>
    )
}
