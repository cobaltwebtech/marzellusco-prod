import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ButtonProps {
    show: boolean;
    text: string;
    link: string;
  }
  
  interface SlideProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    button: ButtonProps;
  }
  
  interface SlideShowProps {
    slides: SlideProps[];
  }
  
const SlideShow: React.FC<SlideShowProps> = ({ slides }) => {
    return (
      <>
        <Swiper
            autoplay={{
                delay: 3000, // Delay between transitions (in milliseconds)
                pauseOnMouseEnter: true // Pause when user interacts with the slider
            }}
            navigation={true}
            pagination={{
                clickable: true,
                bulletclass: "banner-pagination-bullet",
                bulletActiveclass: "banner-pagination-bullet-active",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            autoHeight={true}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="row items-center px-7 py-12 xl:px-16">
                        <div className="sm:col-12 lg:col-6 order-2 lg:order-0">
                            <div className="text-center py-10 lg:py-0">
                                <div className="row">
                                    <h3 className="mb-4 lg:mb-10 col-10 sm:col-8 lg:col-12 mx-auto">
                                        {slide.title}
                                    </h3>
                                </div>
                                <p className="mb-4 lg:mb-8 text-light dark:text-darkmode-light font-medium md:text-xl">
                                    {slide.description}
                                </p>
                                {slide.button && slide.button.show && (
                                    <a
                                        className="btn btn-sm md:btn-lg btn-primary font-medium"
                                        href={slide.button.link}
                                    >
                                        {slide.button.text}
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="sm:col-12 lg:col-6">
                            <img
                                src={slide.image}
                                className="mx-auto w-auto max-h-[350px] sm:max-h-[500px] rounded-md"
                                alt={slide.alt}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </>
    );
};

export default SlideShow;
