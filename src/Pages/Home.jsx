import FAQ from "../Components/FAQ";
import GenreSelector from "../Components/GenreSelector";
import HomeBanner from "../Components/HomeBanner";
import NavBar from "../Components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeBanner />
      {/* <div>
        <Cards url={requests.fetchTopAlbum} title="Top Album" />
        <Cards url={requests.fetchNewAlbum} title="New Album" />
      </div> */}
      <GenreSelector />
      <FAQ />
    </div>
  );
}