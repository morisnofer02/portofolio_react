import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
    return (
        <div id="home" className="section container mx-auto max-w-[1200px] px-3">
            <div className="w-full" data-aos="zoom-in">
                <div className="text-center font-secondary font-black text-[30px]">
                    Hello, I am
                    <div>
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer",
                                3000,
                                "Backend Developer",
                                3000,
                                "Web Design",
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-secondary"
                        />
                    </div>
                </div>
                <div className="max-w-[750px] text-center text-[18px] mx-auto mt-5">Sebagai seorang web developer yang berdedikasi, saya memiliki fokus kuat pada pembuatan situs web dan aplikasi web yang responsif serta ramah pengguna.</div>
            </div>
        </div>
    )
}
