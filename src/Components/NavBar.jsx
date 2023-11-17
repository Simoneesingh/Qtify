import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-b2 w-full py-3 px-6  ">
      <img src="./logo.png" alt="icon" className="h-8" />
      <SearchBar />
      <button className="flex items-center bg-b1 rounded-lg h-8 px-4 py-2 text-b2">
        Give Feedback
      </button>
    </nav>
  );
}
