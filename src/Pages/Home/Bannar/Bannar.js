import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Bannar = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
       <div className="w-full ">
       <SwiperSlide><img className="w-full h-96"  src="https://i.ibb.co/WyHqCrC/electric-hand-tools-red-wood-sanding-mashine-corded-jigsaw-cordless-drill-small-plunge-router-millin.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full" src="https://i.ibb.co/6H1sWJG/set-different-construction-tools-background-banner-design-set-different-construction-tools-white-bac.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-96" src="https://i.ibb.co/dD5jQ2k/construction-carpentry-electric-hand-tools-wooden-background-178769936.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-96" src="https://i.ibb.co/GTg3pFH/electric-hand-tools-orbit-wood-sander-plunge-router-milling-machine-cordless-drill-driver-vintage-wo.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full" src="https://i.ibb.co/r3dYj9b/panorama-banner-assorted-hand-tools-wood-panorama-banner-assorted-hand-tools-wood-renovations-diy-bu.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-96" src="https://i.ibb.co/3Sg8fkj/professional-hair-dresser-tools-pink-background-copy-space-124461869.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-96" src="https://i.ibb.co/Zcx0h6W/tools-tool-hand-construction-23602042.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full" src="https://i.ibb.co/rHbD8gs/tool-tools-border-27501350.jpg" alt="" /></SwiperSlide>
       </div>
     
    </Swiper>
  </>
)};

export default Bannar;
