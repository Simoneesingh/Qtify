import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import useAxios from "../hooks/useAxios";
import requests from "../const/request";
import Carousel from "./Carousel";

const genres = ["All", "Rock", "Pop", "Jazz", "Blues"];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function GenreSelector() {
  const [value, setValue] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [songs, setSongs] = useState([]);

  const { response } = useAxios(requests.fetchSongs);

  useEffect(() => {
    if (response) {
      const filteredSongs =
        selectedGenre === "All"
          ? response
          : response.filter((song) => song.genre.label === selectedGenre);

      setSongs(filteredSongs);
    }
  }, [response, selectedGenre]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedGenre(genres[newValue]);
  };

  return (
    <div className=" flex flex-col gap-4 px-8">
      <h1 className="text-white text-2xl font-bold mt-4">Songs</h1>

      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: { backgroundColor: "#34C94B", height: "4px" },
        }}
        sx={{
          "& button": {
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            "&.Mui-selected": { color: "white" },
          },
        }}
      >
        {genres.map((genre, id) => (
          <Tab
            label={genre}
            key={genre}
            sx={{ color: "white" }}
            {...a11yProps(id)}
          />
        ))}
      </Tabs>
      <Carousel songs={songs} />
    </div>
  );
}
