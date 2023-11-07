import SearchIcon from "@mui/icons-material/Search";

export default function NavBar() {
  //   const genreTitle = "pop";

  return (
    <nav className="flex items-center justify-between bg-b2 w-full py-3 px-6  ">
      <img src="./logo.png" alt="icon" className="h-8" />
      <div className="relative flex items-center rounded-lg">
        <input
          type="text"
          placeholder="Search an album of your choice"
          className="h-8 w-[300px] px-4 pr-10 focus:outline-none focus:ring focus:border-b1 rounded-lg"
        />
        <button
          onChange={() => {}}
          className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
        >
          {/* {genre.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))} */}
          <SearchIcon />
        </button>
      </div>
      <button className="flex items-center bg-b1 rounded-lg h-8 px-4 py-2 text-b2">
        Give Feedback
      </button>
    </nav>
  );
}
