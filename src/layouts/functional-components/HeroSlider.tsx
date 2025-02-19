import type { Product } from "@/lib/shopify/types";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        navigation={true}
        pagination={{
          clickable: true,
          bulletClass: "banner-pagination-bullet",
          bulletActiveClass: "banner-pagination-bullet-active",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {products?.map((item: Product) => (
          <SwiperSlide key={item.id}>
            <div className="row items-center px-7 xl:px-16">
              <div className="sm:col-12 lg:col-6 order-2 lg:order-0">
                <div className="py-10 text-center lg:py-0">
                  {item?.description && (
                    <p className="text-light dark:text-darkmode-light mb-2 font-medium md:text-xl lg:mb-3">
                      {item.description}
                    </p>
                  )}
                  <div className="row">
                    <h1 className="col-10 sm:col-8 lg:col-12 mx-auto mb-4 lg:mb-10">
                      {item.title}
                    </h1>
                  </div>
                  {item.handle && (
                    <a
                      className="btn btn-sm md:btn-lg btn-primary font-medium"
                      href={`products/${item.handle}`}
                    >
                      Shop Now
                    </a>
                  )}
                </div>
              </div>

              <div className="sm:col-12 lg:col-6">
                {item.featuredImage && (
                  <img
                    src={item.featuredImage.url}
                    className="mx-auto w-[388px] lg:w-full"
                    width={"507"}
                    height={"385"}
                    alt="banner image"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
