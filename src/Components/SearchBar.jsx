import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import requests from "../const/request";
import Menu from "./Menu";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  const { response: newAlbums } = useAxios(requests.fetchNewAlbum);
  const { response: topAlbums } = useAxios(requests.fetchTopAlbum);

  useEffect(() => {
    if (topAlbums && newAlbums) {
      setAlbums(topAlbums.concat(newAlbums));
    }
  }, [topAlbums, newAlbums]);

  useEffect(() => {
    function filterData(albums) {
      if (input) {
        const filteredData = albums?.filter((album) =>
          album?.title?.toLowerCase()?.includes(input.toLowerCase())
        );
        setFilteredAlbums(filteredData.slice(0, 5));
      }
    }
    filterData(albums);
  }, [input, albums]);

  return (
    <div className="relative flex items-center rounded-lg">
      <input
        type="search"
        value={input}
        placeholder="Search an album of your choice"
        className="h-8 w-[400px] px-4 pr-10 focus:outline-none focus:ring focus:border-b1 rounded-lg"
        autoComplete="off"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
        <SearchIcon />
      </button>
      {input && <Menu albums={filteredAlbums} />}
    </div>
  );
}
