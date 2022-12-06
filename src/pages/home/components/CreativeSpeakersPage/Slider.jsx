import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CreativeSpeakers from "../../../../design-system/components/CreativeSpeakers/CreativeSpeakers";
import speakerData from "../../../../design-system/components/CreativeSpeakers/Data";

export default function slider() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={4}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {speakerData.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <CreativeSpeakers
              img={item.img}
              alt={item.alt}
              job={item.job}
              name={item.name}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
