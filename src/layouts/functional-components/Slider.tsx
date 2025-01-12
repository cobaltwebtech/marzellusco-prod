import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
    return (
      <>
        <Swiper
            autoplay={{
                delay: 3000, // Delay between transitions (in milliseconds)
                disableOnInteraction: false // Continue autoplay even after user interaction
            }}
            navigation={true}
            pagination={{
                clickable: true,
                bulletclass: "banner-pagination-bullet",
                bulletActiveclass: "banner-pagination-bullet-active",
            }}
            modules={[Autoplay, Pagination, Navigation]}
        >
            <SwiperSlide>
                <div className="row items-center px-7 py-12 xl:px-16">
                    <div className="sm:col-12 lg:col-6 order-2 lg:order-0">
                        <div className="text-center py-10 lg:py-0">
                            <div className="row">
                                <h3 className="mb-4 lg:mb-10 col-10 sm:col-8 lg:col-12 mx-auto">
                                    Giving Luxury Back Its Meaning
                                </h3>
                            </div>
                            <p className="mb-4 lg:mb-8 text-light dark:text-darkmode-light font-medium md:text-xl">
                                Trends may come and go, but the classic crossbody bag is forever. This bag will last and will only get more beautiful as the years go by.
                            </p>
                            <a
                                className="btn btn-sm md:btn-lg btn-primary font-medium"
                                href="/products"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>

                    <div className="sm:col-12 lg:col-6">
                        <img
                            src="/images/slider-images/slider-1.avif"
                            className="mx-auto w-[388px] lg:w-full"
                            width={"507"}
                            height={"385"}
                            alt="slide image"
                        />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="row items-center px-7 py-12 xl:px-16">
                    <div className="sm:col-12 lg:col-6 order-2 lg:order-0">
                        <div className="text-center py-10 lg:py-0">
                            <div className="row">
                                <h3 className="mb-4 lg:mb-10 col-10 sm:col-8 lg:col-12 mx-auto">
                                    100% Handmade Design
                                </h3>
                            </div>
                            <p className="mb-4 lg:mb-8 text-light dark:text-darkmode-light font-medium md:text-xl">
                                Our bags are handcrafted in Italy. We use genuine Italian Sahara leather that brings timeless style and authenticity to your wardrobe.
                            </p>
                            <a
                                className="btn btn-sm md:btn-lg btn-primary font-medium"
                                href="/products"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>

                    <div className="sm:col-12 lg:col-6">
                        <img
                            src="/images/slider-images/slider-2.avif"
                            className="mx-auto w-[388px] lg:w-full"
                            width={"507"}
                            height={"385"}
                            alt="slide image"
                        />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="row items-center px-7 py-12 xl:px-16">
                    <div className="sm:col-12 lg:col-6 order-2 lg:order-0">
                        <div className="text-center py-10 lg:py-0">
                            <div className="row">
                                <h3 className="mb-4 lg:mb-10 col-10 sm:col-8 lg:col-12 mx-auto">
                                    Enduring Style and Quality
                                </h3>
                            </div>
                            <p className="mb-4 lg:mb-8 text-light dark:text-darkmode-light font-medium md:text-xl">
                                Marzlleus focuses on creating high-quality, timeless fashion pieces that transcend temporary trends.
                            </p>
                            <a
                                className="btn btn-sm md:btn-lg btn-primary font-medium"
                                href="/products"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>

                    <div className="sm:col-12 lg:col-6">
                        <img
                            src="/images/slider-images/slider-3.avif"
                            className="mx-auto w-[388px] lg:w-full"
                            width={"507"}
                            height={"385"}
                            alt="slide image"
                        />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Slider;
