import Card from "./Card";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Cards({ url, title }) {
  const [albums, setAlbums] = useState([]);
  const { response, loading } = useAxios(url);

  useEffect(() => {
    if (response) {
      setAlbums(response);
    }
  }, [response]);

  return (
    <>
      {loading ? (
        <div className="h-72 flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="px-8">
          <h1 className="text-white font-bold text-3xl">{title}</h1>
          <div className="flex flex-wrap sm:justify-start justify-center gap-[5px]">
            {albums?.map((album) => (
              <div key={albums.id} className="min-w-[160px] md:min-w-[200px]">
                <Card album={album} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
