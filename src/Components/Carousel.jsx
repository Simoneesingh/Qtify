import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "./Card";

export default function Carousel({ url, songs }) {
  const [albums, setAlbums] = useState([]);

  const { response } = useAxios(url);

  useEffect(() => {
    if (!songs?.length) {
      if (response) {
        setAlbums(response);
      }
    } else {
      setAlbums(songs);
    }
  }, [response, songs]);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={"auto"}
      navigation
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id} className="max-w-[12rem]">
          <Card album={album} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
