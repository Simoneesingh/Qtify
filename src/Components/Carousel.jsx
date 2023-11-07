import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "./Card";

export default function Carousel({ url }) {
  const [albums, setAlbums] = useState([]);
  const { response, loading } = useAxios(url);

  useEffect(() => {
    if (response) {
      setAlbums(response);
    }
  }, [response]);

  console.log(response);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={"auto"}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id} className="max-w-[12rem]">
          <Card album={album} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
