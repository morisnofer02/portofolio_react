import React from "react"
import CardProfile from "./profile-card.jsx"

export default function Profile() {
    return (
        <div id="profile" className="section">
            <div className="container mx-auto max-w-[1200px] px-3 overflow-hidden">
                <div
                    className="font-secondary text-center font-bold mb-12"
                    data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    <h4 className="text-secondary text-[24px] mb-3">Skills and Technology</h4>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    {/* Bagian kiri */}
                    <div
                        className="text-center w-full max-w-[400px] mx-auto mb-[50px]"
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                    >
                        <div className="min-w-[300px] min-h-[300px] rounded-lg mt-[50px] overflow-hidden">
                            <img src="/images/profile.jpg" alt="" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-gradient text-[50px] mt-[10px]">MorisNofer</h2>
                    </div>
                    {/* Bagian kanan */}
                    <div
                        className="w-full lg:pt-[50px] lg:ml-[50px]"
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1000"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                            {/* Menggunakan Props */}
                            <CardProfile
                                img={`/images/html.png`}
                                title={`HTML`}
                            />
                            <CardProfile
                                img={`/images/css.png`}
                                title={`CSS3`}
                            />
                            <CardProfile
                                img={`/images/js.png`}
                                title={`Javascript`}
                            />
                            <CardProfile
                                img={`/images/bootstrap.png`}
                                title={`Bootstrap`}
                            />
                            <CardProfile
                                img={`/images/tailwindcss.png`}
                                title={`TailwindCSS`}
                            />
                            <CardProfile
                                img={`/images/react.png`}
                                title={`React`}
                            />
                            <CardProfile
                                img={`/images/git.png`}
                                title={`Git`}
                            />
                            <CardProfile
                                img={`/images/laravel.png`}
                                title={`Laravel`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
