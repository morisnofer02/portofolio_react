import React from "react"
import CardPortfolio from "./portfolio-card.jsx"

export default function Portfolio() {
    return (
        <div id="portfolio" className="section">
            <div className="container max-w-[1200px] mx-auto px-3 pt-3 pb-20">
                <div
                    className="flex flex-col lg:items-center lg:flex-row justify-between mb-[50px]"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    <div className="order-2 lg:order-1">
                        <h4 className="text-secondary font-secondary text-[24px]">
                            Last Project
                        </h4>
                        <p className="text-gradient font-primary max-w-[700px] mx-auto text-[18px]">
                            Berikut beberapa project yang pernah saya  kerjakan
                        </p>
                    </div>
                    <div className="order-1 lg:order-2 text-center">
                        <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
                            08
                        </h2>
                        <p className="text-[18px]">Project Selesai</p>
                    </div>
                </div>

                <div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    {/* Menggunakan props */}
                    <CardPortfolio
                        img={`images/1.png`}
                        title={`Sistem Pakar`}
                    />
                    <CardPortfolio
                        img={`images/2.png`}
                        title={`Landing Page Sekolah`}
                    />
                    <CardPortfolio
                        img={`images/3.png`}
                        title={`Landing Page Smartphone`}
                    />
                    <CardPortfolio
                        img={`images/4.png`}
                        title={`Portfolio TailwindCSS`}
                    />
                    <CardPortfolio
                        img={`images/5.png`}
                        title={`Keyboard`}
                    />
                    <CardPortfolio
                        img={`images/6.png`}
                        title={`Kalkulator`}
                    />
                    <CardPortfolio
                        img={`images/7.png`}
                        title={`Img Slider`}
                    />
                    <CardPortfolio
                        img={`images/8.png`}
                        title={`CRUD Laravel`}
                    />
                </div>
            </div>
        </div>
    )
}
